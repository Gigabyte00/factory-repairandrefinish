import Link from 'next/link';
import Image from 'next/image';

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featured_image_url?: string | null;
  category_name?: string | null;
}

interface Props {
  posts: RelatedPost[];
  heading?: string;
}

export function RelatedInline({ posts, heading = 'Keep Reading' }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="my-8 rounded-xl border bg-muted/30 p-5 not-prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        {heading}
      </p>
      <ul className="space-y-3">
        {posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-3 group"
            >
              {post.featured_image_url && (
                <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={post.featured_image_url}
                    alt=""
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="80px"
                  />
                </div>
              )}
              <span className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
