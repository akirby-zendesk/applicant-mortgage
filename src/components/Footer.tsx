import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "First-Time Buyers", href: "/first-time-buyers" },
  { label: "Remortgage", href: "/remortgage" },
  { label: "Buy-to-Let", href: "/buy-to-let" },
  { label: "Protection", href: "/protection" },
];

const resourceLinks = [
  { label: "Blog & Guides", href: "/blog" },
  { label: "Client Stories", href: "/client-stories" },
  { label: "Repayment Calculator", href: "/calculators/repayment" },
  { label: "Stamp Duty Calculator", href: "/calculators/stamp-duty" },
  { label: "Risk Reality Calculator", href: "/calculators/risk-reality" },
  { label: "About Us", href: "/about" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/applicantmortgagebrokers" },
  { label: "Instagram", href: "https://www.instagram.com/applicantmortgagebrokers/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/applicantmortgagebrokers/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCC36IKX_Kil5xrTkpbKS2UQ" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t-[3px] border-gold pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/mainlogo_allwhite.png"
              alt="Applicant Mortgage Brokers"
              width={180}
              height={120}
              className="block mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Approachable and friendly mortgage advice, based in High Wycombe.
              Whole of market, fee-free, and always in your corner.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:01494211194"
                  className="text-white/50 text-sm hover:text-gold transition-colors"
                >
                  01494 211194
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@applicantmortgage.co.uk"
                  className="text-white/50 text-sm hover:text-gold transition-colors"
                >
                  info@applicantmortgage.co.uk
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/50 text-sm hover:text-gold transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6">
          <div className="inline-flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-md text-white/50 text-xs font-medium mb-3">
            <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            FCA Authorised Representative of HL Partnership Limited
          </div>
          <p className="text-white/35 text-xs leading-relaxed">
            Applicant Mortgage Brokers Limited. Registered Office: c/o Azets,
            Burnham Yard, London End, Beaconsfield, Bucks, HP9 2JH.
            <br />
            The guidance and/or advice contained within this website is subject
            to the UK regulatory regime and is therefore targeted at consumers
            based in the UK. The firm do not charge a fee for mortgage advice.
            <br />
            <br />
            THINK CAREFULLY BEFORE SECURING ANY OTHER DEBTS AGAINST YOUR HOME /
            PROPERTY. THE FINANCIAL CONDUCT AUTHORITY DOES NOT REGULATE SOME
            FORMS OF BUY TO LETS. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT
            KEEP UP TO DATE WITH YOUR MORTGAGE REPAYMENTS.
            <br />
            <br />
            &copy; {new Date().getFullYear()} Applicant Mortgage Brokers. All
            Rights Reserved. &middot;{" "}
            <Link
              href="/privacy-cookies-policy"
              className="text-white/50 hover:text-gold"
            >
              Privacy &amp; Cookies Policy
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/complaints-procedure"
              className="text-white/50 hover:text-gold"
            >
              Complaints Procedure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
