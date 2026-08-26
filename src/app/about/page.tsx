import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactTeaser from "@/components/ContactTeaser";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${business.name} — ambulance transportation support across Bangalore and long-distance journeys across India.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-page text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h1>
        </div>
      </section>
      <AboutSection />
      <WhyChooseUs />
      <ContactTeaser />
    </>
  );
}
