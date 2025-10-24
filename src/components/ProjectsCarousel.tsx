'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import type { Project } from "@/types/content";
import type { SanityImageSource } from "@sanity/asset-utils";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const n = projects?.length ?? 0;
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const mod = (a: number, b: number) => ((a % b) + b) % b;
  const goPrev = useCallback(() => setIndex((i) => mod(i - 1, n)), [n]);
  const goNext = useCallback(() => setIndex((i) => mod(i + 1, n)), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const onStart = (x: number) => (startX.current = x);
  const onEnd = (x: number) => {
    if (startX.current == null) return;
    const dx = x - startX.current;
    startX.current = null;
    if (dx > 40) goPrev();
    if (dx < -40) goNext();
  };

  if (!n) return null;

  const prev = mod(index - 1, n);
  const next = mod(index + 1, n);
  const indexes = n === 1 ? [index] : n === 2 ? [index, next] : [prev, index, next];

  return (
    <div className="relative">
      <div
        className="flex items-stretch justify-center gap-4 select-none"
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        {indexes.map((idx, pos) => {
          const p = projects[idx];
          const isCenter = pos === (n >= 3 ? 1 : 0);

          return (
            <Link
              key={`${p._id}-${pos}`}
              href={`/projects/${p.slug}`}
              className={[
                "group block rounded-2xl border transition-all duration-300 hover:shadow bg-white overflow-hidden",
                isCenter ? "w-[min(640px,90vw)]" : "w-[min(320px,42vw)] opacity-85",
              ].join(" ")}
            >
              <div className={`relative ${isCenter ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                {p.cover ? (
                  <Image
                    src={urlFor(p.cover as SanityImageSource)
                      .width(isCenter ? 1200 : 800)
                      .height(isCenter ? 675 : 500)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={p.cover.alt || p.title}
                    fill
                    sizes={isCenter ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 50vw, 320px"}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-100" />
                )}
              </div>

              <div className="p-4">
                <h3 className={`font-semibold ${isCenter ? "text-lg" : "text-base"} text-zinc-800`}>{p.title}</h3>
                {p.summary && <p className="text-sm text-zinc-600 line-clamp-2">{p.summary}</p>}
              </div>
            </Link>
          );
        })}
      </div>

      {n > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "bg-yellow-300 w-6" : "bg-zinc-300 w-2 hover:bg-zinc-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
