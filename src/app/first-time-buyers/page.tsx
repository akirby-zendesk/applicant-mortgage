import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PersonaMicrositeLayout } from "@/components/PersonaMicrositeLayout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "First-Time Buyer Mortgage Advice | Applicant Mortgage Brokers",
  description:
    "Step-by-step mortgage guidance for first-time buyers in High Wycombe and Buckinghamshire. Fee-free, whole-of-market advice from Applicant Mortgage Brokers.",
};

const testimonials = [
  {
    clientName: "Jaine S.",
    quote:
      "Would highly recommend Dan Baskerville. He has recently helped my daughter and partner secure a first mortgage. Dan was very helpful, explained everything in detail and has been there whenever we've had any questions throughout.",
    serviceType: "First Time Buyers",
    date: "April 2023",
    starRating: 5,
  },
  {
    clientName: "Gareth P.",
    quote:
      "Dan is fantastic, professional from the go and extremely honest with you. He got us an amazing deal and made sure we didn't get caught out by things we didn't think of.",
    serviceType: "First Time Buyer",
    starRating: 5,
  },
  {
    clientName: "Ryan H.",
    quote:
      "Dan was recommended to me and from day 1 his service has been superb. He explains everything clearly and ultimately found me a mortgage which was perfect for me.",
    serviceType: "First Time Buyer",
    starRating: 5,
  },
];

const faqs = [
  {
    question: "How much deposit do I need as a first-time buyer?",
    answer:
      "Most lenders require a minimum of 5% deposit, though 10-15% will get you access to better rates. There are also schemes available that can help — we'll walk you through all the options.",
  },
  {
    question: "What is a mortgage in principle?",
    answer:
      "A mortgage in principle (also called an agreement in principle or decision in principle) is a statement from a lender saying they'd be willing to lend you a certain amount. It's not a guarantee, but it shows estate agents and sellers you're serious.",
  },
  {
    question: "Do I need to pay for mortgage advice?",
    answer:
      "No — Applicant Mortgage Brokers do not charge a fee for mortgage advice. We are paid by the lender when your mortgage completes, so the advice is completely free to you.",
  },
  {
    question: "How long does the mortgage process take?",
    answer:
      "From application to completion, a typical mortgage takes 4-8 weeks. However, the overall buying process from offer to keys can be 8-12 weeks depending on the chain and conveyancing.",
  },
  {
    question: "Can I get a mortgage with a small deposit?",
    answer:
      "Yes — there are 95% mortgages available (5% deposit). Some government-backed schemes can also help. We'll assess your situation and find the best options for your deposit level.",
  },
];

export default function FirstTimeBuyers() {
  return (
    <PersonaMicrositeLayout
      heroBadge="First-Time Buyers"
      heroHeading={
        <>
          Your first mortgage shouldn&apos;t feel like your{" "}
          <em className="not-italic text-gold">hardest</em>
        </>
      }
      heroSubtext="Step-by-step guidance from mortgage in principle to getting your keys. We make the complex simple."
      videoId="YOUR_FTB_VIDEO_ID"
      videoTitle="First Time Buyers — 3 Top Tips"
      testimonials={testimonials}
      faqs={faqs}
      ctaHeading="Ready to take the first step?"
      ctaSubtext="Book a free, no-obligation chat about your first mortgage. We're here to help."
    >
      {/* Content section: step-by-step buying process */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            The Process
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            Your Step-by-Step Guide
          </h2>
          <div className="space-y-8 text-slate leading-[1.7]">
            <p>
              Everybody has different mortgage needs, and you&apos;ll receive an
              informative and professional service from initial contact. Getting
              to know you and understanding your situation is essential when
              you&apos;re a first-time buyer who needs a mortgage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Chat",
                  desc: "We discuss your situation, income, deposit, and what you're looking for. No jargon, no pressure.",
                },
                {
                  step: "2",
                  title: "Find Your Mortgage",
                  desc: "We search the whole market to find the right deal for you — rates, terms, and affordability all considered.",
                },
                {
                  step: "3",
                  title: "Application to Keys",
                  desc: "We handle the application, keep you updated throughout, and are there whenever questions come up.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image feature: keys moment */}
      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(27,42,74,0.12)]">
            <Image
              src="/images/ftb/ftb-keys.jpeg"
              alt="First-time buyers receiving their keys"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-navy mb-3">
              From First Chat to Front Door
            </h3>
            <p className="text-slate leading-[1.7]">
              Every journey starts with a conversation. We&apos;ll guide you through
              every step, from working out what you can afford to the moment you
              pick up your keys.
            </p>
          </div>
        </div>
      </section>

      {/* Affordability calculator link */}
      <section className="bg-white px-6 lg:px-12 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">
          How Much Could You Borrow?
        </h2>
        <p className="text-slate text-base mb-6 max-w-[500px] mx-auto">
          Use our affordability calculator to get an estimate based on your
          income and outgoings.
        </p>
        <Button href="/calculators/affordability" variant="primary">
          Try the Affordability Calculator
        </Button>
      </section>

      {/* Related Reading */}
      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Related Reading
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Guides for First-Time Buyers
          </h2>
          <div className="space-y-3">
            {[
              { title: "3 Top Tips Before You Start", href: "/blog/first-time-buyers-top-tips" },
              { title: "Know Your Deposit", href: "/blog/preparing-to-buy-know-your-deposit" },
              { title: "Check Your Credit History", href: "/blog/preparing-to-buy-credit-history" },
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
