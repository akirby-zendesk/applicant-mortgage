import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "clientName", type: "string", validation: (r) => r.required() }),
    defineField({ name: "quote", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "serviceType",
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
          { title: "House Purchase", value: "house-purchase" },
        ],
      },
    }),
    defineField({ name: "date", type: "date" }),
    defineField({ name: "starRating", type: "number", validation: (r) => r.min(1).max(5) }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "serviceType" },
  },
});
