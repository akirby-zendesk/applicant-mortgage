import { Button } from "./Button";
import { RoofWatermark } from "./RoofWatermark";

interface BookingCTAProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function BookingCTA({
  heading = "Ready to Talk Mortgages?",
  subtext = "Book a free, no-obligation consultation with us. Available evenings and Saturdays.",
  ctaText = "Book Your Free Consultation",
  ctaHref = "/contact",
}: BookingCTAProps) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-deep px-6 lg:px-12 py-16 text-center relative overflow-hidden">
      <RoofWatermark className="left-1/2 top-[-40px] -translate-x-1/2 w-[600px] h-[300px]" />
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3 relative">
        {heading}
      </h2>
      <p className="text-white/60 text-[17px] mb-8 relative">{subtext}</p>
      <div className="relative">
        <Button href={ctaHref} variant="primary">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
