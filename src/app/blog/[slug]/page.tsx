import { sanityClient } from "@/lib/sanity.client";
import { postBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] =
    await sanityClient.fetch(`*[_type=="post"]{ "slug": slug }`);
  return slugs
    .filter(s => s.slug?.current)
    .map(s => ({ slug: s.slug.current }));
}

export default async function PostPage({
   params, 
  }: { 
    params: Promise<{ slug: string }>; 
  }) {
  const { slug } = await params;
  const post = await sanityClient.fetch(postBySlugQuery, { slug });
  if (!post) return notFound();


  return (
    <>
      <h1 className="text-3xl font-bold mb-1">{post.title}</h1>
      <br />
      <article
        className="
          prose prose-zinc md:prose-lg lg:prose-xl
          max-w-prose mx-auto
          prose-headings:font-semibold
          prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
          prose-img:rounded-xl
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:bg-zinc-100
          dark:prose-invert dark:prose-code:bg-zinc-800
          prose-pre:bg-zinc-950 prose-pre:text-zinc-100 prose-pre:rounded-xl
        "
      >
        <RichText value={post.content} />
      </article>
    </>
    
  );
}
