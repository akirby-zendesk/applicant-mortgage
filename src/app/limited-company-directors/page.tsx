import type { Metadata } from "next";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Ltd Company Director Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Mortgage advice for limited company directors. Low salary + high dividends? We find lenders who assess total remuneration.",
};

export default function LimitedCompanyDirectors() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Low salary, high dividends?{" "}
          <em className="not-italic text-gold">That&apos;s not a problem — it&apos;s a strategy</em>
        </>
      }
      heroSubtext="Most lenders only count PAYE salary. We work with specialist lenders who assess salary, dividends, and retained profits."
      weUnderstandTitle="The Ltd Director Challenge"
      weUnderstandContent={
        <>
          <p>
            As a limited company director, you probably pay yourself a low salary
            and take the rest as dividends. It&apos;s tax-efficient — but most high
            street lenders only count your PAYE salary for affordability, massively
            underestimating what you can actually afford.
          </p>
          <p>
            Retained profits, director&apos;s loans, and multiple income streams add
            further complexity that standard lenders struggle with.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We target lenders who assess your total remuneration — salary plus
            dividends, and in some cases retained profits. This can dramatically
            increase your borrowing capacity compared to a high street application.
          </p>
        </>
      }
      checklist={[
        { title: "Company accounts (2-3 years)", description: "Full accounts prepared by your accountant showing turnover, profit, and dividends." },
        { title: "SA302 tax calculations", description: "Personal tax computations for the last 2-3 years." },
        { title: "Dividend vouchers", description: "Records of dividends declared and paid." },
        { title: "Business bank statements", description: "3-6 months of company bank statements." },
        { title: "Proof of ID & address", description: "Passport/driving licence plus utility bill." },
        { title: "Companies House confirmation", description: "Confirmation statement showing your directorship and shareholding." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "Will lenders count my dividends?", answer: "Not all of them. Many high street lenders only count PAYE salary. We work with lenders who assess salary + dividends together, maximising your borrowing." },
        { question: "What about retained profits?", answer: "Some specialist lenders will consider retained profits in the company as part of your income assessment. We know which ones and when this approach is best." },
        { question: "I've only been a director for 1 year — can I get a mortgage?", answer: "Some lenders require 2-3 years of company accounts. Others will consider 1 year with supporting evidence. We'll assess your options." },
      ]}
      personaLabel="limited company director"
    />
  );
}
