import jsPDF from "jspdf";
import type { RiskRealityResult } from "./calculators";
import { LOGO_DATA_URL } from "./logoData";

interface PdfInput {
  name: string;
  age: number;
  retirementAge: number;
  gender: "male" | "female";
  smoker: boolean;
  risks: RiskRealityResult;
}

const NAVY = "#1B2A4A";
const NAVY_DEEP = "#0F1D35";
const GOLD = "#C5A55A";
const SLATE = "#64748b";
const LIGHT_BG = "#F5F3EF";
const WHITE = "#FFFFFF";

function drawRoofAccent(doc: jsPDF, cx: number, cy: number, size: number, color: string) {
  doc.setDrawColor(color);
  doc.setLineWidth(size * 0.12);
  doc.line(cx - size, cy + size * 0.5, cx, cy - size * 0.5);
  doc.line(cx, cy - size * 0.5, cx + size, cy + size * 0.5);
}

export function generateRiskPdf(input: PdfInput) {
  const { name, age, retirementAge, gender, smoker, risks } = input;
  const yearsToRetirement = Math.max(retirementAge - age, 1);
  const displayName = name || "Your";
  const possessive = name ? `${name}'s` : "Your";
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const margin = 20;
  const contentW = pageW - margin * 2;
  let y = 0;

  function addFooter(pageNum: number) {
    doc.setFontSize(7);
    doc.setTextColor(SLATE);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Applicant Mortgage Brokers Limited is an appointed representative of HL Partnership Limited, which is authorised and regulated by the Financial Conduct Authority.",
      margin,
      280,
      { maxWidth: contentW }
    );
    doc.text(`Page ${pageNum}`, pageW - margin, 290, { align: "right" });
    doc.setDrawColor(GOLD);
    doc.setLineWidth(0.5);
    doc.line(margin, 277, pageW - margin, 277);
  }

  // ── PAGE 1: Cover + Summary ──

  doc.setFillColor(NAVY_DEEP);
  doc.rect(0, 0, pageW, 70, "F");

  doc.addImage(LOGO_DATA_URL, "PNG", margin, 8, 50, 20);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(WHITE);
  doc.text(`Results for ${displayName}`, margin, 42);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(GOLD);
  doc.text(
    `${possessive} Risk Reality — what life might have in store before age ${retirementAge}.`,
    margin,
    42
  );

  doc.setFillColor(LIGHT_BG);
  doc.roundedRect(pageW - 70, 48, 50, 20, 2, 2, "F");
  doc.setFontSize(8);
  doc.setTextColor(NAVY);
  doc.setFont("helvetica", "bold");
  doc.text(`${possessive} details:`, pageW - 45, 54, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(
    `Age ${age} · ${gender === "male" ? "Male" : "Female"} · ${smoker ? "Smoker" : "Non-smoker"}`,
    pageW - 45,
    60,
    { align: "center" }
  );
  doc.text(`Retirement age: ${retirementAge}`, pageW - 45, 65, { align: "center" });

  y = 80;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(SLATE);
  doc.text(
    "The results below use population and industry statistics to estimate the likelihood of certain events happening before your chosen retirement age. These are statistical probabilities, not predictions — everyone is different, which is why we always recommend speaking to a qualified adviser.",
    margin,
    y,
    { maxWidth: contentW }
  );

  y = 105;

  const summaryCards: { label: string; value: number; desc: string }[] = [
    {
      label: "Unable to work for 2+ months",
      value: risks.unableToWork,
      desc: `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.unableToWork * 100)} will be unable to work for an extended period before retirement.`,
    },
    {
      label: "Serious illness diagnosis",
      value: risks.seriousIllness,
      desc: `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.seriousIllness * 100)} will be diagnosed with a serious illness such as cancer, heart attack, or stroke.`,
    },
    {
      label: "Death before retirement",
      value: risks.death,
      desc: `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.death * 100)} will pass away before reaching their retirement age.`,
    },
    {
      label: "Likelihood of any of these events",
      value: risks.combined,
      desc: `There is a ${Math.round(risks.combined * 100)}% chance that at least one of the above will happen before retirement — roughly 1 in ${Math.max(Math.round(1 / risks.combined), 2)}.`,
    },
  ];

  for (const card of summaryCards) {
    doc.setFillColor(LIGHT_BG);
    doc.roundedRect(margin, y, contentW, 28, 2, 2, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(NAVY);
    doc.text(`${Math.round(card.value * 100)}%`, margin + 6, y + 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(NAVY);
    doc.text(card.label, margin + 35, y + 9);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(SLATE);
    doc.text(card.desc, margin + 35, y + 15, { maxWidth: contentW - 42 });

    y += 34;
  }

  addFooter(1);

  // ── PAGE 2: Detailed sections for inability to work + serious illness ──

  doc.addPage();
  y = 20;

  function sectionBlock(
    title: string,
    pct: number,
    realTerms: string,
    cope: string,
    plan: string
  ) {
    if (y > 220) {
      addFooter(doc.getNumberOfPages());
      doc.addPage();
      y = 20;
    }

    doc.setFillColor(LIGHT_BG);
    doc.roundedRect(margin, y, contentW, 14, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(NAVY);
    doc.text(`${Math.round(pct)}%`, margin + 6, y + 10);
    doc.setFontSize(11);
    doc.text(title, margin + 30, y + 10);
    y += 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(NAVY);
    doc.text("Results in real terms", margin, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(SLATE);
    const rtLines = doc.splitTextToSize(realTerms, contentW);
    doc.text(rtLines, margin, y);
    y += rtLines.length * 4.5 + 6;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(NAVY);
    doc.text("How would you cope financially?", margin, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(SLATE);
    const copeLines = doc.splitTextToSize(cope, contentW);
    doc.text(copeLines, margin, y);
    y += copeLines.length * 4.5 + 6;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(NAVY);
    doc.text("Your back-up plan", margin, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(SLATE);
    const planLines = doc.splitTextToSize(plan, contentW);
    doc.text(planLines, margin, y);
    y += planLines.length * 4.5 + 10;
  }

  sectionBlock(
    "Chances of being unable to work",
    risks.unableToWork * 100,
    `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.unableToWork * 100)} will be unable to work for two months or more before reaching retirement age, based on population and industry statistics.`,
    "The average income protection claim lasts nearly six years. That is a significant period with no regular income. Even if you qualify for state benefits, they are unlikely to cover your mortgage payments, household bills, and everyday living expenses. Most people underestimate how quickly savings run out when there is no income coming in.",
    "Income protection pays you a regular, tax-free monthly income if you are unable to work due to illness or injury. Unlike savings, it does not run out — it continues paying until you recover, or until your policy term ends. It is designed to replace a proportion of your salary so you can continue to meet your financial commitments."
  );

  sectionBlock(
    "Chances of a serious illness",
    risks.seriousIllness * 100,
    `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.seriousIllness * 100)} will be diagnosed with a serious illness — such as cancer, heart attack, or stroke — before reaching retirement.`,
    "A serious diagnosis affects far more than your health. Even if you eventually return to work, the recovery period can last months or years. You may wish to reduce your working hours, access private treatment, adapt your home, or simply take the time you need without financial pressure. The emotional burden is hard enough without worrying about money.",
    "Critical illness cover pays a one-off, tax-free lump sum on diagnosis of a defined serious condition. It gives you choices — whether that is clearing your mortgage, funding specialist treatment, covering care costs, or buying time to focus on recovery without worrying about the bills."
  );

  addFooter(doc.getNumberOfPages());

  // ── PAGE 3: Death + Combined + Overall ──

  doc.addPage();
  y = 20;

  sectionBlock(
    "Chances of death before retirement",
    risks.death * 100,
    `For every 100 people like ${displayName.toLowerCase() === "your" ? "you" : displayName}, ${Math.round(risks.death * 100)} will pass away before their chosen retirement age, based on published mortality data.`,
    "If your family depends on your income, the financial impact would be immediate and lasting. The mortgage, household bills, childcare costs, and everyday expenses do not stop. Without adequate provision, your family could face the loss of their home on top of everything else.",
    "Life insurance pays a lump sum or regular income to your dependants if you die during the policy term. It is one of the most affordable forms of protection and can be arranged to cover your outstanding mortgage, provide for your children's education, or replace your income for a set number of years."
  );

  sectionBlock(
    "Combined likelihood",
    risks.combined * 100,
    `When you consider all three risks together, there is a ${Math.round(risks.combined * 100)}% probability that at least one of these events will affect ${displayName.toLowerCase() === "your" ? "you" : displayName} before retirement. That is approximately 1 in ${Math.max(Math.round(1 / risks.combined), 2)}.`,
    "Most people insure their car, their phone, and their holiday — but not their ability to earn an income. When you consider the combined odds, the question is not whether you can afford protection, but whether you can afford to be without it.",
    "A tailored protection plan combines income protection, critical illness cover, and life insurance to ensure you and your family are covered whatever happens. We help you find the right balance of cover and cost, so you are not paying for more than you need — or, crucially, less."
  );

  addFooter(doc.getNumberOfPages());

  // ── PAGE 4: Methodology + Disclaimers ──

  doc.addPage();
  y = 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(NAVY);
  doc.text("How the Risk Reality Calculator works", margin, y);
  y += 12;

  const methodSections = [
    {
      heading: "Inability to work",
      body: "These probabilities are based on our interpretation of published industry statistics, combined with data from income protection claims experience. The calculation assumes a two-month waiting period and a typical occupation. Individual risk will vary based on your specific job, health, and lifestyle.",
    },
    {
      heading: "Serious illness",
      body: "These probabilities are derived from critical illness incidence rates published by the Institute and Faculty of Actuaries Continuous Mortality Investigation. The rates have been adjusted to reflect the general population, including people who do not currently hold insurance policies.",
    },
    {
      heading: "Death",
      body: "Mortality probabilities are based on published life tables from the Institute and Faculty of Actuaries Continuous Mortality Investigation. These tables are projected to reflect current mortality trends and are applied to the general population.",
    },
    {
      heading: "Combined results",
      body: "The combined figure represents the probability that at least one of the three events described above will occur before your chosen retirement age. It assumes that the three events are statistically independent of each other.",
    },
  ];

  for (const s of methodSections) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(NAVY);
    doc.text(s.heading, margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(SLATE);
    const lines = doc.splitTextToSize(s.body, contentW);
    doc.text(lines, margin, y);
    y += lines.length * 4.5 + 8;
  }

  y += 5;
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageW - margin, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(NAVY);
  doc.text("Important information", margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(SLATE);
  const disclaimers = [
    "This report is produced by the Risk Reality Calculator provided by Applicant Mortgage Brokers and is intended for general information purposes only. It does not constitute financial advice.",
    "The statistics used are based on a large number of people and give a reasonable guide to the average likelihood of the described events occurring. However, every individual is unique, and actual outcomes will vary based on personal health, lifestyle, occupation, and other factors.",
    "The results should be used as a starting point for conversation with a qualified financial adviser, not as a basis for making financial decisions in isolation.",
    `This report was generated on ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} for ${displayName}, age ${age}, ${gender === "male" ? "male" : "female"}, ${smoker ? "smoker" : "non-smoker"}, with a planned retirement age of ${retirementAge}.`,
    "YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.",
    "The Financial Conduct Authority does not regulate some forms of buy-to-let mortgages.",
  ];

  for (const d of disclaimers) {
    const dLines = doc.splitTextToSize(`• ${d}`, contentW);
    doc.text(dLines, margin, y);
    y += dLines.length * 4 + 3;
  }

  y += 5;
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageW - margin, y);
  y += 8;

  doc.addImage(LOGO_DATA_URL, "PNG", margin, y, 45, 18);
  y += 22;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(SLATE);
  doc.text("01494 211194  |  info@applicantmortgage.co.uk  |  applicantmortgage.co.uk", margin, y);
  y += 5;
  doc.text(
    "Applicant Mortgage Brokers Limited is an appointed representative of HL Partnership Limited, which is authorised and regulated by the Financial Conduct Authority.",
    margin,
    y,
    { maxWidth: contentW }
  );
  y += 10;
  doc.text(
    "Registered Office: c/o Azets, Burnham Yard, London End, Beaconsfield, Bucks, HP9 2JH.",
    margin,
    y,
    { maxWidth: contentW }
  );

  addFooter(doc.getNumberOfPages());

  const filename = `risk-reality-${(name || "results").toLowerCase().replace(/\s+/g, "-")}.pdf`;
  doc.save(filename);
}
