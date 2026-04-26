import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,42,74,0.12)] transition-all group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-12 h-12 rounded-[10px] bg-navy/6 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2.5">{title}</h3>
      <p className="text-sm text-slate leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-gold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}
