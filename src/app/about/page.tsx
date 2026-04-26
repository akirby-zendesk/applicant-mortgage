import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { BookingCTA } from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "About Applicant Mortgage Brokers",
  description:
    "Meet Applicant Mortgage Brokers — CeMAP qualified, whole-of-market mortgage broker based in High Wycombe. Fee-free advice, available evenings and Saturdays.",
};

export default function About() {
  return (
    <main>
      <HeroSection
        heading={
          <>
            Your Mortgage,{" "}
            <em className="not-italic text-gold">My Priority</em>
          </>
        }
        subtext="Meet Applicant Mortgage Brokers — your local, independent mortgage adviser."
      />

      {/* Bio section */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-navy-deep to-navy rounded-2xl aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/dan/dan-office.jpeg"
                alt="Dan Baskerville at the Applicant Mortgage Brokers office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6 text-slate leading-[1.7]">
            <p>
              With years of experience as a whole-of-market mortgage broker, we take
              the time to understand your unique situation and find the right
              solution — not the quickest one.
            </p>
            <p>
              Applicant Mortgage Brokers help clients find the most suitable
              mortgage. As a broker, both typical &ldquo;High Street&rdquo; and
              &ldquo;Specialist&rdquo; mortgage lenders are used to find a suitable
              mortgage, with a passion to deliver a solution that meets your needs.
            </p>
            <p>
              Based in High Wycombe, we work with clients across Buckinghamshire and
              beyond, offering face-to-face and remote consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Credentials
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-10">
            Qualifications &amp; Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "CeMAP Qualified", desc: "Certificate in Mortgage Advice and Practice — the industry-standard qualification for mortgage advisers." },
              { title: "Whole of Market", desc: "Access to the full range of mortgage products — not tied to any single lender or limited panel." },
              { title: "FCA Authorised", desc: "Appointed representative of HL Partnership Limited, authorised and regulated by the Financial Conduct Authority." },
            ].map((cred) => (
              <div key={cred.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{cred.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            The Process
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enquire", desc: "Get in touch by phone, email, or our contact form. We'll arrange a convenient time to chat." },
              { step: "2", title: "Advise", desc: "We review your situation, search the whole market, and present the best options with clear explanations." },
              { step: "3", title: "Arrange", desc: "Once you've chosen, we handle the application, keep you updated, and are there whenever questions arise." },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-gold">{item.step}</span>
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
              Location
            </p>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">
              Based in High Wycombe
            </h2>
            <p className="text-slate leading-[1.7] mb-6">
              Applicant Mortgage Brokers Limited
              <br />
              Registered Office: c/o Azets, Burnham Yard, London End,
              Beaconsfield, Bucks, HP9 2JH
            </p>
            <div className="space-y-2 text-sm text-slate">
              <p><strong className="text-navy">Monday – Friday:</strong> 9am – 6pm</p>
              <p><strong className="text-navy">Saturday:</strong> 10am – 3pm</p>
              <p><strong className="text-navy">Evenings:</strong> By appointment only</p>
              <p><strong className="text-navy">Sunday:</strong> Closed</p>
            </div>
          </div>
          <div className="bg-light-grey rounded-xl min-h-[300px] flex items-center justify-center text-slate text-sm">
            Map embed placeholder
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white px-6 lg:px-12 py-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Related Reading
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Why Whole of Market?
          </h2>
          <div className="space-y-3">
            {[
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

      <BookingCTA />
    </main>
  );
}
