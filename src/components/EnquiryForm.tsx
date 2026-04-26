"use client";

import { useState } from "react";

interface EnquiryFormProps {
  compact?: boolean;
  onSuccess?: () => void;
}

export function EnquiryForm({ compact = false, onSuccess }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
      if (onSuccess) onSuccess();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-semibold text-white mb-2">
          Thanks — Dan will be in touch shortly
        </p>
        <p className="text-white/60 text-sm">
          Usually within a few hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
          Phone
        </label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
          placeholder="07xxx xxxxxx"
        />
      </div>
      {!compact && (
        <div>
          <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
            Message (optional)
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm resize-none focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(197,165,90,0.15)]"
            placeholder="How can Dan help?"
          />
        </div>
      )}
      <label className="flex items-start gap-2 text-white/50 text-xs cursor-pointer">
        <input
          type="checkbox"
          required
          className="mt-0.5 accent-gold"
        />
        I am happy for Applicant Mortgage Brokers to contact me by email or telephone.
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold text-navy-deep py-3.5 rounded-lg font-semibold text-sm hover:bg-[#D4B76A] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
      {status === "error" && (
        <p className="text-alert text-xs text-center">
          Something went wrong. Please try calling 01494 211194.
        </p>
      )}
    </form>
  );
}
