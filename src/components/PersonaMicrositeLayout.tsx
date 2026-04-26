import { HeroSection } from "./HeroSection";
import { VideoEmbed } from "./VideoEmbed";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { FAQAccordion } from "./FAQAccordion";
import { BookingCTA } from "./BookingCTA";
import { RoofWatermark } from "./RoofWatermark";

interface PersonaMicrositeLayoutProps {
  heroHeading: React.ReactNode;
  heroSubtext: string;
  heroBadge?: string;
  children: React.ReactNode;
  videoId?: string;
  videoTitle?: string;
  testimonials: Array<{
    clientName: string;
    quote: string;
    serviceType?: string;
    date?: string;
    starRating?: number;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaHeading?: string;
  ctaSubtext?: string;
}

export function PersonaMicrositeLayout({
  heroHeading,
  heroSubtext,
  heroBadge,
  children,
  videoId,
  videoTitle,
  testimonials,
  faqs,
  ctaHeading,
  ctaSubtext,
}: PersonaMicrositeLayoutProps) {
  return (
    <main>
      <HeroSection
        badge={heroBadge}
        heading={heroHeading}
        subtext={heroSubtext}
      />

      {/* Page-specific content sections */}
      {children}

      {/* Video embed — hide when no real video ID is set */}
      {videoId && !videoId.startsWith("YOUR_") && (
        <section className="bg-off-white px-6 lg:px-12 py-20">
          <VideoEmbed videoId={videoId} title={videoTitle} />
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-off-white px-6 lg:px-12 py-20 relative overflow-hidden">
          <RoofWatermark className="bottom-0 right-[-50px] w-[350px] h-[200px]" />
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-4xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </section>
      )}

      {/* Booking CTA */}
      <BookingCTA heading={ctaHeading} subtext={ctaSubtext} />
    </main>
  );
}
