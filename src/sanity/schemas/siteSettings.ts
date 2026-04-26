import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({
      name: "hours",
      type: "object",
      fields: [
        defineField({ name: "weekdays", type: "string" }),
        defineField({ name: "saturday", type: "string" }),
        defineField({ name: "evenings", type: "string" }),
        defineField({ name: "sunday", type: "string" }),
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
    defineField({ name: "ctaText", type: "string" }),
    defineField({ name: "ctaUrl", type: "string" }),
  ],
});
