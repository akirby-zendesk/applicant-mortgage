import { defineType, defineField } from "sanity";

export const personaSubPage = defineType({
  name: "personaSubPage",
  title: "Persona Sub-Page",
  type: "document",
  fields: [
    defineField({ name: "pageSlug", type: "slug", validation: (r) => r.required() }),
    defineField({ name: "heroHeading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroSubtext", type: "text", rows: 2 }),
    defineField({ name: "painPointContent", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "howDanHelpsContent", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "checklist",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: "personaTag",
      type: "string",
      options: {
        list: [
          { title: "Home Movers", value: "home-movers" },
          { title: "Self-Employed", value: "self-employed" },
          { title: "Sole Traders", value: "sole-traders" },
          { title: "Contractors", value: "contractors" },
          { title: "CIS Workers", value: "cis" },
          { title: "Ltd Company Directors", value: "ltd-directors" },
          { title: "Employed", value: "employed" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "stockImage", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "heroHeading", subtitle: "personaTag" },
  },
});
