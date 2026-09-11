"use client";

import Link from "next/link";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, AmbulanceRequestIcon } from "@/components/icons";

/**
 * Persistent mobile-only emergency action bar. Fixed to the bottom of the
 * viewport so a phone visitor never has to scroll or hunt for the phone
 * number. Hidden on desktop/tablet, where the header CTA and emergency
 * strip already provide instant access.
 */
export default function MobileEmergencyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-black/10 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
      style={{ height: "var(--mobile-cta-height)" }}
    >
      <a
        href={buildTelUrl(business.phone)}
        className="flex flex-col items-center justify-center gap-0.5 bg-emergency-600 text-white active:bg-emergency-700"
        aria-label={`Call ambulance now at ${business.phoneDisplay}`}
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="text-[11px] font-bold uppercase tracking-wide">Call Now</span>
      </a>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 bg-[#25D366] text-white active:brightness-95"
        aria-label="Message Meghana Lifecare Ambulance Service on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-[11px] font-bold uppercase tracking-wide">WhatsApp</span>
      </a>
      <Link
        href="/contact#request-ambulance"
        className="flex flex-col items-center justify-center gap-0.5 bg-navy-900 text-white active:bg-navy-800"
        aria-label="Request an ambulance"
      >
        <AmbulanceRequestIcon className="h-5 w-5" />
        <span className="text-[11px] font-bold uppercase tracking-wide">Request</span>
      </Link>
    </div>
  );
}
