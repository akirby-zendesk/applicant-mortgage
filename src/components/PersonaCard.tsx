import Link from "next/link";

interface PersonaCardProps {
  icon: React.ReactNode;
  title: string;
  hook: string;
  href: string;
}

export function PersonaCard({ icon, title, hook, href }: PersonaCardProps) {
  return (
    <Link
      href={href}
      className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,42,74,0.1)] transition-all block group"
    >
      <div className="w-10 h-10 rounded-lg bg-navy/6 flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
        {icon}
      </div>
      <h3 className="text-[15px] font-bold text-navy mb-1">{title}</h3>
      <p className="text-[13px] text-slate leading-snug">{hook}</p>
    </Link>
  );
}
