import Link from "next/link";
import { serviceAreas, business, type Zone } from "@/lib/business";
import { MapPinIcon } from "@/components/icons";

export const zoneConfig: Record<Zone, { label: string; color: string; bg: string; ring: string }> = {
  "West":              { label: "West",              color: "text-violet-700", bg: "bg-violet-50",    ring: "ring-violet-100" },
  "West/Central":      { label: "West / Central",    color: "text-violet-700", bg: "bg-violet-50",    ring: "ring-violet-100" },
  "North-West":        { label: "North-West",         color: "text-sky-700",    bg: "bg-sky-50",       ring: "ring-sky-100" },
  "North":             { label: "North",              color: "text-sky-700",    bg: "bg-sky-50",       ring: "ring-sky-100" },
  "South":             { label: "South",              color: "text-emerald-700",bg: "bg-emerald-50",   ring: "ring-emerald-100" },
  "South-East":        { label: "South-East",         color: "text-emerald-700",bg: "bg-emerald-50",   ring: "ring-emerald-100" },
  "South-East/Central":{ label: "South-East / Central",color:"text-emerald-700",bg: "bg-emerald-50",  ring: "ring-emerald-100" },
  "East/Central":      { label: "East / Central",     color: "text-amber-700",  bg: "bg-amber-50",    ring: "ring-amber-100" },
  "East":              { label: "East",               color: "text-amber-700",  bg: "bg-amber-50",    ring: "ring-amber-100" },
};

export const zoneGroups: { label: string; zones: Zone[]; dotColor: string; badgeColor: string; badgeBg: string; borderColor: string }[] = [
  {
    label: "West & Central-West",
    zones: ["West", "West/Central"],
    dotColor: "bg-violet-500",
    badgeColor: "text-violet-700",
    badgeBg: "bg-violet-50 ring-violet-200",
    borderColor: "border-violet-100",
  },
  {
    label: "North & North-West",
    zones: ["North", "North-West"],
    dotColor: "bg-sky-500",
    badgeColor: "text-sky-700",
    badgeBg: "bg-sky-50 ring-sky-200",
    borderColor: "border-sky-100",
  },
  {
    label: "South & South-East",
    zones: ["South", "South-East", "South-East/Central"],
    dotColor: "bg-emerald-500",
    badgeColor: "text-emerald-700",
    badgeBg: "bg-emerald-50 ring-emerald-200",
    borderColor: "border-emerald-100",
  },
  {
    label: "East & Central-East",
    zones: ["East", "East/Central"],
    dotColor: "bg-amber-500",
    badgeColor: "text-amber-700",
    badgeBg: "bg-amber-50 ring-amber-200",
    borderColor: "border-amber-100",
  },
];

export default function CoverageSection({ compact }: { compact?: boolean }) {
  if (compact) {
    return (
      <section id="coverage" className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-medblue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-medblue-700 ring-1 ring-medblue-100">
              Service Area
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Close By, Wherever You Are in Bangalore
            </h2>
            <p className="mt-3 text-ink-500">
              West, North, South, or East — we cover 20 areas across the city,
              plus long-distance journeys across India.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {zoneGroups.map((group) => {
              const areas = serviceAreas.filter((a) => group.zones.includes(a.zone)).slice(0, 2);
              return (
                <div
                  key={group.label}
                  className={`rounded-2xl border bg-white p-4 shadow-sm ${group.borderColor}`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${group.dotColor}`} />
                    <h3 className={`text-xs font-bold uppercase tracking-wide ${group.badgeColor}`}>
                      {group.label}
                    </h3>
                  </div>
                  <div className="space-y-1.5">
                    {areas.map((area) => (
                      <p key={area.slug} className="truncate text-sm font-semibold text-ink-700">
                        {area.name}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/coverage"
              className="text-sm font-bold text-medblue-600 hover:underline"
            >
              View all 20 coverage areas &rarr;
            </Link>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-navy-950 px-6 py-5 text-center text-sm font-semibold text-white">
            Long-distance ambulance journeys available across India.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="coverage" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-medblue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-medblue-700 ring-1 ring-medblue-100">
            Service Area
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Ambulance Coverage Across Bangalore
          </h2>
          <p className="mt-3 text-ink-500">
            We provide ambulance service across {serviceAreas.length} areas in Bangalore — from West to East,
            North to South. Long-distance journeys across Karnataka and India are also available.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "20+", label: "Areas Covered" },
            { value: "24/7", label: "Availability" },
            { value: "4", label: "City Zones" },
            { value: "Pan-India", label: "Long Distance" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-black/5 bg-navy-950 px-4 py-5 text-center text-white">
              <p className="text-2xl font-extrabold text-medblue-400">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Zone groups */}
        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2">
          {zoneGroups.map((group) => {
            const areas = serviceAreas.filter((a) => group.zones.includes(a.zone));
            return (
              <div
                key={group.label}
                className={`rounded-2xl border bg-white p-6 shadow-sm ${group.borderColor}`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${group.dotColor}`} />
                  <h3 className={`text-sm font-bold uppercase tracking-wide ${group.badgeColor}`}>
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area.slug}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${group.badgeColor} ${group.badgeBg}`}
                    >
                      <MapPinIcon className="h-3 w-3 shrink-0" />
                      {area.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Location note */}
        <p className="mt-6 text-center text-sm text-ink-400">
          Not sure if your location is covered?{" "}
          <a
            href={`tel:+91${business.phone}`}
            className="font-semibold text-medblue-600 hover:underline"
          >
            Call {business.phoneDisplay}
          </a>{" "}
          and our team will confirm immediately.
        </p>

        {/* Long-distance banner */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-navy-950 px-6 py-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-base font-bold">Long-Distance Ambulance — Across India</p>
            <p className="mt-1 text-sm text-white/65">
              We support ambulance journeys from Bangalore to destinations across Karnataka and other states. Route, requirements, and timing are confirmed before departure.
            </p>
          </div>
          <a
            href={`tel:+91${business.phone}`}
            className="mt-4 inline-flex shrink-0 items-center justify-center rounded-xl bg-medblue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-medblue-700 sm:mt-0"
          >
            Call to Arrange
          </a>
        </div>
      </div>
    </section>
  );
}
