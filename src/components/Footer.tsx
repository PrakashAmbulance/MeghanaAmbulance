import Link from "next/link";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/icons";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/coverage", label: "Coverage" },
  { href: "/gallery", label: "Gallery" },
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
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">{business.name}</p>
          <p className="mt-2 flex items-start gap-2 text-sm text-white/70">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {business.region}
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href={buildTelUrl(business.phone)}
              className="flex items-center gap-2 font-semibold text-white hover:text-medblue-400"
            >
              <PhoneIcon className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <a
              href={buildTelUrl(business.secondaryPhone)}
              className="flex items-center gap-2 font-semibold text-white hover:text-medblue-400"
            >
              <PhoneIcon className="h-4 w-4" /> {business.secondaryPhoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-white hover:text-medblue-400"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/60">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/hospital-partnerships"
                className="text-white/80 hover:text-white"
              >
                B2B / Hospital Partnerships
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/60">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-white/80 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-white/80 hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-white/70">
            <strong className="text-white/90">Emergency disclaimer:</strong> If
            you are facing a life-threatening emergency, call{" "}
            {business.phoneDisplay} or {business.secondaryPhoneDisplay}{" "}
            directly. This website is an information and enquiry channel and
            is not monitored as an instant emergency dispatch line.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col items-center gap-1.5 text-center text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} {business.name}. All rights reserved.</p>
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
    </footer>
  );
}
