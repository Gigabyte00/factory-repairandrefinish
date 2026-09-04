# Email compliance rollout (C1) — staged 2026-07-29

The 3 CAN-SPAM / one-click-unsubscribe fixes that gate the fleet's first legal email send
are **done and verified in the canonical spine** (`_cj-clean-spine`, commit `7d91219`).
Email is **OFF fleet-wide** (`RESEND_API_KEY` unset → sends are silent no-ops), so these
changes alter no live behavior today. This doc is the turnkey roll for **owner activation**.

## What changed (4 files, canonical)
1. **`src/lib/email-templates.ts`** — footer now renders a tokenized **Unsubscribe** link
   (`buildUnsubscribeUrl`, previously orphaned) and a **physical postal address**
   (`SENDER_POSTAL_ADDRESS` env — owner-supplied at activation; no placeholder fabricated).
2. **`src/lib/email.ts`** — every `emails.send()` (welcome, lead-magnet, sequence, drip) now
   sends **`List-Unsubscribe`** + **`List-Unsubscribe-Post: List-Unsubscribe=One-Click`**
   headers (RFC 8058 / Gmail-Yahoo 2024).
3. **`src/lib/unsubscribe-token.ts`** — adds `buildUnsubscribeUrl(email, siteId, domain)`.
4. **`src/app/api/unsubscribe/route.ts`** — adds a **POST** handler for one-click (was
   GET-only → the advertised one-click would have 405'd).

**Verified:** render test 8/8 (link + 32-char HMAC token + address + header) and
`tsc --noEmit` clean on all 4 files (62 pre-existing spine errors are unrelated).

## Roll = hash-gated copy + a small diverged tail
133 fleet repos carry this lib. Divergence vs the pre-fix canonical (so the copy is safe):

| file | clean-copy (match old canonical) | diverged (manual patch) |
|---|--:|--:|
| `src/lib/unsubscribe-token.ts` | 133 | 0 |
| `src/lib/email-templates.ts` | 124 | 9 |
| `src/lib/email.ts` | 123 | 10 |
| `src/app/api/unsubscribe/route.ts` | 96 | 37 |

`propagate-email-compliance.sh` copies the fixed canonical file into any repo whose file
still matches the **pre-fix** canonical hash (safe), and **flags** diverged files so the
same 3 logical edits can be hand-applied to those variants. It never blind-overwrites a
customized file.

## Owner activation checklist (the roll, done once, together)
1. **Resend account** + verify a per-domain sending subdomain `send.<domain>` (MX + SPF +
   DKIM `resend._domainkey` + DMARC `_dmarc` p=none→ramp). Use a per-domain subdomain — a
   shared pool cross-contaminates fleet reputation.
2. Per Vercel project, set env: `RESEND_API_KEY`, `SENDER_EMAIL` (e.g. `hello@send.<domain>`),
   `UNSUBSCRIBE_SECRET`, **`SENDER_POSTAL_ADDRESS`** (real business mailing address), `CRON_SECRET`.
3. `./propagate-email-compliance.sh` (dry-run) → review the diverged list → `--apply` →
   hand-patch the flagged files.
4. Deploy **canary 1–2 sites**, send a **real test email**, confirm in the received message:
   footer Unsubscribe link works + postal address shows + `List-Unsubscribe` header present +
   one-click POST returns 200. Then **roll the rest one-at-a-time** (Vercel one-at-a-time).
5. Seed one active `email_sequences` row (+ steps) per site to start the drip.

## Why held (not rolled now)
Deploying a no-op (email off) to 133 repos burns 133 deploys and a real send-canary is
impossible without the key — so the fix + key + DNS + first campaign ship **once**, together.
This is the same "deploy once" logic set for the email channel earlier.
