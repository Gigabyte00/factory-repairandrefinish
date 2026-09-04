#!/bin/zsh
# Propagate the C1 email-compliance fixes from the canonical spine to fleet repos.
# HELD until owner email activation (Resend key + per-domain DNS). Dry-run by default; pass
# --apply to write. Hash-gated: a target file is overwritten with the fixed canonical file
# ONLY if it still matches the PRE-FIX canonical hash (i.e. an un-customized clean copy).
# Diverged files are flagged for manual patch — never blind-overwritten.
#
#   ./propagate-email-compliance.sh            # dry-run: show clean-copy vs diverged
#   ./propagate-email-compliance.sh --apply    # write the safe copies

set -e
SPINE=/Users/tank/Dev/_cj-clean-spine
DEV=/Users/tank/Dev
APPLY=0; [[ "$1" == "--apply" ]] && APPLY=1

# Pre-fix canonical hashes (git HEAD~1 of commit 7d91219). Files matching these are safe.
typeset -A OLD
OLD[src/lib/email.ts]=7b1e43513f033c338de5c26e3323fbed2dc6b19d
OLD[src/lib/email-templates.ts]=862499935d424eb0edfcbb7c6c3de84219361bab
OLD[src/lib/unsubscribe-token.ts]=eb9da5437c724a40843c6ace3c6892609ee18dcf
OLD[src/app/api/unsubscribe/route.ts]=3162d8b5ec4213409e637a9a77df08259b3e3ddc
FILES=(src/lib/email.ts src/lib/email-templates.ts src/lib/unsubscribe-token.ts src/app/api/unsubscribe/route.ts)

copied=0; diverged=0; missing=0
print "mode: $([[ $APPLY == 1 ]] && echo APPLY || echo DRY-RUN)\n"

# Target repos = every dir under ~/Dev carrying the email lib, minus the canonical spine.
# Process substitution (not a pipe) keeps the loop in this shell so counters persist.
while read repo; do
    [[ "$repo" == "$SPINE" ]] && continue
    for f in $FILES; do
      tgt="$repo/$f"
      if [[ ! -f "$tgt" ]]; then print "MISSING  $tgt"; missing=$((missing+1)); continue; fi
      h=$(shasum "$tgt" | cut -d' ' -f1)
      if [[ "$h" == "${OLD[$f]}" ]]; then
        if [[ $APPLY == 1 ]]; then cp "$SPINE/$f" "$tgt"; fi
        copied=$((copied+1))
      else
        print "DIVERGED $tgt  (hand-patch the 3 logical edits)"
        diverged=$((diverged+1))
      fi
    done
done < <(find "$DEV" -maxdepth 6 -path "*/src/lib/email-templates.ts" \
  -not -path "*/node_modules/*" -not -path "*/.claude/worktrees/*" -not -path "*/.next/*" 2>/dev/null \
  | sed 's|/src/lib/email-templates.ts||' | sort)

print "\nclean-copy (safe): $copied  |  diverged (manual): $diverged  |  missing: $missing"
[[ $APPLY == 0 ]] && print "dry-run only — re-run with --apply after owner Resend/DNS/env is set."
