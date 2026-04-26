"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { EnquiryForm } from "./EnquiryForm";

export function FloatingEnquiry() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const submitted = localStorage.getItem("enquiry_submitted");
    if (submitted) {
      const ts = parseInt(submitted, 10);
      if (Date.now() - ts < 24 * 60 * 60 * 1000) {
        setDismissed(true);
      }
    }
  }, []);

  if (pathname === "/contact" || dismissed) return null;

  function handleSuccess() {
    localStorage.setItem("enquiry_submitted", String(Date.now()));
    setTimeout(() => {
      setOpen(false);
      setDismissed(true);
    }, 3000);
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gold text-navy-deep px-5 py-3 rounded-full font-semibold text-sm shadow-[0_4px_20px_rgba(197,165,90,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,165,90,0.5)] transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Enquire Now
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center">
          <div
            className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full lg:max-w-[420px] bg-navy rounded-t-2xl lg:rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              aria-label="Close"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z" />
              </svg>
            </button>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Quick Enquiry
            </h3>
            <p className="text-white/60 text-sm mb-6">
              30 seconds. Dan will call you back.
            </p>
            <EnquiryForm compact onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </>
  );
}
