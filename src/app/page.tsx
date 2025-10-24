import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { featuredProjectsQuery, postsQuery } from "@/lib/queries";
import SanityImage from "@/components/sanityImage";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import type { Project, Post } from "@/types/content";

export default async function HomePage() {
  const [projects, posts]: [Project[], Post[]] = await Promise.all([
    sanityClient.fetch(featuredProjectsQuery),
    sanityClient.fetch(postsQuery + "[0..2]"),
  ]);

  return (
    <main className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold">Hola, soy Rammses</h1>
        <br />
        <p className="mt-2 text-zinc-400">
          Programador Técnico, Ingeniero en Tecnologías de la Información y Comunicaciones.
          Apasionado por la Tecnología y el Desarrollo de Software. Aquí comparto mis proyectos
          y artículos sobre distintas disciplinas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Proyectos destacados</h2>
        <ProjectsCarousel projects={projects} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Últimos posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts?.map((post, i) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block border rounded-xl p-4 hover:shadow"
            >
              {post.cover ? (
                <div className="mb-3 overflow-hidden rounded-lg">
                  <SanityImage
                    value={post.cover}
                    alt={(post.cover as { alt?: string } | undefined)?.alt || post.title}
                    priority={i === 0}
                    maxWidth={1200}
                  />
                </div>
              ) : (
                <div className="aspect-video bg-zinc-100 rounded-lg mb-3" />
              )}
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
