import { defineType, defineField } from "sanity";

export default defineType({
  name: "profile",
  title: "Perfil (About)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string", validation: r => r.required() }),
    defineField({ name: "role", title: "Rol", type: "string" }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "intro",
      title: "Introducción",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }]}],
      description: "Texto libre (PortableText)."
    }),
    defineField({ name: "location", title: "Ubicación", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        { name: "github", type: "url" },
        { name: "linkedin", type: "url" },
        { name: "email", type: "string" },
        { name: "cv", title: "CV (URL)", type: "url" },
      ],
    }),
  ],
});
