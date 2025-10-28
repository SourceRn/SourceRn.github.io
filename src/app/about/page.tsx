import { sanityClient } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/queries";
import SanityImage from "@/components/sanityImage";
import RichText from "@/components/RichText";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata : Metadata = {
  title: "Sobre mí",
  description: "Acerca de mi trabajo y experiencia",
  alternates: {
    canonical: "https://rammsesitic.dev/blog/",
  },
  openGraph: {
    title: "Sobre Mí — Rammses ITIC",
    url: "https://rammsesitic.dev/blog/",
  },
};

export default async function AboutPage() {
  const profile = await sanityClient.fetch(profileQuery);

  if (!profile) {
    return (
      <main className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Sobre mí</h1>
        <p className="text-zinc-600">Aún no has creado tu documento “Perfil” en el Studio.</p>
      </main>
    );
  }

  const { name, role, location, avatar, intro, skills, links } = profile;

  return (
    <main className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-start gap-6 mb-10">
        <div className="w-28 h-28 rounded-2xl overflow-hidden bg-zinc-100">
          {avatar ? (
            <SanityImage value={avatar} alt={avatar?.alt || name} />
          ) : null}
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-zinc-600">{role}</p>
          {location ? <p className="text-sm text-zinc-500 mt-1">{location}</p> : null}

          {/* Links */}
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {links?.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-full hover:bg-zinc-50">
                GitHub
              </a>
            )}
            {links?.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-full hover:bg-zinc-50">
                LinkedIn
              </a>
            )}
            {links?.email && (
              <a href={`mailto:${links.email}`} className="px-3 py-1 border rounded-full hover:bg-zinc-50">
                Email
              </a>
            )}
            {links?.cv && (
              <a href={links.cv} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-full hover:bg-zinc-50">
                Descargar CV
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Intro (Portable Text) */}
      <section className="prose prose-zinc max-w-none mb-10
                          prose-headings:font-semibold
                          prose-a:no-underline hover:prose-a:underline
                          prose-img:rounded-xl
                          dark:prose-invert">
        <RichText value={intro} />
      </section>

      {/* Skills */}
      {Array.isArray(skills) && skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Tecnologías</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s: string) => (
              <li key={s} className="text-sm px-3 py-1 rounded-full border bg-white">
                {s}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
