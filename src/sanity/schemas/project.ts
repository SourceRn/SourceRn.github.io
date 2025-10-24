import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", type: "text" }),
    defineField({
      name: "cover",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({ name: "tech", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "year", type: "number" }),
    defineField({
      name: "links",
      type: "object",
      fields: [
        { name: "demo", type: "url" },
        { name: "repo", type: "url" },
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
  ],
});
