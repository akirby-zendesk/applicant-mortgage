import type { Metadata } from "next";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "CIS Worker Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Mortgage advice for CIS workers. Most lenders don't understand CIS income — we find those who do.",
};

export default function CISWorkers() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Most lenders don&apos;t understand CIS.{" "}
          <em className="not-italic text-gold">We do.</em>
        </>
      }
      heroSubtext="CIS income is misunderstood by most high street lenders. We work with those who correctly categorise and maximise your borrowing."
      weUnderstandTitle="The CIS Challenge"
      weUnderstandContent={
        <>
          <p>
            The Construction Industry Scheme means you&apos;re paid gross by
            contractors, with tax deducted at source. But lenders can&apos;t agree
            on whether CIS workers are employed or self-employed — and how they
            classify you massively affects what you can borrow.
          </p>
          <p>
            Some lenders treat CIS income like self-employment (requiring 2-3 years
            of SA302s). Others treat it like employment and will use your gross CIS
            income — potentially doubling your borrowing power.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We know exactly which lenders accept CIS income as employed income
            and which require full self-employed documentation. We'll match your
            evidence to the lender that gives you the strongest application.
          </p>
        </>
      }
      checklist={[
        { title: "CIS payment vouchers", description: "Last 3 months of CIS vouchers from your contractor(s)." },
        { title: "SA302 tax calculations", description: "If you file a self-assessment return — last 2-3 years." },
        { title: "Tax year overviews", description: "From HMRC, confirming your SA302 figures." },
        { title: "Bank statements", description: "3-6 months showing CIS income deposits." },
        { title: "Proof of ID & address", description: "Passport/driving licence plus utility bill." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "Am I employed or self-employed for mortgage purposes?", answer: "It depends on the lender. Some treat CIS as employed (better for borrowing), others as self-employed. We target the lenders most favourable for your situation." },
        { question: "Do I need 2-3 years of CIS history?", answer: "Not always. Some lenders who treat CIS as employment only need 3 months of vouchers. We know which ones." },
      ]}
      personaLabel="CIS"
    />
  );
}
