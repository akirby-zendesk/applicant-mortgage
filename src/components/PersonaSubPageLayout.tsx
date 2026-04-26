import Link from "next/link";
import { HeroSection } from "./HeroSection";
import { ChecklistGrid } from "./ChecklistGrid";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { FAQAccordion } from "./FAQAccordion";
import { BookingCTA } from "./BookingCTA";
import { Button } from "./Button";
import { RoofWatermark } from "./RoofWatermark";

interface PersonaSubPageLayoutProps {
  heroHeading: React.ReactNode;
  heroSubtext: string;
  weUnderstandTitle: string;
  weUnderstandContent: React.ReactNode;
  howWeHelpContent: React.ReactNode;
  imageSection?: React.ReactNode;
  checklist: Array<{ title: string; description: string }>;
  testimonials: Array<{
    clientName: string;
    quote: string;
    serviceType?: string;
    date?: string;
    starRating?: number;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  personaLabel: string;
  calculatorHref?: string;
  calculatorLabel?: string;
  relatedPosts?: Array<{ title: string; href: string }>;
  relatedPostsHeading?: string;
}

export function PersonaSubPageLayout({
  heroHeading,
  heroSubtext,
  weUnderstandTitle,
  weUnderstandContent,
  howWeHelpContent,
  imageSection,
  checklist,
  testimonials,
  faqs,
  personaLabel,
  calculatorHref = "/calculators/affordability",
  calculatorLabel = "Try the Affordability Calculator",
  relatedPosts,
  relatedPostsHeading = "Related Reading",
}: PersonaSubPageLayoutProps) {
  return (
    <main>
      <HeroSection heading={heroHeading} subtext={heroSubtext} />

      {/* We Understand section */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            We Understand
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            {weUnderstandTitle}
          </h2>
          <div className="space-y-4 text-slate leading-[1.7]">
            {weUnderstandContent}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-off-white px-6 lg:px-12 py-20 relative overflow-hidden">
        <RoofWatermark className="bottom-4 right-[-50px] w-[350px] h-[200px]" />
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            How We Help
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            Specialist Knowledge on Your Side
          </h2>
          <div className="space-y-4 text-slate leading-[1.7]">
            {howWeHelpContent}
          </div>
        </div>
      </section>

      {/* Optional image section */}
      {imageSection}

      {/* Preparation Checklist */}
      {checklist.length > 0 && (
        <section className="bg-white px-6 lg:px-12 py-20">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
              Be Prepared
            </p>
            <h2 className="font-display text-4xl font-bold text-navy">
              What You&apos;ll Need
            </h2>
          </div>
          <ChecklistGrid items={checklist} />
        </section>
      )}

      {/* Calculator link */}
      <section className="bg-off-white px-6 lg:px-12 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">
          How Much Could You Borrow?
        </h2>
        <p className="text-slate text-base mb-6 max-w-[500px] mx-auto">
          Get an estimate based on your income and outgoings.
        </p>
        <Button href={calculatorHref} variant="primary">
          {calculatorLabel}
        </Button>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {/* Related Reading */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-off-white px-6 lg:px-12 py-16">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
              Related Reading
            </p>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">
              {relatedPostsHeading}
            </h2>
            <div className="space-y-3">
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(27,42,74,0.1)] hover:-translate-y-0.5 transition-all group">
                  <svg className="w-5 h-5 fill-gold shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  <span className="text-navy font-medium group-hover:text-gold transition-colors">{post.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-off-white px-6 lg:px-12 py-20">
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
      <BookingCTA
        heading={`Ready to discuss your ${personaLabel} mortgage?`}
        subtext="Book a free, no-obligation consultation with us."
      />
    </main>
  );
}
