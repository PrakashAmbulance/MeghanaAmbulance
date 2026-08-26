import Link from "next/link";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, AmbulanceRequestIcon } from "@/components/icons";

export default function ContactTeaser() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-white sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Need an Ambulance?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Call our team directly, message us on WhatsApp, or request an
          ambulance online. We&apos;re available 24/7 for Bangalore and
          long-distance journeys across India.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emergency-600 px-5 py-4 text-sm font-bold text-white hover:bg-emergency-700"
          >
            <PhoneIcon className="h-4 w-4" /> Call Our Team
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <Link
            href="/contact#request-ambulance"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-5 py-4 text-sm font-bold text-white hover:bg-white/10"
          >
            <AmbulanceRequestIcon className="h-4 w-4" /> Request Ambulance
          </Link>
        </div>
      </div>
    </section>
  );
}
