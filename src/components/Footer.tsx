import Link from "next/link";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, SirenIcon, ArrowRightIcon } from "@/components/icons";

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage Areas" },
  { href: "/gallery", label: "Our Fleet" },
  { href: "/about", label: "About Us" },
  { href: "/hospital-partnerships", label: "Hospital Partnerships" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/emergency-ambulance", label: "Emergency Ambulance" },
  { href: "/services/icu-ambulance", label: "ICU Ambulance" },
  { href: "/services/hospital-transfer", label: "Hospital Transfer" },
  { href: "/services/long-distance-ambulance", label: "Long-Distance Ambulance" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white/90">
      <div className="hazard-stripes h-1.5" aria-hidden="true" />

      {/* Closing CTA band — hidden on mobile, where the fixed bottom bar already covers Call/WhatsApp */}
      <div className="hidden border-b border-white/10 bg-white/5 md:block">
        <div className="container-page flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="siren-beacon flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
              <SirenIcon className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="text-base font-extrabold text-white">Ambulance needed right now?</p>
              <p className="text-sm text-white/60">Two direct lines, answered around the clock.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emergency-700"
            >
              <PhoneIcon className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">{business.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            A patient&apos;s condition, an address, and a driver who knows the
            route — that&apos;s what we coordinate, every time the phone rings.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {business.streetAddress}, {business.city} {business.postalCode}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white"
                >
                  {l.label}
                  <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/60">
            Ambulance Categories
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white"
                >
                  {l.label}
                  <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-lg border border-emergency-500/20 bg-emergency-500/10 p-3 text-xs leading-relaxed text-white/70">
            In a life-threatening emergency, call {business.phoneDisplay}{" "}
            directly — this site is an enquiry channel, not a monitored
            dispatch line.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col items-center gap-3 text-center text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} {business.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms of Use
            </Link>
            <span className="text-white/20">|</span>
            <p>
              Designed &amp; developed by{" "}
              <a
                href="https://dataquiver.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-medblue-400 hover:text-medblue-300 hover:underline"
              >
                DataQuiver
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
