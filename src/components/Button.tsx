import Link from "next/link";

type Variant = "primary" | "navy" | "outline-navy" | "ghost" | "gold-outline";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-deep font-semibold shadow-[0_4px_14px_rgba(197,165,90,0.3)] hover:bg-[#D4B76A] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(197,165,90,0.4)]",
  navy:
    "bg-navy text-white font-semibold shadow-[inset_3px_0_0_var(--color-gold)] hover:bg-navy-deep hover:-translate-y-0.5",
  "outline-navy":
    "bg-transparent text-navy border-[1.5px] border-navy font-semibold hover:bg-navy hover:text-white",
  ghost:
    "bg-transparent text-white border-[1.5px] border-white/30 font-semibold hover:border-white hover:bg-white/8",
  "gold-outline":
    "bg-transparent text-gold border-[1.5px] border-gold font-semibold hover:bg-gold hover:text-navy-deep",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] cursor-pointer transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
