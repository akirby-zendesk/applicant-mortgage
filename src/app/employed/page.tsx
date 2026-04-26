import type { Metadata } from "next";
import Image from "next/image";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Employed Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Even 'straightforward' employed mortgages have hidden catches. Probation, overtime, bonus inclusion — we maximise what lenders count.",
};

export default function Employed() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Even &ldquo;straightforward&rdquo; employed mortgages have{" "}
          <em className="not-italic text-gold">hidden catches</em>
        </>
      }
      heroSubtext="Probation periods, zero-hours contracts, variable overtime — we know which lenders maximise your income recognition."
      weUnderstandTitle="It's Not Always Simple"
      weUnderstandContent={
        <>
          <p>
            Being employed should make getting a mortgage straightforward — but
            it&apos;s not always. Probation periods can block applications, zero-hours
            contracts are treated differently by every lender, and how overtime,
            commission, and bonuses are assessed varies wildly.
          </p>
          <p>
            Some lenders count 100% of your overtime, others only 50%, and some
            ignore it entirely. The same goes for commission and annual bonuses.
            Choosing the wrong lender can cost you tens of thousands in borrowing capacity.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We match your income profile to the lender that gives you the best
            outcome. If you earn significant overtime, we'll target lenders who
            count it in full. If you&apos;ve just started a new job, we know which
            lenders accept day-one applications.
          </p>
        </>
      }
      imageSection={
        <section className="bg-white px-6 lg:px-12 py-16">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                Getting the Right Result
              </h3>
              <p className="text-slate leading-[1.7]">
                A successful mortgage application is about more than just
                ticking boxes. We take the time to understand your full income
                picture and match you with the lender who values it most.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(27,42,74,0.12)] order-1 lg:order-2">
              <Image
                src="/images/teacher/teacher-highfive.jpeg"
                alt="Celebrating a successful mortgage application"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </section>
      }
      checklist={[
        { title: "Payslips (3 months)", description: "Most recent consecutive monthly payslips showing basic pay, overtime, and any variable income." },
        { title: "Latest P60", description: "Annual summary from your employer confirming total earnings and tax paid." },
        { title: "Employer details", description: "Company name, address, and HR contact for employment verification." },
        { title: "Contract of employment", description: "Especially important if you're in probation, on a fixed-term contract, or on zero hours." },
        { title: "Proof of ID & address", description: "Passport/driving licence plus utility bill or council tax bill." },
        { title: "Deposit evidence", description: "3 months of savings statements showing your deposit." },
      ]}
      testimonials={[]}
      faqs={[
        { question: "Can I get a mortgage while on probation?", answer: "Yes — several lenders accept applications from day one of employment. We know which ones and will ensure your application is placed correctly." },
        { question: "Will my overtime be included?", answer: "It depends on the lender. Some count 100% of overtime, others 50%, and some ignore it. We target the lender that maximises your specific income makeup." },
        { question: "I'm on a zero-hours contract — is that a problem?", answer: "Not necessarily. If you have a track record of consistent hours, some lenders will average your income over 3-12 months. We'll find the right fit." },
        { question: "What if I've just changed jobs?", answer: "Many lenders are fine with new employment as long as your probation terms aren't prohibitive. We'll advise on timing and lender selection." },
      ]}
      personaLabel="employed"
      relatedPosts={[
        { title: "Mortgages for Teachers", href: "/blog/mortgages-for-teachers" },
        { title: "Why Whole of Market Matters", href: "/blog/why-whole-of-market-matters" },
      ]}
      relatedPostsHeading="Guides for Employed Borrowers"
    />
  );
}
