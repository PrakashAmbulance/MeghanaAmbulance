import Link from "next/link";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, AmbulanceRequestIcon } from "@/components/icons";

/**
 * Highly visible emergency action strip, placed immediately below the hero
 * on the homepage per the brief.
 */
export default function EmergencyCTA() {
  return (
    <section className="border-y border-emergency-100 bg-emergency-100/60">
      <div className="container-page flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
        <p className="text-center text-lg font-extrabold text-navy-900 sm:text-left">
          Need an ambulance now?
        </p>
        <div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-cols-3">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emergency-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emergency-700"
          >
            <PhoneIcon className="h-4 w-4" />
            CALL {business.phoneDisplay}
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WHATSAPP
          </a>
          <Link
            href="/contact#request-ambulance"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-navy-800"
          >
            <AmbulanceRequestIcon className="h-4 w-4" />
            REQUEST AMBULANCE
          </Link>
        </div>
      </div>
    </section>
  );
}
