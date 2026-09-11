import Link from "next/link";
import type { Service, ServiceIconName } from "@/lib/business";
import { ServiceIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";

interface ServiceAccent {
  bar: string;
  badgeBg: string;
  badgeText: string;
  badgeHover: string;
  link: string;
}

/**
 * Each service category gets its own accent color so the grid of cards (and
 * the matching service detail page) reads as distinct services rather than
 * eight repeats of the same blue template.
 */
export const serviceAccent: Record<ServiceIconName, ServiceAccent> = {
  emergency: {
    bar: "bg-emergency-600",
    badgeBg: "bg-emergency-100",
    badgeText: "text-emergency-600",
    badgeHover: "group-hover:bg-emergency-600 group-hover:text-white",
    link: "text-emergency-600",
  },
  icu: {
    bar: "bg-sky-600",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-600",
    badgeHover: "group-hover:bg-sky-600 group-hover:text-white",
    link: "text-sky-600",
  },
  nicu: {
    bar: "bg-pink-600",
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-600",
    badgeHover: "group-hover:bg-pink-600 group-hover:text-white",
    link: "text-pink-600",
  },
  picu: {
    bar: "bg-violet-600",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-600",
    badgeHover: "group-hover:bg-violet-600 group-hover:text-white",
    link: "text-violet-600",
  },
  ccu: {
    bar: "bg-rose-600",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-600",
    badgeHover: "group-hover:bg-rose-600 group-hover:text-white",
    link: "text-rose-600",
  },
  transfer: {
    bar: "bg-indigo-600",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-600",
    badgeHover: "group-hover:bg-indigo-600 group-hover:text-white",
    link: "text-indigo-600",
  },
  longDistance: {
    bar: "bg-cyan-600",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-600",
    badgeHover: "group-hover:bg-cyan-600 group-hover:text-white",
    link: "text-cyan-600",
  },
  patient: {
    bar: "bg-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-600",
    badgeHover: "group-hover:bg-emerald-600 group-hover:text-white",
    link: "text-emerald-600",
  },
};

export default function ServiceCard({ service }: { service: Service }) {
  const accent = serviceAccent[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-6 pt-7 shadow-sm shadow-black/[.03] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[.08] focus-visible:-translate-y-1"
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 ${accent.bar}`} aria-hidden="true" />

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${accent.badgeBg} ${accent.badgeText} ${accent.badgeHover}`}
      >
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-navy-900">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>

      {service.idealFor.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {service.idealFor.slice(0, 2).map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-ink-500">
              <CheckIcon className={`mt-0.5 h-3 w-3 shrink-0 ${accent.badgeText}`} />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {service.subjectToAvailability && (
        <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-100">
          &#9888; Subject to availability
        </span>
      )}

      <span className={`mt-4 inline-flex items-center gap-1 text-sm font-bold ${accent.link}`}>
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
