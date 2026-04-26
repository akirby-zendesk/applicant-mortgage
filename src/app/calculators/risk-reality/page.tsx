"use client";

import { useState } from "react";
import { BookingCTA } from "@/components/BookingCTA";
import { calculateRiskReality } from "@/lib/calculators";
import { generateRiskPdf } from "@/lib/generateRiskPdf";

function LearnMore({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-white/80 text-sm font-medium">{title}</span>
        <svg
          className={`w-4 h-4 text-gold shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-2 text-white/60 text-xs leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

const riskDetails = {
  unableToWork: {
    title: "What does \"unable to work\" mean?",
    realTerms: (pct: number) =>
      `For every 100 people like you, ${Math.round(pct)} will suffer from a condition that prevents them from working for two months or more before their chosen retirement age.`,
    cope: "The average income protection claim lasts nearly 6 years. That could mean a long time with no income to rely on. Even if you qualify for state benefits, they are unlikely to cover your mortgage, bills, and everyday living expenses.",
    plan: "Income protection pays you a regular monthly amount if you can’t work due to illness or injury. Unlike savings, it doesn’t run out — it pays until you recover or retire.",
  },
  seriousIllness: {
    title: "What counts as a serious illness?",
    realTerms: (pct: number) =>
      `For every 100 people like you, ${Math.round(pct)} will be diagnosed with a serious illness — such as cancer, heart attack, or stroke — before they reach retirement.`,
    cope: "A serious diagnosis affects far more than your health. Even if you’re eventually able to return to work, the recovery period can last months or years. You may want to reduce your hours, pay for private treatment, or adapt your home.",
    plan: "Critical illness cover pays a tax-free lump sum on diagnosis of a defined serious illness. It’s designed to give you choices during recovery — whether that’s paying off your mortgage, covering care costs, or simply buying time.",
  },
  death: {
    title: "What would this mean for your family?",
    realTerms: (pct: number) =>
      `For every 100 people like you, ${Math.round(pct)} will pass away before their chosen retirement age, based on population and industry mortality data.`,
    cope: "If your family depends on your income, the financial impact of losing you would be immediate and severe — the mortgage, household bills, childcare, and everyday expenses don’t stop.",
    plan: "Life insurance pays a lump sum (or regular income) to your dependants if you die during the policy term. It’s one of the most affordable types of protection and can be set up to cover your mortgage specifically.",
  },
  combined: {
    title: "Why does the combined risk matter?",
    realTerms: (pct: number) =>
      `There is a ${Math.round(pct)}% chance that at least one of the above events will happen to you before retirement. That’s roughly 1 in ${Math.max(Math.round(100 / pct), 2)}.`,
    cope: "Most people insure their car, their phone, and their holiday — but not their ability to earn. When you look at the combined odds, the question isn’t whether you can afford protection, it’s whether you can afford not to have it.",
    plan: "A tailored protection package combines income protection, critical illness, and life cover to make sure you and your family are covered no matter what happens. We can help you find the right balance of cover and cost.",
  },
};

export default function RiskRealityCalculator() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [smoker, setSmoker] = useState(false);
  const [retirementAge, setRetirementAge] = useState(67);
  const [showResults, setShowResults] = useState(false);

  const yearsToRetirement = Math.max(retirementAge - age, 1);
  const risks = calculateRiskReality(age, retirementAge, gender, smoker);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setShowResults(true);
  }

  function handleShareResults() {
    generateRiskPdf({ name, age, retirementAge, gender, smoker, risks });
  }

  const riskCards = [
    { key: "unableToWork" as const, label: "Unable to work 2+ months", value: risks.unableToWork, color: "text-alert" },
    { key: "seriousIllness" as const, label: "Serious illness", value: risks.seriousIllness, color: "text-alert" },
    { key: "death" as const, label: "Death before retirement", value: risks.death, color: "text-white" },
    { key: "combined" as const, label: "Combined risk", value: risks.combined, color: "text-gold" },
  ];

  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
          Risk Reality Calculator
        </h1>
        <p className="text-white/70 text-lg max-w-[550px] mx-auto">
          What are the chances you&apos;ll be unable to work, suffer serious illness, or worse — before you retire?
        </p>
      </section>

      <section className="bg-off-white px-6 lg:px-12 py-16">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <form onSubmit={handleCalculate} className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => { setAge(Number(e.target.value)); setShowResults(false); }}
                  min={18}
                  max={70}
                  className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Retirement Age
                </label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => { setRetirementAge(Number(e.target.value)); setShowResults(false); }}
                  min={50}
                  max={75}
                  className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => { setGender(e.target.value as "male" | "female"); setShowResults(false); }}
                  className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Smoker
                </label>
                <select
                  value={smoker ? "yes" : "no"}
                  onChange={(e) => { setSmoker(e.target.value === "yes"); setShowResults(false); }}
                  className="w-full px-4 py-3 border-[1.5px] border-light-grey rounded-lg text-[15px] text-navy bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
                >
                  <option value="no">Non-Smoker</option>
                  <option value="yes">Smoker</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-navy-deep py-3.5 rounded-lg font-semibold text-sm hover:bg-[#D4B76A] transition-colors"
            >
              Calculate My Risk
            </button>
          </form>

          {showResults && (
            <div className="bg-navy rounded-xl p-8 space-y-6">
              <p className="text-center text-gold text-sm font-semibold uppercase tracking-wider">
                {name ? `${name}'s` : "Your"} Risk Reality — {yearsToRetirement} years to retirement
              </p>
              <div className="space-y-4">
                {riskCards.map((risk) => {
                  const detail = riskDetails[risk.key];
                  const pct = risk.value * 100;
                  return (
                    <div key={risk.key} className="space-y-2">
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <p className={`font-display text-3xl font-bold ${risk.color}`}>
                          {pct.toFixed(0)}%
                        </p>
                        <p className="text-xs text-white/60 mt-1">{risk.label}</p>
                      </div>
                      <LearnMore title={detail.title}>
                        <p className="font-semibold text-white/70">In real terms</p>
                        <p>{detail.realTerms(pct)}</p>
                        <p className="font-semibold text-white/70 pt-1">How would you cope financially?</p>
                        <p>{detail.cope}</p>
                        <p className="font-semibold text-white/70 pt-1">Your back-up plan</p>
                        <p>{detail.plan}</p>
                      </LearnMore>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-white/40 text-center">
                Based on published actuarial data. Individual circumstances vary.
              </p>
              <button
                type="button"
                onClick={handleShareResults}
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white/80 py-3 rounded-lg text-sm font-medium hover:bg-white/15 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Results as PDF
              </button>
            </div>
          )}
        </div>
      </section>

      <BookingCTA
        heading="Concerned about your results?"
        subtext="Book a free protection review with us."
      />
    </main>
  );
}
