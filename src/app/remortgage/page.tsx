import type { Metadata } from "next";
import Link from "next/link";
import { PersonaMicrositeLayout } from "@/components/PersonaMicrositeLayout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Remortgage Advice | Applicant Mortgage Brokers",
  description:
    "Expert remortgage advice in High Wycombe. Don't let your deal expire onto Standard Variable Rate. Fee-free, whole-of-market guidance from Applicant Mortgage Brokers.",
};

const testimonials = [
  {
    clientName: "Sahrish",
    quote:
      "Dan is extremely professional & great at what he does. He went the extra mile for us and made sure we got what we were looking for. Very highly recommended.",
    serviceType: "Remortgage",
    date: "July 2023",
    starRating: 5,
  },
];

const faqs = [
  {
    question: "When should I start looking at remortgaging?",
    answer:
      "Most deals allow you to apply for a new rate 3-6 months before your current deal ends. Get in touch early so we can monitor the market and lock in the best rate for you.",
  },
  {
    question: "Will I have to pay early repayment charges?",
    answer:
      "If you're still within your initial deal period, yes — ERCs typically apply. We'll calculate whether the savings from a new rate outweigh the ERC, or whether it's better to wait.",
  },
  {
    question: "What happens if I do nothing when my deal ends?",
    answer:
      "You'll move onto your lender's Standard Variable Rate, which is almost always significantly higher. This could add hundreds to your monthly payment.",
  },
  {
    question: "Can I remortgage to release equity?",
    answer:
      "Yes — many homeowners remortgage to release equity for home improvements, debt consolidation, or other purposes. We'll advise on the best approach for your situation.",
  },
];

export default function Remortgage() {
  return (
    <PersonaMicrositeLayout
      heroBadge="Remortgage"
      heroHeading={
        <>
          Every month on Standard Variable Rate is money{" "}
          <em className="not-italic text-gold">you didn&apos;t need to spend</em>
        </>
      }
      heroSubtext="Don't let your deal expire onto an expensive Standard Variable Rate. We'll find you the best rate and handle the switch."
      videoId="YOUR_REMORTGAGE_VIDEO_ID"
      videoTitle="Fixed Rate or Variable?"
      testimonials={testimonials}
      faqs={faqs}
      ctaHeading="Time to switch?"
      ctaSubtext="Book a free remortgage review with us. It could save you thousands."
    >
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            When to Remortgage
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            Timing Is Everything
          </h2>
          <div className="space-y-6 text-slate leading-[1.7]">
            <p>
              Fixed, Standard Variable, Discounted, Tracker — it&apos;s important
              to understand how the different types of mortgage rates work so you
              can time your remortgage perfectly.
            </p>
            <p>
              Too early and you&apos;ll face early repayment charges. Too late and
              you could spend months on an expensive Standard Variable Rate. We monitor your deal
              and reach out when it&apos;s time to act.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">
          Check Your New Payment
        </h2>
        <p className="text-slate text-base mb-6 max-w-[500px] mx-auto">
          See how much you could save by remortgaging at today&apos;s rates.
        </p>
        <Button href="/calculators/repayment" variant="primary">
          Try the Repayment Calculator
        </Button>
      </section>

      {/* Related Reading */}
      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Related Reading
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Guides for Remortgagers
          </h2>
          <div className="space-y-3">
            {[
              { title: "Fixed Rate or Variable?", href: "/blog/fixed-rate-or-variable" },
              { title: "Equity Release Explained", href: "/blog/equity-release-explained" },
              { title: "Why Whole of Market Matters", href: "/blog/why-whole-of-market-matters" },
            ].map((post) => (
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
    </PersonaMicrositeLayout>
  );
}
