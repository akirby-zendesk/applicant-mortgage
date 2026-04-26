import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  personaTag: string;
  imageUrl?: string;
}

const tagLabels: Record<string, string> = {
  ftb: "First-Time Buyers",
  "home-movers": "Home Movers",
  remortgage: "Remortgage",
  btl: "Buy-to-Let",
  protection: "Protection",
  "self-employed": "Self-Employed",
  "sole-traders": "Sole Traders",
  cis: "CIS Workers",
  contractors: "Contractors",
  "ltd-directors": "Ltd Directors",
  employed: "Employed",
};

export function BlogCard({
  title,
  excerpt,
  slug,
  personaTag,
  imageUrl,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,42,74,0.1)] transition-all block"
    >
      <div className="h-[180px] bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <svg
            className="w-10 h-10 opacity-15"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        )}
      </div>
      <div className="p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gold mb-2.5">
          {tagLabels[personaTag] || personaTag}
        </p>
        <h3 className="text-[17px] font-bold text-navy leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate leading-normal">{excerpt}</p>
      </div>
    </Link>
  );
}
