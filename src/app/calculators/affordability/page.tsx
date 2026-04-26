"use client";

import { useState, useMemo } from "react";
import { BookingCTA } from "@/components/BookingCTA";
import { calculateAffordability, formatCurrency } from "@/lib/calculators";

export default function AffordabilityCalculator() {
  const [income1, setIncome1] = useState(50000);
  const [income2, setIncome2] = useState(0);
  const [outgoings, setOutgoings] = useState(500);
  const [deposit, setDeposit] = useState(30000);

  const results = useMemo(
    () => calculateAffordability(income1, income2, deposit),
    [income1, income2, deposit]
  );

  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
          Affordability Calculator
        </h1>
        <p className="text-white/70 text-lg max-w-[500px] mx-auto">
          Estimate how much you could borrow based on your income.
        </p>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Your Annual Income
              </label>
              <input
                type="number"
                value={income1}
                onChange={(e) => setIncome1(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Partner&apos;s Annual Income (optional)
              </label>
              <input
                type="number"
                value={income2}
                onChange={(e) => setIncome2(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Monthly Outgoings
              </label>
              <input
                type="number"
                value={outgoings}
                onChange={(e) => setOutgoings(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Deposit Available
              </label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
          </div>

          <div className="bg-navy rounded-xl p-8 text-center space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">
                Estimated Borrowing
              </p>
              <p className="font-display text-[36px] font-bold text-white">
                {formatCurrency(results.lowMultiple)} – {formatCurrency(results.highMultiple)}
              </p>
              <p className="text-xs text-white/50 mt-1">
                Based on 4–4.5× combined income of {formatCurrency(results.totalIncome)}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">
                Suggested Property Budget
              </p>
              <p className="text-xl font-bold text-white">
                {formatCurrency(results.lowBudget)} – {formatCurrency(results.highBudget)}
              </p>
              <p className="text-xs text-white/50 mt-1">
                Borrowing + your {formatCurrency(deposit)} deposit
              </p>
            </div>
          </div>

          <p className="text-xs text-slate text-center mt-4">
            This is an indicative estimate. Actual borrowing depends on your credit history, outgoings, and lender criteria. Speak to Dan for an accurate figure.
          </p>
        </div>
      </section>

      <BookingCTA
        heading="Want an accurate figure?"
        subtext="Book a free consultation — Dan will assess your full financial picture."
      />
    </main>
  );
}
