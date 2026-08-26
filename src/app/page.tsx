import type { Metadata } from "next";
import Hero from "@/components/Hero";
import EmergencyCTA from "@/components/EmergencyCTA";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import B2CSection from "@/components/B2CSection";
import B2BSection from "@/components/B2BSection";
import AmbulanceGallery from "@/components/AmbulanceGallery";
import CoverageSection from "@/components/CoverageSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import ContactTeaser from "@/components/ContactTeaser";
import { business, faqs } from "@/lib/business";

export const metadata: Metadata = {
  title: `${business.name} | 24/7 Ambulance Service in Bangalore`,
  description: business.shortDescription,
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <EmergencyCTA />
      <ServicesGrid />
      <AboutSection />
      <B2CSection />
      <B2BSection />
      <AmbulanceGallery compact />
      <CoverageSection compact />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <ContactTeaser />
    </>
  );
}
