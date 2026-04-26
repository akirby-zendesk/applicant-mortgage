import { Button } from "./Button";
import { RoofWatermark } from "./RoofWatermark";

interface HeroSectionProps {
  badge?: string;
  heading: React.ReactNode;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function HeroSection({
  badge,
  heading,
  subtext,
  ctaText = "Book a Free Consultation",
  ctaHref = "/contact",
  secondaryText,
  secondaryHref,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-24 lg:py-32 relative overflow-hidden">
      <RoofWatermark className="top-[-60px] right-[-100px] w-[600px] h-[400px]" />
      <RoofWatermark className="top-5 right-0 w-[500px] h-[350px] opacity-50" />

      <div className="max-w-[700px] relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-4 py-1.5 rounded-full text-[13px] font-medium text-gold mb-7">
            <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {badge}
          </div>
        )}

        <h1 className="font-display text-4xl lg:text-[56px] font-bold text-white leading-[1.15] mb-5">
          {heading}
        </h1>

        <p className="text-lg text-white/70 leading-relaxed mb-9">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <Button href={ctaHref} variant="primary">
            {ctaText}
          </Button>
          {secondaryText && secondaryHref && (
            <Button href={secondaryHref} variant="ghost">
              {secondaryText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
