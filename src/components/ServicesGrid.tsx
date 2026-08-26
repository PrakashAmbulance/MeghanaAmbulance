import { services } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Ambulance Services
          </h2>
          <p className="mt-3 text-ink-500">
            Ambulance transportation support across categories, coordinated by
            experienced drivers and staff. Specialised categories are subject
            to vehicle and equipment availability &mdash; please call to
            confirm before booking.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
