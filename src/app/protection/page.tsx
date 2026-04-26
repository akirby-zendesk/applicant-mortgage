import type { Metadata } from "next";
import Link from "next/link";
import { PersonaMicrositeLayout } from "@/components/PersonaMicrositeLayout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Life Cover & Protection Advice | Applicant Mortgage Brokers",
  description:
    "Protect your family with the right life cover, critical illness, income protection, and family income benefit. Free advice from Applicant Mortgage Brokers.",
};

const protectionTypes = [
  {
    title: "Life Cover",
    desc: "Pays a lump sum to your loved ones if you pass away during the policy term. Essential if you have a mortgage or dependants.",
  },
  {
    title: "Critical Illness",
    desc: "Pays a lump sum if you're diagnosed with a specified critical illness such as cancer, heart attack, or stroke.",
  },
  {
    title: "Family Income Benefit",
    desc: "Pays a regular tax-free income to your family if you pass away. Often more affordable than lump-sum life cover.",
  },
  {
    title: "Income Protection",
    desc: "Replaces a portion of your income if you're unable to work due to illness or injury. Covers until you recover, retire, or the policy ends.",
  },
];

const faqs = [
  {
    question: "Do I need life insurance if I have a mortgage?",
    answer:
      "While not legally required, it's strongly recommended. If something happened to you, life cover ensures your family can keep the home.",
  },
  {
    question: "What's the difference between life cover and critical illness?",
    answer:
      "Life cover pays out on death. Critical illness pays out on diagnosis of a specified serious illness. Many people take both for comprehensive protection.",
  },
  {
    question: "How much does protection cost?",
    answer:
      "It depends on your age, health, smoker status, and the level of cover. We'll search the market to find the most competitive premiums for your needs.",
  },
  {
    question: "Is income protection worth it?",
    answer:
      "If you rely on your income to pay your mortgage and bills, income protection provides a safety net if illness or injury stops you working. It's one of the most underrated forms of cover.",
  },
];

export default function Protection() {
  return (
    <PersonaMicrositeLayout
      heroBadge="Life Cover & Protection"
      heroHeading={
        <>
          Protect what matters{" "}
          <em className="not-italic text-gold">most</em>
        </>
      }
      heroSubtext="Life cover, critical illness, income protection, and family income benefit — tailored to your needs and budget."
      testimonials={[]}
      faqs={faqs}
      ctaHeading="Concerned about your cover?"
      ctaSubtext="Book a free protection review with us."
    >
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Types of Protection
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-10">
            Covering All the Bases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protectionTypes.map((type) => (
              <div
                key={type.title}
                className="bg-off-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-bold text-navy text-lg mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">
          What&apos;s Your Risk?
        </h2>
        <p className="text-slate text-base mb-6 max-w-[500px] mx-auto">
          Find out the probability of illness, injury, or worse before you
          retire.
        </p>
        <Button href="/calculators/risk-reality" variant="primary">
          Try the Risk Reality Calculator
        </Button>
      </section>

      {/* Related Reading */}
      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Related Reading
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Protection Guides
          </h2>
          <div className="space-y-3">
            {[
              { title: "What Is Income Protection and Do You Need It?", href: "/blog/what-is-income-protection" },
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
