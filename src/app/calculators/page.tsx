import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Mortgage Calculators | Applicant Mortgage Brokers",
  description:
    "Free mortgage calculators — repayment, affordability, stamp duty, and risk reality. Get instant estimates before speaking to Dan.",
};

const calculators = [
  {
    title: "Repayment Calculator",
    description: "Calculate your monthly mortgage repayments based on property value, deposit, term, and interest rate.",
    href: "/calculators/repayment",
    icon: <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8h-4v4h-2v-4H5v-2h4V5h2v4h4v2z" /></svg>,
  },
  {
    title: "Affordability Calculator",
    description: "Find out how much you could borrow based on your income, partner's income, and monthly outgoings.",
    href: "/calculators/affordability",
    icon: <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></svg>,
  },
  {
    title: "Stamp Duty Calculator",
    description: "Calculate your stamp duty based on property price and buyer type — first-time buyer, home mover, or additional property.",
    href: "/calculators/stamp-duty",
    icon: <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" /></svg>,
  },
  {
    title: "Risk Reality Calculator",
    description: "Discover the probability of being unable to work, serious illness, or death before retirement. A wake-up call for protection.",
    href: "/calculators/risk-reality",
    icon: <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>,
  },
];

export default function Calculators() {
  return (
    <main>
      <HeroSection
        heading={
          <>
            Mortgage <em className="not-italic text-gold">Calculators</em>
          </>
        }
        subtext="Get instant estimates for repayments, affordability, stamp duty, and protection risk — then book a free consultation to discuss your results."
      />
      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {calculators.map((calc) => (
            <ServiceCard
              key={calc.href}
              icon={calc.icon}
              title={calc.title}
              description={calc.description}
              href={calc.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
