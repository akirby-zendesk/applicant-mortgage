import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingEnquiry } from "@/components/FloatingEnquiry";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applicant Mortgage Brokers | Expert Mortgage Advice in High Wycombe",
  description:
    "Approachable, whole-of-market mortgage advice based in High Wycombe. Fee-free, FCA regulated. First-time buyers, remortgage, buy-to-let, and protection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Applicant Mortgage Brokers",
              description:
                "Whole-of-market mortgage advice based in High Wycombe. Fee-free, FCA regulated.",
              url: "https://applicantmortgage.co.uk",
              telephone: "01494211194",
              email: "info@applicantmortgage.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "c/o Azets, Burnham Yard, London End",
                addressLocality: "Beaconsfield",
                addressRegion: "Buckinghamshire",
                postalCode: "HP9 2JH",
                addressCountry: "GB",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <FloatingEnquiry />
      </body>
    </html>
  );
}
