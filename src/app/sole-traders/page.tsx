import type { Metadata } from "next";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Sole Trader Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Mortgage advice for sole traders. Net profit vs gross income, expense write-offs — we find lenders who see your true earning capacity.",
};

export default function SoleTraders() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Tax-efficient doesn&apos;t have to mean{" "}
          <em className="not-italic text-gold">mortgage-limited</em>
        </>
      }
      heroSubtext="Your expense write-offs reduce your tax bill — but they can also reduce your borrowing power. We know the lenders who look beyond the numbers."
      weUnderstandTitle="The Sole Trader Challenge"
      weUnderstandContent={
        <>
          <p>
            As a sole trader, your tax return shows net profit after expenses. That&apos;s
            great for your tax bill, but many lenders use that net figure to calculate
            what you can borrow — ignoring the fact that your gross income tells a very
            different story.
          </p>
          <p>
            The gap between what you earn and what you declare can be significant, and it
            directly impacts your mortgage options if you&apos;re dealing with the wrong lender.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We target lenders who assess sole trader income most favourably — some will
            add back certain expenses, others will look at gross income with adjustments.
            The difference in borrowing power can be tens of thousands of pounds.
          </p>
        </>
      }
      checklist={[
        { title: "SA302 tax calculations", description: "Last 2-3 years from your HMRC online account." },
        { title: "Tax year overviews", description: "Accompanying documents confirming your SA302 figures." },
        { title: "Business accounts", description: "Prepared by a qualified accountant showing revenue, expenses, and net profit." },
        { title: "Bank statements", description: "3-6 months of personal and business bank statements." },
        { title: "Proof of ID & address", description: "Passport/driving licence plus recent utility bill." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "Do lenders use my net or gross income?", answer: "Most use net profit from your SA302. However, some specialist lenders will add back certain expenses or consider your gross income — we know which ones." },
        { question: "Will claiming lots of expenses hurt my mortgage application?", answer: "It can reduce what standard lenders will offer. We find lenders who take a more favourable view of sole trader income structures." },
      ]}
      personaLabel="sole trader"
    />
  );
}
