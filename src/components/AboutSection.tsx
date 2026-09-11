import Link from "next/link";
import Image from "@/components/StaticImage";
import { services, serviceAreas, business } from "@/lib/business";
import { ClockIcon, MapPinIcon, AmbulanceIcon, ArrowRightIcon } from "@/components/icons";

const stats = [
  { icon: ClockIcon, value: business.availability, label: "Availability" },
  { icon: MapPinIcon, value: `${serviceAreas.length}`, label: "Areas Covered" },
  { icon: AmbulanceIcon, value: `${services.length}`, label: "Service Categories" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-black/5 bg-navy-900 shadow-sm">
            <Image
              src="/images/gallery/ambulance-hospital-transfer-bangalore.jpg"
              alt="Meghana Lifecare Ambulance Service ambulance at hospital — hospital transfer Bangalore"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-xs font-bold text-white shadow-lg sm:-bottom-5 sm:left-6 sm:text-sm">
            <ClockIcon className="h-4 w-4 text-medblue-400" />
            Available 24/7
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-medblue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-medblue-700 ring-1 ring-medblue-100">
            About Us
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Built for the Moments That Can&apos;t Wait
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Meghana Lifecare Ambulance Service is a 24/7 ambulance service based in
            Bangalore, providing emergency response, ICU/NICU/PICU/CCU
            ambulance transport, hospital transfers, and long-distance
            patient journeys across India. An ambulance call rarely comes at
            a convenient time — experienced drivers and staff support mean
            our team picks up, day or night.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-black/5 bg-white p-4 text-center shadow-sm shadow-black/[.03]"
              >
                <s.icon className="mx-auto h-5 w-5 text-medblue-600" />
                <p className="mt-2 text-lg font-extrabold text-navy-900">{s.value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500 sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-medblue-600 hover:underline"
          >
            Explore Our Services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
