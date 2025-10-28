import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import type { Project } from "@/types/content";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata : Metadata = {
  title: "Proyectos",
  description: "Proyectos de desarrollo, arquitectura y nube",
  alternates: {
    canonical: "https://rammsesitic.dev/blog/",
  },
  openGraph: {
    title: "Posts — Rammses ITIC",
    url: "https://rammsesitic.dev/blog/",
  },
};

export default async function ProjectsPage() {
  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p._id}
            href={`/projects/${p.slug}`}
            className="block border rounded-xl p-4 hover:shadow"
          >
            {p.cover ? (
              <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                <Image
                  src={urlFor(p.cover).width(1200).height(675).fit("crop").auto("format").url()}
                  alt={(p.cover as { alt?: string } | undefined)?.alt || p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-zinc-100 rounded-lg mb-3" />
            )}
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-zinc-600 line-clamp-2">{p.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
