import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container-page mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900">
          Privacy Policy
        </h1>
        <div className="prose-sm mt-6 space-y-5 text-sm leading-relaxed text-ink-700">
          <p>
            This Privacy Policy explains how {business.name} (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;) handles information submitted through this
            website, including the ambulance request form, the hospital/B2B
            enquiry form, and the general contact form.
          </p>
          <h2 className="text-base font-bold text-navy-900">Information we collect</h2>
          <p>
            When you submit a form on this website, we collect the details
            you provide — for example your name, phone number, pickup and
            drop locations, and any message or requirement you share. We do
            not collect more information than is necessary to respond to
            your enquiry.
          </p>
          <h2 className="text-base font-bold text-navy-900">How we use information</h2>
          <p>
            Information submitted through this website is used solely to
            respond to your ambulance request or enquiry and to coordinate
            the requested service. We do not sell your information to third
            parties.
          </p>
          <h2 className="text-base font-bold text-navy-900">Patient information</h2>
          <p>
            We aim to collect only the patient information necessary to
            arrange safe and appropriate transportation, and we do not store
            sensitive patient information beyond what is needed to fulfil
            your request.
          </p>
          <h2 className="text-base font-bold text-navy-900">Data security</h2>
          <p>
            We take reasonable steps to protect information submitted through
            this website. Form submissions are transmitted over HTTPS and
            handled through the API endpoints documented in this
            project&apos;s README for connection to a secure backend.
          </p>
          <h2 className="text-base font-bold text-navy-900">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact
            us using the details on our{" "}
            <a href="/contact" className="font-semibold text-medblue-600 underline">
              Contact page
            </a>
            .
          </p>
          <p className="text-xs text-ink-500">
            This policy is a general template and should be reviewed by the
            business owner (and legal counsel, if desired) before publishing
            the site live, particularly once a real backend and any
            third-party services are connected.
          </p>
        </div>
      </div>
    </section>
  );
}
