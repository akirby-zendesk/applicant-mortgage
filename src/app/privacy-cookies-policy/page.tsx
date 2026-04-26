import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Cookies Policy | Applicant Mortgage Brokers",
  description: "Privacy and cookies policy for Applicant Mortgage Brokers.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          Privacy &amp; Cookies Policy
        </h1>
      </section>
      <section className="bg-white px-6 lg:px-12 py-16">
        <div className="max-w-[700px] mx-auto text-slate leading-[1.7]">
          <p>
            Applicant Mortgage Brokers Limited trading as Applicant Mortgage Brokers
            is committed to protecting and respecting your privacy.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            What information do we collect?
          </h2>
          <p>
            We collect information when you fill in a contact form on our website,
            including your name, email address, and telephone number. We also
            collect information automatically about your visit to our website using
            cookies.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            How do we use this information?
          </h2>
          <p>
            We use the information to respond to your enquiry, to provide mortgage
            advice services, and to improve our website. We do not send marketing
            material.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            Cookies
          </h2>
          <p>
            Our website uses cookies to distinguish you from other users. This helps
            us provide you with a good experience and allows us to improve our site.
            We use Google Analytics to understand how visitors interact with our
            website.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            Your rights
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion of
            your personal data. Contact us at{" "}
            <a href="mailto:info@applicantmortgage.co.uk" className="text-gold">
              info@applicantmortgage.co.uk
            </a>{" "}
            to exercise these rights.
          </p>
        </div>
      </section>
    </main>
  );
}
