import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { BookingCTA } from "@/components/BookingCTA";
import { VideoEmbed } from "@/components/VideoEmbed";
import Image from "next/image";
import React from "react";

function getBlogPost(slug: string) {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return null;
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) return { data, content };
  }
  return null;
}

const personaLabels: Record<string, string> = {
  ftb: "First-Time Buyers",
  "home-movers": "Home Movers",
  remortgage: "Remortgage",
  btl: "Buy-to-Let",
  protection: "Protection",
  "self-employed": "Self-Employed",
  "sole-traders": "Sole Traders",
  cis: "CIS Workers",
  contractors: "Contractors",
  "ltd-directors": "Ltd Company Directors",
  employed: "Employed",
};

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      parts.push(
        <strong key={key++} className="text-navy font-semibold">
          {match[1]}
        </strong>
      );
    } else if (match[2] !== undefined) {
      parts.push(
        <a
          key={key++}
          href={match[3]}
          className="text-gold hover:underline"
        >
          {match[2]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderBlock(block: string, i: number): React.ReactNode {
  if (block.startsWith("## ")) {
    return (
      <h2
        key={i}
        className="font-display text-2xl font-bold text-navy mt-10 mb-4"
      >
        {renderInline(block.replace("## ", ""))}
      </h2>
    );
  }
  if (block.startsWith("### ")) {
    return (
      <h3
        key={i}
        className="text-lg font-bold text-navy mt-8 mb-3"
      >
        {renderInline(block.replace("### ", ""))}
      </h3>
    );
  }

  const lines = block.split("\n");
  const isList = lines.every((l) => l.startsWith("- "));
  if (isList) {
    return (
      <ul key={i} className="list-disc pl-6 mb-4 space-y-1.5">
        {lines.map((line, j) => (
          <li key={j}>{renderInline(line.replace(/^- /, ""))}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={i} className="mb-4">
      {renderInline(block)}
    </p>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.data.title} | Applicant Mortgage Brokers`,
    description: post.data.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const blocks = post.content
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => p.trim());

  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center relative overflow-hidden">
        {post.data.heroImage && (
          <>
            <Image
              src={post.data.heroImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy-deep/75" />
          </>
        )}
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 relative">
          {personaLabels[post.data.personaTag] ?? post.data.personaTag}
        </p>
        <h1 className="font-display text-3xl lg:text-5xl font-bold text-white max-w-[1000px] mx-auto mb-4 relative">
          {post.data.title}
        </h1>
        <p className="text-white/60 text-sm relative">
          {post.data.publishDate instanceof Date
            ? post.data.publishDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
            : String(post.data.publishDate)}
        </p>
      </section>

      <article className="bg-white px-6 lg:px-12 py-16">
        <div className="max-w-[700px] mx-auto text-slate leading-[1.8]">
          {blocks.map((block, i) => renderBlock(block, i))}
        </div>
      </article>

      {post.data.videoId && (
        <section className="bg-off-white px-6 lg:px-12 py-16">
          <VideoEmbed videoId={post.data.videoId} title={post.data.title} />
        </section>
      )}

      <BookingCTA
        heading="Want to discuss this further?"
        subtext="Book a free consultation with us."
      />
    </main>
  );
}
