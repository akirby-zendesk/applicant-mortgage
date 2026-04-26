import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://applicantmortgage.co.uk";

  const staticPages = [
    "",
    "/first-time-buyers",
    "/home-movers",
    "/remortgage",
    "/self-employed",
    "/sole-traders",
    "/contractors",
    "/cis-workers",
    "/limited-company-directors",
    "/employed",
    "/buy-to-let",
    "/protection",
    "/calculators",
    "/calculators/repayment",
    "/calculators/affordability",
    "/calculators/stamp-duty",
    "/calculators/risk-reality",
    "/about",
    "/blog",
    "/contact",
    "/privacy-cookies-policy",
    "/complaints-procedure",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "/blog" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.startsWith("/calculators/") ? 0.7 : 0.8,
  }));
}
