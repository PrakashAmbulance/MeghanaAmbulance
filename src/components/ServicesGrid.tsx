import { services, serviceAreas } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 border-b border-black/5 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              One Call. Every Kind of Ambulance Support.
            </h2>
            <p className="mt-3 text-ink-500">
              From a sudden emergency to a planned hospital transfer, our team
              coordinates the right vehicle and staff for the situation.
              Specialised categories are subject to vehicle and equipment
              availability &mdash; please call to confirm before booking.
            </p>
          </div>
          <div className="flex shrink-0 gap-6 lg:gap-8">
            <div>
              <p className="text-2xl font-extrabold text-navy-900">{services.length}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Categories
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy-900">{serviceAreas.length}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Areas Covered
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy-900">24/7</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Availability
              </p>
            </div>
          </div>
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
