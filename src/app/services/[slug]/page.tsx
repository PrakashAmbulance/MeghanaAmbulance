import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, serviceAreas, business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import {
  ServiceIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  SirenIcon,
  AmbulanceIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@/components/icons";
import ServiceCard, { serviceAccent } from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import ContactTeaser from "@/components/ContactTeaser";
import { zoneConfig } from "@/components/CoverageSection";

const bookingSteps = [
  {
    title: "Call or WhatsApp our team",
    description:
      "Share the patient's condition and the exact pickup location, ideally with a nearby landmark.",
  },
  {
    title: "Confirm the destination",
    description:
      "Let us know the hospital, home, or care facility you're headed to — and your preferred hospital, if you have one.",
  },
  {
    title: "We coordinate dispatch",
    description:
      "A driver — and staff nurse support where relevant — is arranged, and we share an update on timing.",
  },
  {
    title: "Transport and hand-off",
    description:
      "The patient is transported and handed over safely at the drop-off point.",
  },
];

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
  const title = `${service.name} in Bangalore`;
  const description = `${service.summary} Call ${business.phoneDisplay} or ${business.secondaryPhoneDisplay} — available 24/7 across Bangalore.`;
  const shortLower = service.shortName.toLowerCase();
  const keywords = [
    `${service.name} Bangalore`,
    `${service.name} near me`,
    `${service.shortName} ambulance Bangalore`,
    `book ${shortLower} ambulance online`,
    `24/7 ${shortLower} ambulance Bangalore`,
    `${service.shortName} ambulance contact number`,
    `${service.name} booking Bangalore`,
    `${service.shortName} ambulance service near me`,
  ];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${business.siteUrl}/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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

  const relatedServices = service.relatedSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const accent = serviceAccent[service.icon];

  const quickFacts = [
    {
      icon: ClockIcon,
      value: "24/7",
      label: "Availability",
      border: "border-t-emerald-500",
      badge: "bg-emerald-50 text-emerald-600",
      valueColor: "text-emerald-700",
    },
    {
      icon: MapPinIcon,
      value: `${serviceAreas.length}+`,
      label: "Areas Covered",
      border: "border-t-sky-500",
      badge: "bg-sky-50 text-sky-600",
      valueColor: "text-sky-700",
    },
    {
      icon: PhoneIcon,
      value: "Call & WhatsApp",
      label: "Instant Contact",
      border: "border-t-emergency-500",
      badge: "bg-emergency-100 text-emergency-600",
      valueColor: "text-emergency-700",
    },
  ];

  const stepAccents = [
    { bg: "bg-emergency-600", top: "border-t-emergency-500" },
    { bg: "bg-amber-500", top: "border-t-amber-500" },
    { bg: "bg-sky-600", top: "border-t-sky-500" },
    { bg: "bg-emerald-600", top: "border-t-emerald-500" },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} — ${business.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.city,
        addressRegion: business.state,
        postalCode: business.postalCode,
        addressCountry: business.countryCode,
      },
    },
    areaServed: [
      { "@type": "City", name: business.city },
      ...serviceAreas.map((area) => ({ "@type": "Place", name: `${area.name}, Bangalore` })),
    ],
    description: service.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${business.siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${business.siteUrl}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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

      <section className="relative overflow-hidden bg-navy-950 py-10 text-white sm:py-14">
        <AmbulanceIcon
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -bottom-10 hidden h-56 w-56 text-white/[.05] sm:block lg:h-72 lg:w-72"
        />
        <div className="container-page relative">
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/10 ${accent.badgeBg} ${accent.badgeText}`}
            >
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white ring-1 ring-white/15">
              <span className="siren-beacon flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                <SirenIcon className="h-3 w-3 text-white" />
              </span>
              24/7 Emergency Response
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {service.name} in Bangalore
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">{service.description}</p>
          {service.subjectToAvailability && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-4 py-1.5 text-xs font-semibold text-amber-200 ring-1 ring-amber-400/30">
              &#9888; Subject to vehicle/equipment availability &mdash; please call to confirm
            </p>
          )}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emergency-600/20 transition-all hover:-translate-y-0.5 hover:bg-emergency-700"
            >
              <PhoneIcon className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl(`Hello, I would like to know more about ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      <div className="hazard-stripes h-2" aria-hidden="true" />

      <section className="bg-white py-10 sm:py-14">
        <div className="container-page mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-2xl border border-black/5 border-t-4 bg-white px-3 py-5 text-center shadow-sm shadow-black/[.03] ${fact.border}`}
              >
                <span
                  className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full ${fact.badge}`}
                >
                  <fact.icon className="h-4 w-4" />
                </span>
                <p className={`mt-2.5 text-sm font-extrabold sm:text-base ${fact.valueColor}`}>
                  {fact.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink-500 sm:text-xs">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container-page mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Who this service is for</h2>
            <ul className="mt-4 space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-emergency-100 bg-emergency-100/30 p-3.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emergency-600 text-white">
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5 text-sm text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">What to expect</h2>
            <ul className="mt-4 space-y-3">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5 text-sm text-ink-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-page mx-auto mt-10 max-w-2xl">
          <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-ink-700">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <p>
              For immediate emergencies, please call{" "}
              <a href={buildTelUrl(business.phone)} className="font-bold text-navy-900 underline">
                {business.phoneDisplay}
              </a>{" "}
              directly. To request this service, use our{" "}
              <Link href="/contact#request-ambulance" className="font-bold text-navy-900 underline">
                ambulance request form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-medblue-50 py-14 sm:py-16">
        <div className="container-page mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-bold text-navy-900 sm:text-2xl">
            How booking {service.shortName.toLowerCase()} ambulance works
          </h2>
          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-5 hidden border-t-2 border-dashed border-medblue-400/50 lg:block"
            />
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {bookingSteps.map((step, i) => {
                const accent = stepAccents[i % stepAccents.length];
                return (
                  <div
                    key={step.title}
                    className={`rounded-2xl border border-black/5 border-t-4 bg-white p-5 shadow-sm shadow-black/[.03] ${accent.top}`}
                  >
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-medblue-50 ${accent.bg}`}
                    >
                      {i + 1}
                    </span>
                    <p className="mt-3 text-sm font-bold text-navy-900">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            {service.name} coverage across Bangalore
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-500">
            We serve {serviceAreas.length} areas across Bangalore. Call to confirm coverage for
            your exact pickup location.
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => {
              const cfg = zoneConfig[area.zone];
              return (
                <span
                  key={area.slug}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${cfg.bg} ${cfg.ring} ${cfg.color}`}
                >
                  <MapPinIcon className="h-3 w-3 shrink-0" />
                  {area.name}
                </span>
              );
            })}
          </div>
          <Link
            href="/coverage"
            className="mt-6 inline-flex items-center text-sm font-bold text-medblue-600 hover:underline"
          >
            View the full coverage map &rarr;
          </Link>
        </div>
      </section>

      <FAQSection
        faqs={service.faqs}
        title={`${service.name} — Frequently Asked Questions`}
        sectionId="service-faq"
      />

      {relatedServices.length > 0 && (
        <section className="bg-medblue-50 py-14 sm:py-16">
          <div className="container-page">
            <h2 className="text-center text-xl font-bold text-navy-900 sm:text-2xl">
              Related Services
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="hazard-stripes h-2" aria-hidden="true" />
      <ContactTeaser />
    </>
  );
}
