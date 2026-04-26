import { defineType, defineField } from "sanity";

const personaTags = [
  { title: "First-Time Buyers", value: "ftb" },
  { title: "Home Movers", value: "home-movers" },
  { title: "Remortgage", value: "remortgage" },
  { title: "Buy-to-Let", value: "btl" },
  { title: "Protection", value: "protection" },
  { title: "Self-Employed", value: "self-employed" },
  { title: "Sole Traders", value: "sole-traders" },
  { title: "CIS Workers", value: "cis" },
  { title: "Contractors", value: "contractors" },
  { title: "Ltd Company Directors", value: "ltd-directors" },
  { title: "Employed", value: "employed" },
];

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "personaTag",
      type: "string",
      options: { list: personaTags },
      validation: (r) => r.required(),
    }),
    defineField({ name: "featuredImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishDate", type: "date", validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", rows: 2 }),
    defineField({ name: "videoId", type: "string", description: "YouTube video ID" }),
  ],
  orderings: [{ title: "Publish Date", name: "publishDate", by: [{ field: "publishDate", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "personaTag", date: "publishDate" },
  },
});
