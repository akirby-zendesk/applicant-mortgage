import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { BookingCTA } from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Client Stories | Applicant Mortgage Brokers",
  description:
    "Read what our clients say about working with Applicant Mortgage Brokers. Real reviews from first-time buyers, remortgagers, and home movers.",
};

interface Testimonial {
  clientName: string;
  quote: string;
  serviceType: string;
  date?: string;
  starRating: number;
}

const featuredTestimonials: (Testimonial & { image: string })[] = [
  {
    clientName: "Jaine S.",
    quote:
      "Would highly recommend Dan Baskerville. He has recently helped my daughter and partner secure a first mortgage. Dan was very helpful, explained everything in detail and has been there whenever we've had any questions throughout.",
    serviceType: "First-Time Buyers",
    date: "April 2023",
    starRating: 5,
    image: "/images/ftb/ftb-keys.jpeg",
  },
  {
    clientName: "Sahrish",
    quote:
      "Dan is extremely professional & great at what he does, our experience with Dan was brilliant. He went the extra mile for us and made sure we got what we were looking for. Very highly recommended.",
    serviceType: "Remortgage",
    date: "July 2023",
    starRating: 5,
    image: "/images/dan/dan-coffee.jpeg",
  },
  {
    clientName: "Charlie",
    quote:
      "I cannot express how grateful I am to Dan for securing my new home. Great service and got me an amazing deal. Always keeping me up to date. A broker definitely gives you more options and opens up more doors.",
    serviceType: "House Purchase",
    starRating: 5,
    image: "/images/teacher/teacher-highfive.jpeg",
  },
];

const allTestimonials: Testimonial[] = [
  {
    clientName: "Jaine S.",
    quote:
      "Would highly recommend Dan Baskerville. He has recently helped my daughter and partner secure a first mortgage. Dan was very helpful, explained everything in detail and has been there whenever we've had any questions throughout.",
    serviceType: "First-Time Buyers",
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
    serviceType: "First-Time Buyer",
    starRating: 5,
  },
  {
    clientName: "Ryan H.",
    quote:
      "Dan was recommended to me and from day 1 his service has been superb. He's incredibly quick to reply to any question I've had, explains everything clearly and ultimately found me a mortgage which was perfect for me.",
    serviceType: "First-Time Buyer",
    starRating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-gold"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientStories() {
  return (
    <main>
      <HeroSection
        heading={
          <>
            Client{" "}
            <em className="not-italic text-gold">Stories</em>
          </>
        }
        subtext="Real feedback from real clients. Here's what they have to say about working with us."
      />

      {/* Featured Stories */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3 text-center">
            Spotlight
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-12 text-center">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((t) => (
              <div
                key={t.clientName}
                className="rounded-2xl overflow-hidden bg-off-white shadow-[0_4px_24px_rgba(27,42,74,0.08),0_0_0_1px_rgba(27,42,74,0.04)] hover:shadow-[0_8px_40px_rgba(197,165,90,0.15),0_0_0_1px_rgba(197,165,90,0.1)] transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.serviceType} client story`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold/90 text-navy-deep text-xs font-semibold px-3 py-1 rounded-full">
                      {t.serviceType}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <StarRating count={t.starRating} />
                  <p className="text-slate italic leading-relaxed mt-4 mb-5 text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy text-sm">
                      {t.clientName}
                    </span>
                    {t.date && (
                      <span className="text-slate/60 text-xs">{t.date}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials - Masonry Grid */}
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3 text-center">
            What Our Clients Say
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-12 text-center">
            Every Review, Every Story
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {allTestimonials.map((t) => (
              <div
                key={t.clientName}
                className="break-inside-avoid mb-6 bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(27,42,74,0.06)] hover:shadow-[0_6px_28px_rgba(197,165,90,0.12)] transition-shadow duration-300"
              >
                <StarRating count={t.starRating} />
                <p className="text-slate italic leading-relaxed mt-4 mb-5 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-navy text-sm">
                    {t.clientName}
                  </span>
                  <span className="bg-gold/15 text-gold text-xs font-medium px-2.5 py-1 rounded-full">
                    {t.serviceType}
                  </span>
                </div>
                {t.date && (
                  <p className="text-slate/50 text-xs mt-2">{t.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to Become Our Next Success Story?"
        subtext="Book a free, no-obligation consultation. We would love to help you find the right mortgage."
      />
    </main>
  );
}
