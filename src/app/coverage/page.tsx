import type { Metadata } from "next";
import CoverageSection from "@/components/CoverageSection";
import ContactTeaser from "@/components/ContactTeaser";
import { business, serviceAreas } from "@/lib/business";

export const metadata: Metadata = {
  title: "Ambulance Coverage Bangalore",
  description:
    "Meghana Lifecare Ambulance Service covers 20 areas across Bangalore — RR Nagar, Jayanagar, Koramangala, Whitefield & more. 24/7 emergency, ICU & long-distance ambulance.",
  keywords: [
    "ambulance coverage Bangalore",
    "ambulance service areas Bangalore",
    ...serviceAreas.map((a) => `ambulance ${a.name}`),
    "24/7 ambulance Bangalore",
    "ambulance near me Bangalore",
  ],
  alternates: { canonical: "/coverage" },
  openGraph: {
    title: "Ambulance Service Coverage — 20 Areas Across Bangalore",
    description: `Meghana Lifecare Ambulance Service covers ${serviceAreas.length} areas across Bangalore including ${serviceAreas.slice(0, 5).map((a) => a.name).join(", ")} and more. Available 24/7.`,
  },
};

const coverageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ambulance Service Coverage Areas in Bangalore",
  description: `Meghana Lifecare Ambulance Service covers ${serviceAreas.length} areas across Bangalore. Available 24 hours a day, 7 days a week.`,
  url: `${business.siteUrl}/coverage`,
  about: {
    "@type": "MedicalBusiness",
    name: business.name,
    telephone: business.phoneIntl,
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area.name}, Bangalore, Karnataka, India`,
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
      { "@type": "ListItem", position: 2, name: "Coverage", item: `${business.siteUrl}/coverage` },
    ],
  },
};

export default function CoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coverageJsonLd) }}
      />
      <section className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-page text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ambulance Coverage in Bangalore
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            We cover {serviceAreas.length} areas across West, North, South, and East Bangalore —
            plus long-distance ambulance journeys across India. Available 24/7.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={`tel:+91${business.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-emergency-600/30 transition-transform hover:-translate-y-0.5"
            >
              Call {business.phoneDisplay}
            </a>
            <a
              href={`tel:+91${business.secondaryPhone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 font-bold text-white backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              {business.secondaryPhoneDisplay}
            </a>
          </div>
        </div>
      </section>
      <CoverageSection />
      <ContactTeaser />
    </>
  );
}
