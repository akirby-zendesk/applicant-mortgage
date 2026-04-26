import type { Metadata } from "next";
import Image from "next/image";
import { PersonaSubPageLayout } from "@/components/PersonaSubPageLayout";

export const metadata: Metadata = {
  title: "Home Mover Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Expert mortgage advice for home movers. Chain management, porting, bridging, and timing — we coordinate your sale and purchase seamlessly.",
};

export default function HomeMovers() {
  return (
    <PersonaSubPageLayout
      heroHeading={
        <>
          Moving is stressful enough without{" "}
          <em className="not-italic text-gold">mortgage uncertainty</em>
        </>
      }
      heroSubtext="Whether you're upsizing, downsizing, or relocating — we coordinate your sale and purchase to keep things moving."
      weUnderstandTitle="The Home Mover Challenge"
      weUnderstandContent={
        <>
          <p>
            Moving home is one of the most stressful life events — and the mortgage
            side doesn&apos;t need to add to it. Chain management, timing your sale
            with your purchase, deciding whether to port your existing mortgage or
            start fresh — there are decisions at every turn.
          </p>
          <p>
            High street lenders often treat home movers as a simple remortgage or
            new purchase, missing the complexity of coordinating both simultaneously.
            Porting isn&apos;t always the best option even when it&apos;s available, and
            bridging finance might be needed if timings don&apos;t align.
          </p>
        </>
      }
      howWeHelpContent={
        <>
          <p>
            We look at the full picture — your existing deal, your new property,
            the timing of your chain, and whether porting, remortgaging, or a fresh
            application gives you the best outcome. We'll coordinate with your
            solicitor and estate agent to keep everything aligned.
          </p>
          <p>
            If there&apos;s a gap between selling and buying, we can arrange
            bridging finance to stop you losing your onward purchase. And if
            early repayment charges are a factor, we'll calculate whether the
            savings justify the cost.
          </p>
        </>
      }
      imageSection={
        <section className="bg-white px-6 lg:px-12 py-16">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(27,42,74,0.12)]">
              <Image
                src="/images/ftb/ftb-consultation.jpeg"
                alt="Dan reviewing mortgage options with a client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                Your Move, Our Coordination
              </h3>
              <p className="text-slate leading-[1.7]">
                We sit down with you to review every detail of your sale and
                purchase together, making sure the mortgage, the chain, and the
                timing all work in your favour.
              </p>
            </div>
          </div>
        </section>
      }
      checklist={[
        { title: "Current mortgage statement", description: "Shows your outstanding balance, rate, and any ERCs that apply." },
        { title: "Property valuation", description: "An idea of what your current home is worth — estate agent estimates work." },
        { title: "Proof of income", description: "3 months' payslips and latest P60, or 2-3 years' accounts if self-employed." },
        { title: "Deposit calculation", description: "Your expected equity from the sale minus any bridging or moving costs." },
        { title: "Solicitor details", description: "Instruct a conveyancer early — delays here are the number one cause of chain collapse." },
        { title: "Moving timeline", description: "When you need to be out, when you want to complete — we work backwards from your dates." },
      ]}
      testimonials={[
        {
          clientName: "Charlie",
          quote: "I cannot express how grateful I am to Dan for securing my new home. Great service and got me an amazing deal. Always keeping me up to date. A broker definitely gives you more options and opens up more doors.",
          serviceType: "House Purchase",
          starRating: 5,
        },
      ]}
      faqs={[
        { question: "Should I port my mortgage or get a new one?", answer: "It depends on your current rate, any ERCs, and what new deals are available. We'll compare both options and recommend the one that costs you less overall." },
        { question: "What if my buyer pulls out?", answer: "We keep your mortgage offer live (typically 3-6 months) so you're ready when a new buyer comes in. No need to start again from scratch." },
        { question: "Can I buy before I sell?", answer: "Yes — bridging finance can cover the gap. We'll assess whether this makes financial sense in your situation and arrange it if so." },
        { question: "How long does a home mover mortgage take?", answer: "Once your offer is accepted, typically 4-8 weeks for the mortgage. The overall chain timing depends on all parties, but we keep your side moving." },
      ]}
      personaLabel="home mover"
    />
  );
}
