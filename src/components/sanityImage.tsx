"use client";

import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default function SanityImage({
  value,
  alt,
  priority = false,
  maxWidth = 1600,
}: {
  value: SanityImageSource;
  alt?: string;
  priority?: boolean;
  maxWidth?: number;
}) {
  const { width, height } = getImageDimensions(value as any);

  const src = urlFor(value)
    .width(Math.min((width as number) || maxWidth, maxWidth))
    .fit("max")
    .auto("format")
    .url();

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={(width as number) || maxWidth}
      height={(height as number) || Math.round((maxWidth * 9) / 16)}
      sizes="(max-width: 768px) 100vw, 768px"
      priority={priority}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
