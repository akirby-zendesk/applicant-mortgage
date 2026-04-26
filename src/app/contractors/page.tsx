import type { Metadata } from "next";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Contractor Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Mortgage advice for contractors. Day rate annualisation, contract length, IR35 — we find lenders who assess your true earning potential.",
};

export default function Contractors() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Your day rate tells us more than{" "}
          <em className="not-italic text-gold">a payslip ever could</em>
        </>
      }
      heroSubtext="Some lenders annualise your day rate — vastly increasing what you can borrow. We know which ones."
      weUnderstandTitle="The Contractor Challenge"
      weUnderstandContent={
        <>
          <p>
            Standard lenders look at payslips. But as a contractor, your day rate
            multiplied across the year paints a very different picture from the salary
            your limited company pays you.
          </p>
          <p>
            Contract length, IR35 status, and whether you operate inside or outside IR35
            all affect which lenders will accept your application and how they calculate
            your income.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We work with lenders who annualise day rates — if you earn £400/day, they&apos;ll
            treat that as £104,000 annual income rather than looking at your PAYE salary of
            £12,570. The difference in borrowing power is enormous.
          </p>
          <p>
            We also understand IR35 and how different lenders treat inside vs outside IR35
            contractors, ensuring your application goes to the right place first time.
          </p>
        </>
      }
      checklist={[
        { title: "Current contract", description: "Your active contract showing day rate, client, and contract length." },
        { title: "CV / work history", description: "Demonstrates continuous contracting history in your field." },
        { title: "Day rate evidence", description: "Contracts or invoices confirming your current and recent day rates." },
        { title: "SA302 / company accounts", description: "If operating via a limited company, 2 years of company accounts." },
        { title: "IR35 determination", description: "Your IR35 status for the current contract if applicable." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "Do I need a minimum contract length?", answer: "Some lenders require 6 or 12 months remaining on your contract. Others are more flexible if you have a strong contracting track record. We match you to the right lender." },
        { question: "How does IR35 affect my mortgage?", answer: "Inside IR35 contractors are treated more like employees by some lenders. Outside IR35 contractors can often borrow more via day rate annualisation. We navigate both scenarios." },
        { question: "Can I get a mortgage between contracts?", answer: "Yes — lenders who specialise in contractors understand gaps between contracts. A strong CV showing consistent work history helps." },
      ]}
      personaLabel="contractor"
    />
  );
}
