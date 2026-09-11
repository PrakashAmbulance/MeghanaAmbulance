import Link from "next/link";
import { business, buildTelUrl } from "@/lib/business";
import {
  ArrowRightIcon,
  PhoneIcon,
  ShieldIcon,
  StaffIcon,
  ServiceIcon,
  MapPinIcon,
  AmbulanceIcon,
} from "@/components/icons";

const accents = [
  { badge: "bg-medblue-500/15 text-medblue-300" },
  { badge: "bg-emerald-500/15 text-emerald-300" },
  { badge: "bg-rose-500/15 text-rose-300" },
  { badge: "bg-amber-500/15 text-amber-300" },
];

const points = [
  { icon: PhoneIcon, text: "Quick phone access to our team" },
  { icon: ShieldIcon, text: "Experienced drivers" },
  { icon: StaffIcon, text: "Staff nurse support" },
  {
    icon: (props: { className?: string }) => <ServiceIcon name="patient" {...props} />,
    text: "Comfortable patient transportation",
  },
  {
    icon: (props: { className?: string }) => <ServiceIcon name="transfer" {...props} />,
    text: "Hospital transfers",
  },
  {
    icon: (props: { className?: string }) => <ServiceIcon name="longDistance" {...props} />,
    text: "Long-distance journeys",
  },
  { icon: MapPinIcon, text: "Bangalore coverage" },
  { icon: AmbulanceIcon, text: "All-India journeys" },
];

export default function B2CSection() {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-medblue-200 ring-1 ring-white/15">
            For Individuals &amp; Families
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ambulance Support When Your Family Needs It Most
          </h2>
          <p className="mt-4 text-white/75">
            We understand that arranging an ambulance is often a stressful,
            time-sensitive moment. Our team focuses on clear communication,
            experienced drivers and staff support so your family can focus on
            the patient, not the logistics.
          </p>
          {/* Hidden on mobile — the fixed bottom bar covers Call/Request there */}
          <div className="mt-6 hidden flex-wrap items-center gap-x-5 gap-y-3 md:flex">
            <Link
              href="/contact#request-ambulance"
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emergency-700 hover:shadow-md"
            >
              Book an Ambulance
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-medblue-200"
            >
              <PhoneIcon className="h-4 w-4" />
              or call {business.phoneDisplay}
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {points.map((p, i) => {
            const accent = accents[i % accents.length];
            return (
              <li
                key={p.text}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-white/85 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${accent.badge}`}
                >
                  <p.icon className="h-4 w-4" />
                </span>
                {p.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
