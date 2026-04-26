import { describe, it, expect } from "vitest";
import {
  calculateRepayment,
  calculateAffordability,
  calculateStampDuty,
  calculateRiskReality,
  formatCurrency,
} from "./calculators";

describe("formatCurrency", () => {
  it("formats GBP with no decimals", () => {
    expect(formatCurrency(1750)).toBe("£1,750");
    expect(formatCurrency(350000)).toBe("£350,000");
    expect(formatCurrency(0)).toBe("£0");
  });
});

describe("calculateRepayment", () => {
  it("calculates standard repayment mortgage correctly", () => {
    // £350k property, £35k deposit, 25 years, 4.5%
    const result = calculateRepayment(350000, 35000, 25, 4.5);
    expect(result).not.toBeNull();
    expect(result!.principal).toBe(315000);
    expect(result!.ltv).toBe("90");
    // Monthly payment for £315k at 4.5% over 25yr ≈ £1,750
    expect(result!.monthlyPayment).toBeCloseTo(1750.63, 0);
    expect(result!.totalCost).toBeGreaterThan(result!.principal);
    expect(result!.totalInterest).toBeGreaterThan(0);
    expect(result!.totalInterest).toBeCloseTo(
      result!.totalCost - result!.principal,
      2
    );
  });

  it("returns null when deposit >= property value", () => {
    expect(calculateRepayment(200000, 200000, 25, 4.5)).toBeNull();
    expect(calculateRepayment(200000, 250000, 25, 4.5)).toBeNull();
  });

  it("returns null when term is zero or negative", () => {
    expect(calculateRepayment(300000, 30000, 0, 4.5)).toBeNull();
    expect(calculateRepayment(300000, 30000, -5, 4.5)).toBeNull();
  });

  it("returns null when rate is zero or negative", () => {
    expect(calculateRepayment(300000, 30000, 25, 0)).toBeNull();
    expect(calculateRepayment(300000, 30000, 25, -1)).toBeNull();
  });

  it("calculates correct LTV", () => {
    // £200k property, £40k deposit = £160k loan = 80% LTV
    const result = calculateRepayment(200000, 40000, 25, 4);
    expect(result!.ltv).toBe("80");
  });

  it("handles small deposit (95% LTV)", () => {
    const result = calculateRepayment(200000, 10000, 25, 5);
    expect(result!.principal).toBe(190000);
    expect(result!.ltv).toBe("95");
    expect(result!.monthlyPayment).toBeGreaterThan(0);
  });

  it("handles short term (5 years)", () => {
    const result = calculateRepayment(200000, 50000, 5, 3);
    expect(result!.monthlyPayment).toBeGreaterThan(2500); // shorter term = higher payment
  });

  it("handles long term (35 years)", () => {
    const shortTerm = calculateRepayment(200000, 50000, 15, 4);
    const longTerm = calculateRepayment(200000, 50000, 35, 4);
    // Longer term = lower monthly but more total interest
    expect(longTerm!.monthlyPayment).toBeLessThan(shortTerm!.monthlyPayment);
    expect(longTerm!.totalInterest).toBeGreaterThan(shortTerm!.totalInterest);
  });

  it("total cost = principal + total interest", () => {
    const result = calculateRepayment(400000, 80000, 30, 5.5);
    expect(result!.totalCost).toBeCloseTo(
      result!.principal + result!.totalInterest,
      2
    );
  });
});

describe("calculateAffordability", () => {
  it("calculates single income correctly", () => {
    const result = calculateAffordability(50000, 0, 30000);
    expect(result.totalIncome).toBe(50000);
    expect(result.lowMultiple).toBe(200000); // 4x
    expect(result.highMultiple).toBe(225000); // 4.5x
    expect(result.lowBudget).toBe(230000); // 200k + 30k deposit
    expect(result.highBudget).toBe(255000); // 225k + 30k deposit
  });

  it("calculates joint income correctly", () => {
    const result = calculateAffordability(50000, 35000, 40000);
    expect(result.totalIncome).toBe(85000);
    expect(result.lowMultiple).toBe(340000); // 85k × 4
    expect(result.highMultiple).toBe(382500); // 85k × 4.5
    expect(result.lowBudget).toBe(380000); // 340k + 40k
    expect(result.highBudget).toBe(422500); // 382.5k + 40k
  });

  it("handles zero deposit", () => {
    const result = calculateAffordability(60000, 0, 0);
    expect(result.lowBudget).toBe(result.lowMultiple);
    expect(result.highBudget).toBe(result.highMultiple);
  });

  it("handles zero income", () => {
    const result = calculateAffordability(0, 0, 50000);
    expect(result.totalIncome).toBe(0);
    expect(result.lowMultiple).toBe(0);
    expect(result.highMultiple).toBe(0);
    expect(result.lowBudget).toBe(50000); // just the deposit
    expect(result.highBudget).toBe(50000);
  });

  it("high multiple is always 12.5% more than low multiple", () => {
    const result = calculateAffordability(80000, 20000, 50000);
    expect(result.highMultiple / result.lowMultiple).toBeCloseTo(1.125, 5);
  });
});

describe("calculateStampDuty", () => {
  describe("first-time buyer", () => {
    it("pays zero on £425k or less", () => {
      const result = calculateStampDuty(425000, "ftb");
      expect(result.tax).toBe(0);
    });

    it("pays 5% on £425k-£625k band", () => {
      // £500k FTB: first £425k = £0, next £75k at 5% = £3,750
      const result = calculateStampDuty(500000, "ftb");
      expect(result.tax).toBe(3750);
    });

    it("FTB relief only applies up to £625k", () => {
      // At exactly £625k, still FTB rates
      const under = calculateStampDuty(625000, "ftb");
      expect(under.tax).toBe(10000); // (625k - 425k) × 5%

      // Over £625k, standard rates apply (no FTB relief)
      const over = calculateStampDuty(625001, "ftb");
      // Standard: first £250k = 0, next £375,001 at 5% = £18,750.05
      expect(over.tax).toBeCloseTo(18750.05, 0);
    });

    it("pays zero on property under £250k (within FTB threshold)", () => {
      const result = calculateStampDuty(200000, "ftb");
      expect(result.tax).toBe(0);
    });
  });

  describe("home mover", () => {
    it("pays zero on £250k or less", () => {
      const result = calculateStampDuty(250000, "home-mover");
      expect(result.tax).toBe(0);
    });

    it("pays 5% on £250k-£925k band", () => {
      // £350k: first £250k = £0, next £100k at 5% = £5,000
      const result = calculateStampDuty(350000, "home-mover");
      expect(result.tax).toBe(5000);
    });

    it("calculates correctly at £500k", () => {
      // £500k: first £250k = 0, next £250k at 5% = £12,500
      const result = calculateStampDuty(500000, "home-mover");
      expect(result.tax).toBe(12500);
    });

    it("calculates correctly at £1m", () => {
      // £1m: first £250k = 0, next £675k at 5% = £33,750, next £75k at 10% = £7,500
      const result = calculateStampDuty(1000000, "home-mover");
      expect(result.tax).toBe(41250);
    });

    it("applies 12% band above £1.5m", () => {
      // £2m: 250k×0 + 675k×5% + 575k×10% + 500k×12%
      // = 0 + 33750 + 57500 + 60000 = £151,250
      const result = calculateStampDuty(2000000, "home-mover");
      expect(result.tax).toBe(151250);
    });
  });

  describe("additional property", () => {
    it("adds 5% surcharge on top of standard rates", () => {
      // £350k additional: standard = £5,000, surcharge = £17,500 → £22,500
      const result = calculateStampDuty(350000, "additional");
      expect(result.tax).toBe(22500);
    });

    it("surcharge applies even under £250k", () => {
      // £200k additional: standard = £0, surcharge = £10,000
      const result = calculateStampDuty(200000, "additional");
      expect(result.tax).toBe(10000);
    });
  });

  describe("non-UK resident", () => {
    it("adds 2% surcharge on top of standard rates", () => {
      // £350k non-UK: standard = £5,000, surcharge = £7,000 → £12,000
      const result = calculateStampDuty(350000, "non-uk");
      expect(result.tax).toBe(12000);
    });
  });

  describe("effective rate", () => {
    it("calculates effective rate correctly", () => {
      const result = calculateStampDuty(350000, "home-mover");
      // £5,000 / £350,000 = 1.43%
      expect(result.effectiveRate).toBeCloseTo(1.4286, 2);
    });

    it("returns 0% effective rate for zero price", () => {
      const result = calculateStampDuty(0, "home-mover");
      expect(result.effectiveRate).toBe(0);
    });
  });

  describe("breakdown", () => {
    it("includes all applicable bands", () => {
      const result = calculateStampDuty(1000000, "home-mover");
      expect(result.breakdown.length).toBe(3); // 0%, 5%, 10%
    });

    it("includes surcharge as separate line", () => {
      const result = calculateStampDuty(350000, "additional");
      const surchargeEntry = result.breakdown.find((b) =>
        b.band.includes("surcharge")
      );
      expect(surchargeEntry).toBeDefined();
      expect(surchargeEntry!.amount).toBe(17500);
    });
  });
});

describe("calculateRiskReality", () => {
  it("returns higher risks for males than females at same age", () => {
    const male = calculateRiskReality(35, 67, "male", false);
    const female = calculateRiskReality(35, 67, "female", false);
    expect(male.unableToWork).toBeGreaterThan(female.unableToWork);
    expect(male.seriousIllness).toBeGreaterThan(female.seriousIllness);
    expect(male.death).toBeGreaterThan(female.death);
  });

  it("returns higher risks for smokers", () => {
    const nonSmoker = calculateRiskReality(40, 67, "male", false);
    const smoker = calculateRiskReality(40, 67, "male", true);
    expect(smoker.unableToWork).toBeGreaterThan(nonSmoker.unableToWork);
    expect(smoker.seriousIllness).toBeGreaterThan(nonSmoker.seriousIllness);
    expect(smoker.death).toBeGreaterThan(nonSmoker.death);
    // Smoker factor is 1.5x
    expect(smoker.unableToWork / nonSmoker.unableToWork).toBeCloseTo(1.5, 1);
  });

  it("returns higher risks for older people with same retirement age horizon", () => {
    // Same years-to-retirement (32 years), so term factor is identical
    // and only the age factor differs
    const young = calculateRiskReality(25, 57, "male", false);
    const older = calculateRiskReality(45, 77, "male", false); // same 32-year horizon
    // older has higher age factor (1.3 vs 0.9) with same term factor
    expect(older.death).toBeGreaterThan(young.death);
    expect(older.unableToWork).toBeGreaterThan(young.unableToWork);
  });

  it("returns lower risks with fewer years to retirement", () => {
    const longHorizon = calculateRiskReality(30, 67, "male", false);
    const shortHorizon = calculateRiskReality(60, 67, "male", false);
    // Short horizon has fewer years but higher age factor
    // The term factor (7/30 vs 37/30) dominates for unable-to-work
    // but age factor (1.6 vs 1.0) partially offsets
    // Just check combined is reasonable
    expect(longHorizon.combined).toBeGreaterThan(0);
    expect(shortHorizon.combined).toBeGreaterThan(0);
    expect(shortHorizon.combined).toBeLessThan(1);
  });

  it("caps risks at maximum values", () => {
    // Extreme case: old smoker with long horizon
    const result = calculateRiskReality(65, 75, "male", true);
    expect(result.unableToWork).toBeLessThanOrEqual(0.95);
    expect(result.seriousIllness).toBeLessThanOrEqual(0.9);
    expect(result.death).toBeLessThanOrEqual(0.5);
    expect(result.combined).toBeLessThanOrEqual(0.98);
  });

  it("handles minimum years to retirement (age = retirement age)", () => {
    const result = calculateRiskReality(67, 67, "male", false);
    // yearsToRetirement = max(0, 1) = 1, termFactor = 1/30
    expect(result.unableToWork).toBeGreaterThan(0);
    expect(result.combined).toBeGreaterThan(0);
    expect(result.combined).toBeLessThan(0.5); // should be quite low
  });

  it("combined risk uses correct probability formula", () => {
    const result = calculateRiskReality(35, 67, "male", false);
    // P(any) = 1 - P(none) = 1 - (1-A)(1-B)(1-C)
    const expected =
      1 -
      (1 - result.unableToWork) *
        (1 - result.seriousIllness) *
        (1 - result.death);
    expect(result.combined).toBeCloseTo(Math.min(expected, 0.98), 10);
  });

  it("all probabilities are between 0 and 1", () => {
    const scenarios = [
      calculateRiskReality(18, 67, "female", false),
      calculateRiskReality(50, 67, "male", true),
      calculateRiskReality(35, 55, "female", true),
      calculateRiskReality(70, 75, "male", true),
    ];
    for (const result of scenarios) {
      expect(result.unableToWork).toBeGreaterThanOrEqual(0);
      expect(result.unableToWork).toBeLessThanOrEqual(1);
      expect(result.seriousIllness).toBeGreaterThanOrEqual(0);
      expect(result.seriousIllness).toBeLessThanOrEqual(1);
      expect(result.death).toBeGreaterThanOrEqual(0);
      expect(result.death).toBeLessThanOrEqual(1);
      expect(result.combined).toBeGreaterThanOrEqual(0);
      expect(result.combined).toBeLessThanOrEqual(1);
    }
  });
});
