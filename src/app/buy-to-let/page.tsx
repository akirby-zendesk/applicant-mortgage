import type { Metadata } from "next";
import Link from "next/link";
import { PersonaMicrositeLayout } from "@/components/PersonaMicrositeLayout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Buy-to-Let Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Specialist buy-to-let mortgage advice for all landlord types. From first-time landlords to portfolio investors. Fee-free advice in High Wycombe.",
};

const landlordTypes = [
  { title: "First-Time Landlords", desc: "Those looking to finance their first buy-to-let property." },
  { title: "Non Home Owner Landlords", desc: "Applicants who do not own their own property." },
  { title: "Investment Landlords", desc: "Already renting out property to tenants." },
  { title: "Portfolio Landlords", desc: "Defined by the PRA as borrowers with four or more distinct mortgaged buy-to-let properties." },
  { title: "HMOs", desc: "House in Multiple Occupation — rented out by at least 3 people who are not from one household." },
  { title: "'Accidental' Landlords", desc: "Typically those that inherit a property and decide to rent it out." },
  { title: "Consent to Let", desc: "Applying for permission from your residential lender to rent the property out." },
  { title: "Let to Buy", desc: "Raising a deposit for a new home by letting out your existing property." },
];

const faqs = [
  {
    question: "How much deposit do I need for a buy-to-let?",
    answer:
      "Most buy-to-let lenders require a minimum 25% deposit, though some will accept 20%. Higher deposits typically unlock better rates.",
  },
  {
    question: "How is buy-to-let affordability calculated?",
    answer:
      "Lenders primarily look at the expected rental income, which usually needs to cover 125-145% of the mortgage payment. Your personal income may also be considered.",
  },
  {
    question: "What is a portfolio landlord?",
    answer:
      "The PRA defines portfolio landlords as borrowers with four or more distinct mortgaged buy-to-let properties. This triggers additional underwriting requirements.",
  },
  {
    question: "Can I get a buy-to-let mortgage if I don't own my own home?",
    answer:
      "Yes — some lenders offer buy-to-let mortgages to non-homeowners, though the criteria are more restrictive. We know which lenders to approach.",
  },
];

export default function BuyToLet() {
  return (
    <PersonaMicrositeLayout
      heroBadge="Buy-to-Let"
      heroHeading={
        <>
          Specialist advice for{" "}
          <em className="not-italic text-gold">every type of landlord</em>
        </>
      }
      heroSubtext="From first-time landlords to portfolio investors, we navigate the buy-to-let market to find the right deal for your investment."
      videoId="YOUR_BTL_VIDEO_ID"
      videoTitle="Buy-to-Let: Your Borrowing Potential"
      testimonials={[]}
      faqs={faqs}
      ctaHeading="Growing your portfolio?"
      ctaSubtext="Book a free consultation to discuss your buy-to-let options."
    >
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Landlord Types
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-10">
            8 Types of Landlord We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landlordTypes.map((type) => (
              <div
                key={type.title}
                className="bg-off-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-bold text-navy text-base mb-2">
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
          What Could You Borrow?
        </h2>
        <p className="text-slate text-base mb-6 max-w-[500px] mx-auto">
          Estimate your buy-to-let borrowing potential based on rental income.
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
            Buy-to-Let Guides
          </h2>
          <div className="space-y-3">
            {[
              { title: "Buy-to-Let: Your Borrowing Potential", href: "/blog/buy-to-let-borrowing-potential" },
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
