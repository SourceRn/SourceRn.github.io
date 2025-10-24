"use client";

import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/lib/sanity.image";

export default function SanityImage({
  value,
  alt,
  priority = false,
  maxWidth = 1600,
}: {
  value: any; // el objeto de imagen tal cual llega desde Sanity (con asset)
  alt?: string;
  priority?: boolean;
  maxWidth?: number;
}) {
  const { width, height } = getImageDimensions(value);
  // Genera una URL optimizada (auto=webp/avif donde aplique)
  const src = urlFor(value)
    .width(Math.min(width || maxWidth, maxWidth))
    .fit("max")
    .auto("format")
    .url();

  return (
    <Image
      src={src}
      alt={alt || value?.alt || ""}
      width={width || maxWidth}
      height={height || Math.round((maxWidth * 9) / 16)}
      sizes="(max-width: 768px) 100vw, 768px"
      priority={priority}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
