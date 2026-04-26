import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./schemas/blogPost";
import { testimonial } from "./schemas/testimonial";
import { faq } from "./schemas/faq";
import { servicePage } from "./schemas/servicePage";
import { personaSubPage } from "./schemas/personaSubPage";
import { calculatorSettings } from "./schemas/calculatorSettings";
import { siteSettings } from "./schemas/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogPost,
    testimonial,
    faq,
    servicePage,
    personaSubPage,
    calculatorSettings,
    siteSettings,
  ],
};
