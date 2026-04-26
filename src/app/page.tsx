import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { PersonaCard } from "@/components/PersonaCard";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BlogCard } from "@/components/BlogCard";
import { BookingCTA } from "@/components/BookingCTA";
import { Button } from "@/components/Button";

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
    clientName: "Sahrish",
    quote:
      "Dan is extremely professional & great at what he does, our experience with Dan was brilliant. He went the extra mile for us and made sure we got what we were looking for. Very highly recommended.",
    serviceType: "Remortgage",
    date: "July 2023",
    starRating: 5,
  },
  {
    clientName: "Charlie",
    quote:
      "I cannot express how grateful I am to Dan for securing my new home. Great service and got me an amazing deal. Always keeping me up to date. A broker definitely gives you more options and opens up more doors.",
    serviceType: "House Purchase",
    starRating: 5,
  },
  {
    clientName: "Gareth P.",
    quote:
      "Dan is fantastic, professional from the go and extremely honest with you. He got us an amazing deal and made sure we didn't get caught out by things we didn't think of. Dan went over and above sorting out insurance for me.",
    serviceType: "First Time Buyer",
    starRating: 5,
  },
  {
    clientName: "Ryan H.",
    quote:
      "Dan was recommended to me and from day 1 his service has been superb. He's incredibly quick to reply to any question I've had, explains everything clearly and ultimately found me a mortgage which was perfect for me.",
    serviceType: "First Time Buyer",
    starRating: 5,
  },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero with intent tabs */}
      <HeroSection
        badge="FCA Regulated · Whole of Market · Fee-Free Advice"
        heading={
          <>
            Expert mortgage advice,{" "}
            <em className="not-italic text-gold">personally delivered</em>
          </>
        }
        subtext="Approachable, friendly guidance for every step of your mortgage journey. Based in High Wycombe, trusted across Buckinghamshire."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
        secondaryText="Explore Calculators"
        secondaryHref="/calculators"
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Grid */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="text-center mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            How We Can Help
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            Mortgage Solutions For Every Journey
          </h2>
          <p className="text-[17px] text-slate max-w-[560px] mx-auto leading-relaxed">
            Whether you&apos;re buying your first home or growing a property
            portfolio, get expert guidance tailored to your situation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <ServiceCard
            icon={
              <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            }
            title="First-Time Buyers"
            description="Step-by-step guidance from mortgage in principle to getting your keys. Making the complex simple."
            href="/first-time-buyers"
          />
          <ServiceCard
            icon={
              <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24">
                <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
              </svg>
            }
            title="Remortgage"
            description="Don't let your deal expire onto SVR. We'll find you the best rate and handle the switch."
            href="/remortgage"
          />
          <ServiceCard
            icon={
              <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24">
                <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V7h-4v4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
              </svg>
            }
            title="Buy-to-Let"
            description="From first-time landlords to portfolio investors, specialist advice for every property type."
            href="/buy-to-let"
          />
          <ServiceCard
            icon={
              <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            }
            title="Life Cover & Protection"
            description="Protect what matters most. Income protection, critical illness, and life cover tailored to your needs."
            href="/protection"
          />
        </div>
      </section>

      {/* 4. Roof Divider */}
      <SectionDivider />

      {/* 5. Who We Help — Persona Grid */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="text-center mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Who We Help
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            Expert Advice For Your Situation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>}
            title="First-Time Buyers"
            hook="Your first mortgage shouldn't feel like your hardest."
            href="/first-time-buyers"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" /></svg>}
            title="Home Movers"
            hook="Moving is stressful enough without mortgage uncertainty."
            href="/home-movers"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4z" /></svg>}
            title="Remortgage"
            hook="Every month on SVR is money you didn't need to spend."
            href="/remortgage"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>}
            title="Employed"
            hook="Probation, overtime, bonus — we maximise what lenders count."
            href="/employed"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>}
            title="Self-Employed"
            hook="Your income isn't straightforward — your advice shouldn't be either."
            href="/self-employed"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>}
            title="Sole Traders"
            hook="Tax-efficient doesn't have to mean mortgage-limited."
            href="/sole-traders"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>}
            title="CIS Workers"
            hook="Most lenders don't understand CIS. We do."
            href="/cis-workers"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" /></svg>}
            title="Contractors"
            hook="Your day rate tells us more than a payslip ever could."
            href="/contractors"
          />
          <PersonaCard
            icon={<svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>}
            title="Ltd Company Directors"
            hook="Low salary, high dividends? That's a strategy, not a problem."
            href="/limited-company-directors"
          />
        </div>
      </section>

      {/* 6. About Us (split layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="px-8 lg:px-16 py-20 flex flex-col justify-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            About Us
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-5">
            Your Mortgage, Our Priority
          </h2>
          <p className="text-base text-slate leading-[1.7] mb-4">
            With years of experience as a whole-of-market mortgage broker, we
            take the time to understand your unique situation and find the right
            solution — not the quickest one.
          </p>
          <p className="text-base text-slate leading-[1.7] mb-5">
            Based in High Wycombe, we work with clients across Buckinghamshire
            and beyond, offering face-to-face and remote consultations.
          </p>
          <div className="flex flex-wrap gap-6 mb-7">
            {["CeMAP Qualified", "Whole of Market", "FCA Authorised"].map(
              (cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-2 text-[13px] font-semibold text-navy"
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {cred}
                </div>
              )
            )}
          </div>
          <div>
            <Button href="/about" variant="navy">
              More About Us
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-navy-deep to-navy relative overflow-hidden min-h-[300px]">
          <Image
            src="/images/dan/dan-coffee.jpeg"
            alt="Dan Baskerville chatting with a client over coffee"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* 8. Calculator Preview */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
              Tools
            </p>
            <h2 className="font-display text-4xl font-bold text-navy mb-4">
              Mortgage Calculators
            </h2>
            <p className="text-base text-slate leading-[1.7] mb-6">
              Get an instant estimate of your monthly repayments, see how much
              you could borrow, or calculate your stamp duty — all without
              leaving the site.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/calculators/repayment" variant="outline-navy">
                Repayment Calculator
              </Button>
              <Button href="/calculators/affordability" variant="outline-navy">
                Affordability
              </Button>
              <Button href="/calculators/stamp-duty" variant="outline-navy">
                Stamp Duty
              </Button>
              <Button href="/calculators/risk-reality" variant="gold-outline">
                Risk Reality
              </Button>
            </div>
          </div>
          <div className="bg-off-white rounded-2xl p-9 border border-light-grey">
            <h3 className="text-xl font-bold text-navy mb-6">
              Monthly Repayment
            </h3>
            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                  Property Value
                </label>
                <div className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white">
                  £350,000
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                  Deposit
                </label>
                <div className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white">
                  £35,000 (10%)
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                  Mortgage Term
                </label>
                <div className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white">
                  25 years
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">
                Estimated Monthly Payment
              </p>
              <p className="font-display text-[40px] font-bold text-white">
                £1,647
              </p>
              <p className="text-[13px] text-white/50 mt-1">
                Based on 4.5% interest rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Blog Preview */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="text-center mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
            Guides & Insights
          </p>
          <h2 className="font-display text-4xl font-bold text-navy mb-4">
            Latest from the Blog
          </h2>
          <p className="text-[17px] text-slate max-w-[560px] mx-auto leading-relaxed">
            Practical mortgage advice, market updates, and expert insights to
            help you make informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <BlogCard
            title="First-Time Buyers — 3 Top Tips!"
            excerpt="As you prepare to get onto the property ladder, here are 3 top tips to get you started."
            slug="first-time-buyers-top-tips"
            personaTag="ftb"
            imageUrl="/images/ftb/ftb-consultation.jpeg"
          />
          <BlogCard
            title="Fixed Rate or Variable?"
            excerpt="Fixed, SVR, discounted, tracker — understanding how different mortgage rates work."
            slug="fixed-rate-or-variable"
            personaTag="remortgage"
          />
          <BlogCard
            title="Buy-to-Let: Your Borrowing Potential"
            excerpt="The amount you can borrow depends on various factors. Here's what you need to know."
            slug="buy-to-let-borrowing-potential"
            personaTag="btl"
          />
        </div>
      </section>

      {/* 10. CTA Banner */}
      <BookingCTA />
    </main>
  );
}
