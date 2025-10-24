import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import SanityImage from "./sanityImage";
import CodeBlock from "./CodeBlock";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="scroll-mt-24">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-10 scroll-mt-24">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8">{children}</h3>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-zinc-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="marker:text-zinc-400">{children}</li>,
  },
  marks: {
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-zinc-100">{children}</code>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value as any)?.href || "#";
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => (
      <figure className="my-6">
        <SanityImage value={value as any} alt={(value as any)?.alt} />
        {(value as any)?.alt ? (
          <figcaption className="mt-2 text-sm text-zinc-500">
            {(value as any).alt}
          </figcaption>
        ) : null}
      </figure>
    ),
    code: ({ value }) => <CodeBlock value={value as any} />,
    hr: () => <hr className="my-10 border-zinc-200" />,
  },
};

export default function RichText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
