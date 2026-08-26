import Link from "next/link";
import type { Service } from "@/lib/business";
import { ServiceIcon, ArrowRightIcon } from "@/components/icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.03] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[.06] focus-visible:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medblue-50 text-medblue-600 group-hover:bg-navy-900 group-hover:text-white transition-colors">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy-900">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>
      {service.subjectToAvailability && (
        <span className="mt-3 inline-flex w-fit rounded-full bg-medblue-50 px-2.5 py-1 text-[11px] font-semibold text-medblue-600">
          Subject to availability
        </span>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-medblue-600">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
