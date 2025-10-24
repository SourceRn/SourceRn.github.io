import { sanityClient } from "@/lib/sanity.client";
import { projectBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] =
    await sanityClient.fetch(`*[_type=="project"]{ "slug": slug }`);
  return slugs
    .filter(s => s.slug?.current)
    .map(s => ({ slug: s.slug.current }));
}

export default async function ProjectPage({ 
  params 
}:{ 
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params;
  const p = await sanityClient.fetch(projectBySlugQuery, { slug });
  
  if(!p) return notFound();
  
  return (
    <>
      <article className="
          prose prose-zinc md:prose-lg lg:prose-xl
          max-w-prose mx-auto
          prose-headings:font-semibold
          prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
          prose-img:rounded-xl
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:bg-zinc-100
          dark:prose-invert dark:prose-code:bg-zinc-800
          prose-pre:bg-zinc-950 prose-pre:text-zinc-100 prose-pre:rounded-xl
        ">
        <PortableText value={p.content}/>
      </article>
    </>
  );
}
