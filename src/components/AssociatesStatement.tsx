import goMapJson from '@/generated/go-map.json';

/**
 * Amazon Associates Program statement (Operating Agreement, section 5). Rendered on every page through the root layout,
 * but ONLY when this build's /go snapshot carries an Amazon tracking tag: a site without Associates links never makes the claim.
 */
export function AssociatesStatement() {
  const tag = (goMapJson as { meta?: { amazon_tag?: string | null } }).meta?.amazon_tag;
  if (!tag) return null;
  return (
    <p className="mx-auto max-w-3xl px-4 pb-6 pt-3 text-center text-xs leading-relaxed opacity-70">
      As an Amazon Associate I earn from qualifying purchases.
    </p>
  );
}
