import { business, serviceAreas, services } from "@/lib/business";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: business.name,
    url: business.siteUrl,
    logo: `${business.siteUrl}${business.logoPath}`,
    image: [
      `${business.siteUrl}/images/gallery/ambulance-front-view-bangalore.jpg`,
      `${business.siteUrl}/images/gallery/ambulance-interior-medical-equipment.jpg`,
      `${business.siteUrl}/images/gallery/ambulance-rear-view-bangalore.jpg`,
    ],
    telephone: business.phoneIntl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Bangalore", sameAs: "https://en.wikipedia.org/wiki/Bangalore" },
      ...serviceAreas.map((area) => ({
        "@type": "Place",
        name: `${area.name}, Bangalore`,
      })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: business.countryCode,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ambulance Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: s.name,
          description: s.summary,
          url: `${business.siteUrl}/services/${s.slug}`,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phoneIntl,
        contactType: "emergency",
        areaServed: "IN",
        availableLanguage: ["en", "kn"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: business.secondaryPhoneIntl,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "kn"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
