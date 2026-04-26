import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { HeroSection } from "@/components/HeroSection";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Mortgage Blog & Guides | Applicant Mortgage Brokers",
  description:
    "Practical mortgage advice, market updates, and expert insights from Applicant Mortgage Brokers. Guides for first-time buyers, remortgagers, buy-to-let, and more.",
};

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        title: data.title as string,
        slug: data.slug as string,
        excerpt: data.excerpt as string,
        personaTag: data.personaTag as string,
        publishDate: data.publishDate instanceof Date
          ? data.publishDate.toISOString().split("T")[0]
          : String(data.publishDate),
        heroImage: (data.heroImage as string) || undefined,
      };
    })
    .sort((a, b) => (a.publishDate > b.publishDate ? -1 : 1));
}

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <main>
      <HeroSection
        heading={
          <>
            Guides &amp; <em className="not-italic text-gold">Insights</em>
          </>
        }
        subtext="Practical mortgage advice from Applicant Mortgage Brokers — no jargon, just clear guidance."
      />

      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  personaTag={post.personaTag}
                  imageUrl={post.heroImage}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate text-lg">
              Blog posts coming soon — check back for mortgage guides and market updates.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
