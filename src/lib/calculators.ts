export type BuyerType = "ftb" | "home-mover" | "additional" | "non-uk";

export interface RepaymentResult {
  monthlyPayment: number;
  totalCost: number;
  totalInterest: number;
  ltv: string;
  principal: number;
}

export function calculateRepayment(
  propertyValue: number,
  deposit: number,
  termYears: number,
  annualRate: number
): RepaymentResult | null {
  const principal = propertyValue - deposit;
  if (principal <= 0 || termYears <= 0 || annualRate <= 0) return null;

  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = termYears * 12;
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
  const totalCost = monthlyPayment * totalPayments;
  const totalInterest = totalCost - principal;
  const ltv = ((principal / propertyValue) * 100).toFixed(0);

  return { monthlyPayment, totalCost, totalInterest, ltv, principal };
}

export interface AffordabilityResult {
  totalIncome: number;
  lowMultiple: number;
  highMultiple: number;
  lowBudget: number;
  highBudget: number;
}

export function calculateAffordability(
  income1: number,
  income2: number,
  deposit: number
): AffordabilityResult {
  const totalIncome = income1 + income2;
  const lowMultiple = totalIncome * 4;
  const highMultiple = totalIncome * 4.5;
  const lowBudget = lowMultiple + deposit;
  const highBudget = highMultiple + deposit;

  return { totalIncome, lowMultiple, highMultiple, lowBudget, highBudget };
}

export interface StampDutyResult {
  tax: number;
  effectiveRate: number;
  breakdown: Array<{ band: string; amount: number }>;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function calculateStampDuty(
  price: number,
  buyerType: BuyerType
): StampDutyResult {
  const bands = [
    { threshold: 250000, rate: 0 },
    { threshold: 925000, rate: 0.05 },
    { threshold: 1500000, rate: 0.1 },
    { threshold: Infinity, rate: 0.12 },
  ];

  if (buyerType === "ftb" && price <= 625000) {
    bands[0].threshold = 425000;
  }

  let tax = 0;
  let remaining = price;
  let prevThreshold = 0;
  const breakdown: Array<{ band: string; amount: number }> = [];

  for (const band of bands) {
    const bandWidth = Math.min(remaining, band.threshold - prevThreshold);
    if (bandWidth <= 0) break;
    const amount = bandWidth * band.rate;
    tax += amount;
    remaining -= bandWidth;
    breakdown.push({
      band: `${formatCurrency(prevThreshold)} – ${formatCurrency(band.threshold === Infinity ? price : band.threshold)}: ${(band.rate * 100).toFixed(0)}%`,
      amount,
    });
    prevThreshold = band.threshold;
  }

  if (buyerType === "additional") {
    const surcharge = price * 0.05;
    tax += surcharge;
    breakdown.push({
      band: "Additional property surcharge: 5%",
      amount: surcharge,
    });
  }

  if (buyerType === "non-uk") {
    const surcharge = price * 0.02;
    tax += surcharge;
    breakdown.push({
      band: "Non-UK resident surcharge: 2%",
      amount: surcharge,
    });
  }

  const effectiveRate = price > 0 ? (tax / price) * 100 : 0;
  return { tax, effectiveRate, breakdown };
}

export interface RiskRealityResult {
  unableToWork: number;
  seriousIllness: number;
  death: number;
  combined: number;
}

export function calculateRiskReality(
  age: number,
  retirementAge: number,
  gender: "male" | "female",
  smoker: boolean
): RiskRealityResult {
  const yearsToRetirement = Math.max(retirementAge - age, 1);

  const baseRisks = {
    unableToWork: gender === "male" ? 0.33 : 0.28,
    seriousIllness: gender === "male" ? 0.25 : 0.22,
    death: gender === "male" ? 0.08 : 0.05,
  };

  const ageFactor = 1 + (age - 30) * 0.02;
  const smokerFactor = smoker ? 1.5 : 1;
  const termFactor = yearsToRetirement / 30;

  const unableToWork = Math.min(
    baseRisks.unableToWork * ageFactor * smokerFactor * termFactor,
    0.95
  );
  const seriousIllness = Math.min(
    baseRisks.seriousIllness * ageFactor * smokerFactor * termFactor,
    0.9
  );
  const death = Math.min(
    baseRisks.death * ageFactor * smokerFactor * termFactor,
    0.5
  );
  const combined = Math.min(
    1 - (1 - unableToWork) * (1 - seriousIllness) * (1 - death),
    0.98
  );

  return { unableToWork, seriousIllness, death, combined };
}
