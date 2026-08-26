import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { ServiceIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import ContactTeaser from "@/components/ContactTeaser";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Bangalore`,
    description: `${service.summary} Contact ${business.name} at ${business.phoneDisplay} or ${business.secondaryPhoneDisplay}.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneIntl,
    },
    areaServed: {
      "@type": "City",
      name: business.city,
    },
    description: service.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="container-page py-4 text-xs text-ink-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-navy-900">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-navy-900">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-navy-900" aria-current="page">{service.name}</li>
        </ol>
      </nav>

      <section className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-page">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {service.name} in Bangalore
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">{service.description}</p>
          {service.subjectToAvailability && (
            <p className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-medblue-200">
              Subject to vehicle/equipment availability &mdash; please call to confirm
            </p>
          )}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-emergency-700"
            >
              <PhoneIcon className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl(`Hello, I would like to know more about ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-page mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-navy-900">What to expect</h2>
          <ul className="mt-4 space-y-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-medblue-600" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-medblue-50 p-5 text-sm text-ink-700">
            For immediate emergencies, please call{" "}
            <a href={buildTelUrl(business.phone)} className="font-bold text-navy-900 underline">
              {business.phoneDisplay}
            </a>{" "}
            directly. To request this service, use our{" "}
            <Link href="/contact#request-ambulance" className="font-bold text-navy-900 underline">
              ambulance request form
            </Link>
            .
          </div>
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}
