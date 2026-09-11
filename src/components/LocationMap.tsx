import {
  business,
  buildGoogleMapsDirectionsUrl,
  buildGoogleMapsEmbedUrl,
} from "@/lib/business";
import { MapPinIcon } from "@/components/icons";

export default function LocationMap() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="location-heading">
      <div className="container-page">
        <div className="text-center">
          <h2
            id="location-heading"
            className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
          >
            Find Us
          </h2>
          <p className="mx-auto mt-3 flex max-w-xl items-start justify-center gap-2 text-sm text-ink-500 sm:text-base">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {business.streetAddress}, {business.city} {business.postalCode}
            </span>
          </p>
          <a
            href={buildGoogleMapsDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-700"
          >
            Get Directions
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <iframe
            title={`${business.name} location map`}
            src={buildGoogleMapsEmbedUrl()}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
