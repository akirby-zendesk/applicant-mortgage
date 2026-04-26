"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  {
    label: "Mortgages",
    href: "/first-time-buyers",
    children: [
      { label: "First-Time Buyers", href: "/first-time-buyers" },
      { label: "Home Movers", href: "/home-movers" },
      { label: "Remortgage", href: "/remortgage" },
      { label: "Buy-to-Let", href: "/buy-to-let" },
    ],
  },
  { label: "Protection", href: "/protection" },
  {
    label: "Who We Help",
    href: "/self-employed",
    children: [
      { label: "Employed", href: "/employed" },
      { label: "Self-Employed", href: "/self-employed" },
      { label: "Sole Traders", href: "/sole-traders" },
      { label: "CIS Workers", href: "/cis-workers" },
      { label: "Contractors", href: "/contractors" },
      { label: "Ltd Company Directors", href: "/limited-company-directors" },
    ],
  },
  {
    label: "Calculators",
    href: "/calculators",
    children: [
      { label: "Repayment", href: "/calculators/repayment" },
      { label: "Affordability", href: "/calculators/affordability" },
      { label: "Stamp Duty", href: "/calculators/stamp-duty" },
      { label: "Risk Reality", href: "/calculators/risk-reality" },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    children: [
      { label: "Blog & Guides", href: "/blog" },
      { label: "Client Stories", href: "/client-stories" },
    ],
  },
  { label: "About", href: "/about" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="text-white/80 text-sm font-medium hover:text-gold transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-white/80 text-sm font-medium hover:text-gold transition-colors"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      {open && (
        <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[220px]">
          <div className="bg-navy-deep rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)] py-2">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-white/70 text-sm hover:text-gold hover:bg-white/5 transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      )}
    </li>
  );
}

function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block px-4 py-3 text-white/80 text-base font-medium hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-white/80 text-base font-medium hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <ul className="pl-4 pb-1">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block px-4 py-2.5 text-white/60 text-sm hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-deep sticky top-0 z-50 px-6 lg:px-12">
      <div className="flex items-center justify-between h-20 max-w-[1400px] mx-auto">
        <Link href="/" className="flex items-center shrink-0">
          <div className="bg-white rounded-md px-2.5 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            <Image
              src="/applicant_logo_transparent.png"
              alt="Applicant Mortgage Brokers"
              width={110}
              height={44}
              priority
              className="block"
            />
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <DesktopDropdown key={link.label} item={link} />
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:01494211194"
            className="flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4 fill-gold" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            01494 211194
          </a>
          <Link
            href="/contact"
            className="bg-gold text-navy-deep px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:01494211194" className="text-gold">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z" />
              ) : (
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <MobileAccordion
                key={link.label}
                item={link}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </ul>
          <div className="px-4 pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-gold text-navy-deep px-6 py-3 rounded-md text-sm font-semibold"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
