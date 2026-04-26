import { defineType, defineField } from "sanity";

export const calculatorSettings = defineType({
  name: "calculatorSettings",
  title: "Calculator Settings",
  type: "document",
  fields: [
    defineField({
      name: "calcType",
      type: "string",
      options: {
        list: [
          { title: "Repayment", value: "repayment" },
          { title: "Affordability", value: "affordability" },
          { title: "Stamp Duty", value: "stamp-duty" },
          { title: "Risk Reality", value: "risk-reality" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "defaultPropertyValue", type: "number" }),
    defineField({ name: "defaultDeposit", type: "number" }),
    defineField({ name: "defaultTerm", type: "number" }),
    defineField({ name: "defaultRate", type: "number" }),
  ],
  preview: {
    select: { title: "calcType" },
  },
});
