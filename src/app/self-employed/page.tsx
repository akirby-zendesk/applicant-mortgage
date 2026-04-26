import type { Metadata } from "next";
import Image from "next/image";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Self-Employed Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Specialist mortgage advice for self-employed borrowers. 2-3 years accounts, SA302s, variable income — we know which lenders get it.",
};

export default function SelfEmployed() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Your income isn&apos;t straightforward —{" "}
          <em className="not-italic text-gold">your advice shouldn&apos;t be either</em>
        </>
      }
      heroSubtext="Self-employed? We work with specialist lenders who understand variable income and look beyond the standard criteria."
      weUnderstandTitle="The Self-Employed Challenge"
      weUnderstandContent={
        <>
          <p>
            Most high street lenders want simple payslips and a P60. When you&apos;re
            self-employed, your income picture is more complex — fluctuating earnings,
            multiple income streams, tax-efficient structures that reduce your declared
            income on paper.
          </p>
          <p>
            Lenders typically require 2-3 years of accounts or SA302 tax calculations.
            But not all lenders assess self-employed income the same way — some average
            your last two years, others take the latest year, and a few will consider
            projected income with supporting evidence.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We know which lenders are most favourable for self-employed applicants
            and how each one calculates affordability. We'll match your income
            profile to the lender that gives you the best borrowing power.
          </p>
          <p>
            If your income has grown recently, we'll target lenders who weight the
            latest year more heavily. If you have a complex structure with multiple
            income sources, we'll present your case in the way each lender prefers.
          </p>
        </>
      }
      imageSection={
        <section className="bg-white px-6 lg:px-12 py-16">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(27,42,74,0.12)]">
              <Image
                src="/images/farmer/farmer2.jpeg"
                alt="Dan visiting a self-employed client at their farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                We Come to You
              </h3>
              <p className="text-slate leading-[1.7]">
                Whether you run a farm, a workshop, or a business from home, we
                understand that your schedule doesn&apos;t always fit office
                hours. We&apos;ll meet you where it suits you best and get to
                know the real picture behind your accounts.
              </p>
            </div>
          </div>
        </section>
      }
      checklist={[
        { title: "SA302 tax calculations", description: "HMRC tax calculations for the last 2-3 years. Available from your online HMRC account." },
        { title: "Tax year overviews", description: "Confirms the figures on your SA302. Download from your HMRC account alongside your SA302s." },
        { title: "Accountant's reference", description: "Some lenders accept a reference from a qualified accountant confirming your income." },
        { title: "Business bank statements", description: "3-6 months of business account statements to evidence trading activity." },
        { title: "Proof of identity & address", description: "Passport or driving licence, plus a utility bill or council tax bill from the last 3 months." },
        { title: "Deposit evidence", description: "Bank statements showing your deposit savings. Lenders need to see where the money came from." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "How many years of accounts do I need?", answer: "Most lenders require 2-3 years of trading history. A few specialist lenders will consider 1 year with strong evidence. We'll find the right fit." },
        { question: "Does my accountant need to be qualified?", answer: "For most lenders, yes — your accounts need to be prepared by a chartered or certified accountant. Speak to us if you're unsure." },
        { question: "Will tax-efficient accounting reduce what I can borrow?", answer: "It can — lenders use your declared income, not your lifestyle. We target lenders who assess self-employed income most favourably for your structure." },
        { question: "Can I get a mortgage in my first year of trading?", answer: "It's harder but not impossible. A few specialist lenders will consider applicants with less than 2 years if you have strong contracts or a track record in the industry." },
      ]}
      personaLabel="self-employed"
      relatedPosts={[
        { title: "Self-Employed Income: What Lenders Look For", href: "/blog/self-employed-income-what-lenders-look-for" },
        { title: "Why Whole of Market Matters", href: "/blog/why-whole-of-market-matters" },
      ]}
      relatedPostsHeading="Guides for Self-Employed Borrowers"
    />
  );
}
