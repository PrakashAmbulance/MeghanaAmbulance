import type { Metadata } from "next";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, AmbulanceRequestIcon } from "@/components/icons";
import RequestAmbulanceForm from "@/components/forms/RequestAmbulanceForm";
import B2BForm from "@/components/forms/B2BForm";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${business.name} — call ${business.phoneDisplay} or ${business.secondaryPhoneDisplay}, message on WhatsApp, or request an ambulance online.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-14 text-white sm:py-16">
        <div className="container-page">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Us</h1>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              {business.name}, {business.region}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={buildTelUrl(business.phone)}
              className="flex flex-col items-center gap-2 rounded-2xl bg-emergency-600 px-5 py-5 text-center font-bold hover:bg-emergency-700"
            >
              <PhoneIcon className="h-6 w-6" />
              Call Now
              <span className="text-xs font-medium text-white/80">{business.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-5 text-center font-bold hover:brightness-95"
            >
              <WhatsAppIcon className="h-6 w-6" />
              WhatsApp
              <span className="text-xs font-medium text-white/80">Chat with us</span>
            </a>
            <a
              href="#request-ambulance"
              className="flex flex-col items-center gap-2 rounded-2xl border-2 border-white/25 px-5 py-5 text-center font-bold hover:bg-white/10"
            >
              <AmbulanceRequestIcon className="h-6 w-6" />
              Request Ambulance
              <span className="text-xs font-medium text-white/80">Fill the form below</span>
            </a>
          </div>

          <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 text-sm text-white/70">
            <MapPinIcon className="h-4 w-4" />
            {business.region}
          </div>
        </div>
      </section>

      <section id="request-ambulance" className="scroll-mt-20 bg-white py-14 sm:py-16">
        <div className="container-page mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">
            Request an Ambulance
          </h2>
          <p className="mt-2 text-sm text-ink-500">
            Fill in the details below and our team will get back to you.
          </p>
          <div className="mt-6">
            <RequestAmbulanceForm />
          </div>
        </div>
      </section>

      <section id="b2b-enquiry" className="scroll-mt-20 bg-navy-900 py-14 text-white sm:py-16">
        <div className="container-page mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Hospital / B2B Enquiry
          </h2>
          <p className="mt-2 text-sm text-white/70">
            For hospitals, clinics and healthcare organizations interested in
            partnering with us.
          </p>
          <div className="mt-6">
            <B2BForm />
          </div>
        </div>
      </section>

      <section id="general-enquiry" className="scroll-mt-20 bg-medblue-50 py-14 sm:py-16">
        <div className="container-page mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">
            General Enquiry
          </h2>
          <p className="mt-2 text-sm text-ink-500">
            Have a question that isn&apos;t urgent? Send us a message.
          </p>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
