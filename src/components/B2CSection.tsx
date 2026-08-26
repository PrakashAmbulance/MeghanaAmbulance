import Link from "next/link";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

const points = [
  "Quick phone access to our team",
  "Experienced drivers",
  "Staff nurse support",
  "Comfortable patient transportation",
  "Hospital transfers",
  "Long-distance journeys",
  "Bangalore coverage",
  "All-India journeys",
];

export default function B2CSection() {
  return (
    <section className="bg-medblue-50 py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Ambulance Support When Your Family Needs It Most
          </h2>
          <p className="mt-4 text-ink-700">
            We understand that arranging an ambulance is often a stressful,
            time-sensitive moment. Our team focuses on clear communication,
            experienced drivers and staff support so your family can focus on
            the patient, not the logistics.
          </p>
          <Link
            href="/contact#request-ambulance"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-navy-800"
          >
            Book an Ambulance
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-sm font-medium text-ink-700 shadow-sm shadow-black/[.03]"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-medblue-600" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
