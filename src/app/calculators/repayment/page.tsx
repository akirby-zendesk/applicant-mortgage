"use client";

import { useState, useMemo } from "react";
import { BookingCTA } from "@/components/BookingCTA";
import { calculateRepayment, formatCurrency } from "@/lib/calculators";

export default function RepaymentCalculator() {
  const [propertyValue, setPropertyValue] = useState(350000);
  const [deposit, setDeposit] = useState(35000);
  const [term, setTerm] = useState(25);
  const [rate, setRate] = useState(4.5);

  const results = useMemo(
    () => calculateRepayment(propertyValue, deposit, term, rate),
    [propertyValue, deposit, term, rate]
  );

  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
          Repayment Calculator
        </h1>
        <p className="text-white/70 text-lg max-w-[500px] mx-auto">
          Estimate your monthly mortgage repayments instantly.
        </p>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Property Value
              </label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Deposit
              </label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Mortgage Term (years)
              </label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                min={1}
                max={40}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                step={0.1}
                min={0.1}
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
          </div>

          {results && (
            <div className="bg-navy rounded-xl p-8 text-center space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">
                  Estimated Monthly Payment
                </p>
                <p className="font-display text-[44px] font-bold text-white">
                  {formatCurrency(results.monthlyPayment)}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-white/50 mb-1">Loan Amount</p>
                  <p className="text-sm font-semibold text-white">
                    {formatCurrency(results.principal)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Total Interest</p>
                  <p className="text-sm font-semibold text-white">
                    {formatCurrency(results.totalInterest)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">LTV</p>
                  <p className="text-sm font-semibold text-white">
                    {results.ltv}%
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <BookingCTA
        heading="Want to discuss your options?"
        subtext="Book a free call with us to go through your numbers in detail."
      />
    </main>
  );
}
