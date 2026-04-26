import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints Procedure | Applicant Mortgage Brokers",
  description: "Customer complaints procedure for Applicant Mortgage Brokers.",
};

export default function ComplaintsProcedure() {
  return (
    <main>
      <section className="bg-gradient-to-br from-navy-deep to-navy px-6 lg:px-12 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          Complaints Procedure
        </h1>
      </section>
      <section className="bg-white px-6 lg:px-12 py-16">
        <div className="max-w-[700px] mx-auto text-slate leading-[1.7]">
          <p>
            At Applicant Mortgage Brokers, we aim to provide an excellent service
            at all times. If you are unhappy with any aspect of our service, please
            let us know.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            How to complain
          </h2>
          <p>
            You can make a complaint by writing to us at our registered office, by
            emailing{" "}
            <a href="mailto:info@applicantmortgage.co.uk" className="text-gold">
              info@applicantmortgage.co.uk
            </a>
            , or by calling{" "}
            <a href="tel:01494211194" className="text-gold">
              01494 211194
            </a>
            .
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            What happens next
          </h2>
          <p>
            We will acknowledge your complaint within 5 business days and aim to
            resolve it within 8 weeks. If we cannot resolve your complaint to your
            satisfaction, you may be able to refer it to the Financial Ombudsman
            Service.
          </p>
          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4">
            Financial Ombudsman Service
          </h2>
          <p>
            The Financial Ombudsman Service, Exchange Tower, London E14 9SR.
            <br />
            Phone: 0800 023 4567
            <br />
            Website: financial-ombudsman.org.uk
          </p>
        </div>
      </section>
    </main>
  );
}
