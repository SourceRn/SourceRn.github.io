import type { SanityImageSource } from "@sanity/asset-utils";

export type ImageWithAlt = SanityImageSource & { alt?: string };

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  cover?: ImageWithAlt;          
  tags?: string[];
  publishedAt?: string;
  content?: unknown;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  cover?: ImageWithAlt;             
  tech?: string[];
  year?: number;
  links?: { demo?: string; repo?: string } | undefined;
  content?: unknown;
  featured?: boolean;
};
