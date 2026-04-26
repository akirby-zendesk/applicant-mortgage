export const blogPostsQuery = `*[_type == "blogPost"] | order(publishDate desc) {
  title, "slug": slug.current, excerpt, personaTag, publishDate, videoId,
  "imageUrl": featuredImage.asset->url
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  title, "slug": slug.current, body, excerpt, personaTag, publishDate, videoId,
  "imageUrl": featuredImage.asset->url
}`;

export const testimonialsByTagQuery = `*[_type == "testimonial" && serviceType == $tag] | order(date desc) {
  clientName, quote, serviceType, date, starRating
}`;

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(date desc) {
  clientName, quote, serviceType, date, starRating
}`;

export const faqsByTagQuery = `*[_type == "faq" && personaTag == $tag] {
  question, answer, personaTag
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  phone, email, address, hours, socialLinks, ctaText, ctaUrl
}`;

export const latestBlogPostsQuery = `*[_type == "blogPost"] | order(publishDate desc) [0...3] {
  title, "slug": slug.current, excerpt, personaTag, publishDate,
  "imageUrl": featuredImage.asset->url
}`;

export const blogPostsByTagQuery = `*[_type == "blogPost" && personaTag == $tag] | order(publishDate desc) {
  title, "slug": slug.current, excerpt, personaTag, publishDate,
  "imageUrl": featuredImage.asset->url
}`;
