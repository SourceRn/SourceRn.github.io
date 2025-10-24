export type SanitySlug = { current: string };

export type Post = {
  _id: string;
  title: string;
  slug: string;                
  excerpt?: string;
  cover?: unknown;             
  tags?: string[];
  publishedAt?: string;
  content?: unknown;           
};

export type Project = {
  _id: string;
  title: string;
  slug: string;                
  summary?: string;
  cover?: unknown;
  tech?: string[];
  year?: number;
  links?: { demo?: string; repo?: string } | undefined;
  content?: unknown;
  featured?: boolean;
};

export type Profile = {
  _id: string;
  name: string;
  role?: string;
  avatar?: unknown;
  intro?: unknown;
  location?: string;
  skills?: string[];
  links?: { github?: string; linkedin?: string; email?: string; cv?: string };
};
