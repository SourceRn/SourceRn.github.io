import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import type { Post } from "@/types/content";

export const revalidate = 60;

export const metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo, arquitectura y nube",
};

export default async function BlogPage() {
  const posts: Post[] = await sanityClient.fetch(postsQuery);

  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl p-4 hover:shadow"
          >
            {post.cover ? (
              <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                <Image
                  src={urlFor(post.cover).width(1200).height(675).fit("crop").auto("format").url()}
                  alt={(post.cover as { alt?: string } | undefined)?.alt || post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-zinc-100 rounded-lg mb-3" />
            )}
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
            {post.publishedAt && (
              <span className="text-xs text-zinc-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
