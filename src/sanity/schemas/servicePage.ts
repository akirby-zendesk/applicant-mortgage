import { defineType, defineField } from "sanity";

export const servicePage = defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({ name: "pageSlug", type: "slug", validation: (r) => r.required() }),
    defineField({ name: "heroHeading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroSubtext", type: "text", rows: 2 }),
    defineField({ name: "bodyContent", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "videoUrl", type: "url" }),
    defineField({ name: "ctaText", type: "string" }),
  ],
  preview: {
    select: { title: "heroHeading", subtitle: "pageSlug.current" },
  },
});
