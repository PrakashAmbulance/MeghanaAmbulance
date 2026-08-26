import type { Metadata } from "next";
import Link from "next/link";
import { services, business } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata: Metadata = {
  title: "Ambulance Services in Bangalore",
  description:
    "Emergency, ICU, NICU, PICU, CCU ambulance, hospital transfer, long-distance and patient transportation services from Meghana Ambulance Service, Bangalore.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-14 text-white sm:py-20">
        <div className="container-page text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ambulance Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            {business.name} supports a range of ambulance transportation
            needs across Bangalore and long-distance journeys across India.
            Specialised categories are subject to vehicle and equipment
            availability &mdash; call{" "}
            <Link href="/contact" className="underline">
              our team
            </Link>{" "}
            to confirm before booking.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}
