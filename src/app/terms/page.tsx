import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${business.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container-page mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900">
          Terms of Use
        </h1>
        <div className="prose-sm mt-6 space-y-5 text-sm leading-relaxed text-ink-700">
          <p>
            These Terms of Use govern your use of the {business.name}
            website. By using this website, you agree to these terms.
          </p>
          <h2 className="text-base font-bold text-navy-900">Website purpose</h2>
          <p>
            This website provides information about ambulance transportation
            services offered by {business.name} and allows visitors to
            contact our team, request an ambulance, or submit a hospital/B2B
            enquiry. It is an information and enquiry channel, not an
            emergency dispatch system.
          </p>
          <h2 className="text-base font-bold text-navy-900">Emergency disclaimer</h2>
          <p>
            Form submissions on this website are not monitored on an
            instant, real-time basis. If you are facing a life-threatening
            emergency, call {business.phoneDisplay} or{" "}
            {business.secondaryPhoneDisplay} directly rather than submitting a
            form.
          </p>
          <h2 className="text-base font-bold text-navy-900">Service availability</h2>
          <p>
            Ambulance categories referenced on this website (including ICU,
            NICU, PICU and CCU ambulance support) are subject to vehicle and
            equipment availability at the time of your request. We recommend
            calling to confirm availability before relying on any specific
            service category.
          </p>
          <h2 className="text-base font-bold text-navy-900">No warranty</h2>
          <p>
            While we aim to keep the information on this website accurate and
            up to date, it is provided &ldquo;as is&rdquo; without warranties
            of any kind regarding completeness or availability of any
            specific service at any specific time.
          </p>
          <h2 className="text-base font-bold text-navy-900">Contact</h2>
          <p>
            Questions about these terms can be directed to us via our{" "}
            <a href="/contact" className="font-semibold text-medblue-600 underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
