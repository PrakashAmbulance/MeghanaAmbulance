import type { Metadata } from "next";
import Link from "next/link";
import { services, business } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import ContactTeaser from "@/components/ContactTeaser";
import { AmbulanceIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Ambulance Services in Bangalore",
  description:
    "Emergency, ICU, NICU, PICU, CCU ambulance, hospital transfer, long-distance and patient transportation services from Meghana Ambulance Service, Bangalore.",
  keywords: [
    "ambulance services Bangalore",
    "types of ambulance service Bangalore",
    "emergency ambulance Bangalore",
    "ICU ambulance Bangalore",
    "NICU ambulance Bangalore",
    "PICU ambulance Bangalore",
    "CCU ambulance Bangalore",
    "hospital transfer ambulance Bangalore",
    "long distance ambulance service Bangalore",
    "patient transportation service Bangalore",
    "ambulance near me",
    "book ambulance online Bangalore",
  ],
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-10 text-white sm:py-20">
        <AmbulanceIcon
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -bottom-12 hidden h-64 w-64 text-white/[.05] sm:block lg:h-80 lg:w-80"
        />
        <div className="container-page relative text-center">
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
      <div className="hazard-stripes h-2" aria-hidden="true" />

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
