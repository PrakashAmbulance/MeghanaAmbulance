import { buildTelUrl, business } from "@/lib/business";
import B2BForm from "@/components/forms/B2BForm";
import { PhoneIcon, BuildingIcon } from "@/components/icons";

const targets = [
  "Hospitals",
  "Nursing homes",
  "Clinics",
  "Diagnostic centres",
  "Corporate healthcare teams",
  "Senior-care facilities",
  "Event medical teams",
  "Healthcare institutions",
];

export default function B2BSection() {
  return (
    <section id="hospital-partnerships" className="bg-navy-900 py-16 text-white sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-medblue-100 ring-1 ring-white/15">
            <BuildingIcon className="h-3.5 w-3.5" />
            B2B / Institutional
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Hospital &amp; Healthcare Partnerships
          </h2>
          <p className="mt-4 text-white/75">
            Meghana Ambulance Service supports healthcare organizations with
            patient transportation and ambulance coordination. We work with:
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
            {targets.map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#b2b-form"
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-emergency-700"
            >
              Partner With Us
            </a>
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/25 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4" />
              Talk to Our Team
            </a>
          </div>
          <p className="mt-6 text-xs text-white/50">
            We do not list existing hospital partnerships here until they are
            confirmed by the respective institutions.
          </p>
        </div>

        <div id="b2b-form">
          <B2BForm />
        </div>
      </div>
    </section>
  );
}
