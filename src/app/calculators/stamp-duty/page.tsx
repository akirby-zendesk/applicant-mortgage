"use client";

import { useState, useMemo } from "react";
import { BookingCTA } from "@/components/BookingCTA";
import {
  calculateStampDuty,
  formatCurrency,
  type BuyerType,
} from "@/lib/calculators";

export default function StampDutyCalculator() {
  const [price, setPrice] = useState(350000);
  const [buyerType, setBuyerType] = useState<BuyerType>("ftb");

  const results = useMemo(() => calculateStampDuty(price, buyerType), [price, buyerType]);

  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
          Stamp Duty Calculator
        </h1>
        <p className="text-white/70 text-lg max-w-[500px] mx-auto">
          Calculate your stamp duty land tax based on current HMRC rates.
        </p>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Property Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Buyer Type
              </label>
              <select
                value={buyerType}
                onChange={(e) => setBuyerType(e.target.value as BuyerType)}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              >
                <option value="ftb">First-Time Buyer</option>
                <option value="home-mover">Home Mover</option>
                <option value="additional">Additional Property</option>
                <option value="non-uk">Non-UK Resident</option>
              </select>
            </div>
          </div>

          <div className="bg-navy rounded-xl p-8 text-center">
            <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">
              Total Stamp Duty
            </p>
            <p className="font-display text-[44px] font-bold text-white">
              {formatCurrency(results.tax)}
            </p>
            <p className="text-xs text-white/50 mt-1">
              Effective rate: {results.effectiveRate.toFixed(1)}%
            </p>
            <div className="mt-6 space-y-2 text-left">
              {results.breakdown.map((band, i) => (
                <div
                  key={i}
                  className="flex justify-between text-xs text-white/70"
                >
                  <span>{band.band}</span>
                  <span className="font-medium">{formatCurrency(band.amount)}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate text-center mt-4">
            Based on current HMRC rates. Rates may change — speak to Dan for the latest figures.
          </p>
        </div>
      </section>

      <BookingCTA
        heading="Questions about your purchase costs?"
        subtext="Book a free consultation — Dan will walk you through all the numbers."
      />
    </main>
  );
}
