import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Applicant Mortgage Brokers",
  description:
    "Get in touch with Applicant Mortgage Brokers. Book a free consultation, call, email, or fill in our contact form. Based in High Wycombe.",
};

export default function Contact() {
  return (
    <main>
      <HeroSection
        heading={
          <>
            Get in <em className="not-italic text-gold">Touch</em>
          </>
        }
        subtext="Book a free, no-obligation consultation — or just ask a question. We're here to help."
      />

      <section className="bg-off-white px-6 lg:px-12 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10">
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Send an Enquiry
            </h2>
            <p className="text-white/60 text-sm mb-8">
              We'll get back to you within a few hours during business hours.
            </p>
            <EnquiryForm />
          </div>

          {/* Booking + Info */}
          <div className="space-y-8">
            {/* Calendly placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <h2 className="font-display text-2xl font-bold text-navy mb-2">
                Book a Time
              </h2>
              <p className="text-slate text-sm mb-6">
                Choose a slot that works for you — we offer face-to-face and
                phone consultations.
              </p>
              <div className="bg-off-white rounded-xl min-h-[300px] flex items-center justify-center text-slate text-sm">
                Calendly embed placeholder
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <h3 className="font-bold text-navy text-lg mb-4">
                Contact Details
              </h3>
              <div className="space-y-3 text-sm text-slate">
                <p>
                  <strong className="text-navy">Phone:</strong>{" "}
                  <a href="tel:01494211194" className="hover:text-gold transition-colors">
                    01494 211194
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Email:</strong>{" "}
                  <a href="mailto:info@applicantmortgage.co.uk" className="hover:text-gold transition-colors">
                    info@applicantmortgage.co.uk
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Location:</strong> High Wycombe, Buckinghamshire
                </p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate">
                <p><strong className="text-navy">Monday – Friday:</strong> 9am – 6pm</p>
                <p><strong className="text-navy">Saturday:</strong> 10am – 3pm</p>
                <p><strong className="text-navy">Evenings:</strong> By appointment only</p>
                <p><strong className="text-navy">Sunday:</strong> Closed</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
