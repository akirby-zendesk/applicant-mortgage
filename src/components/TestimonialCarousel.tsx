"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  clientName: string;
  quote: string;
  serviceType?: string;
  date?: string;
  starRating?: number;
}

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;
  const t = testimonials[current];

  return (
    <section className="bg-navy-deep px-6 lg:px-12 py-20 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold mb-3">
        Client Stories
      </p>
      <h2 className="font-display text-4xl font-bold text-white mb-12">
        Trusted by Homeowners
      </h2>

      <div className="max-w-[680px] mx-auto bg-white/4 border border-white/8 rounded-2xl p-12 relative">
        <span className="absolute top-4 left-8 font-display text-[80px] text-gold/30 leading-none">
          &ldquo;
        </span>
        <div className="text-[#FBBF24] text-xl tracking-[4px] mb-5">
          {"★".repeat(t.starRating || 5)}
        </div>
        <p className="text-[17px] text-white/85 leading-[1.7] italic mb-6">
          {t.quote}
        </p>
        <p className="font-semibold text-white text-[15px]">{t.clientName}</p>
        {(t.serviceType || t.date) && (
          <p className="text-gold text-[13px] mt-1">
            {[t.serviceType, t.date].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-gold" : "bg-white/20"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
