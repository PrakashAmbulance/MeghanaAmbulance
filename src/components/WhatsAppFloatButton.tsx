"use client";

import { buildWhatsAppUrl } from "@/lib/business";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Floating WhatsApp button, desktop/tablet only (mobile already has a
 * WhatsApp action in the persistent bottom bar, so we avoid stacking two
 * floating elements on small screens).
 */
export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:flex"
      aria-label="Chat with Meghana Lifecare Ambulance Service on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
