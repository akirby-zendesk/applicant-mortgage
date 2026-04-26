import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "personaTag",
      type: "string",
      options: {
        list: [
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
        ],
      },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "personaTag" },
  },
});
