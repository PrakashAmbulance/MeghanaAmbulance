"use client";

import Image from "@/components/StaticImage";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { business, buildTelUrl, buildWhatsAppUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, AmbulanceRequestIcon, ClockIcon } from "@/components/icons";

const slides = [
  {
    src: "/images/hero/hero-ambulance-india.jpg",
    alt: "Indian advanced life support ambulance on road — Meghana Ambulance Service Bangalore",
    headline: "24/7 Ambulance Service in Bangalore",
    sub: "Reliable ambulance transportation with experienced drivers and staff nurse support — available any time, day or night.",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-city-road.jpg",
    alt: "Ambulance responding on city highway — Meghana Ambulance Service Bangalore",
    headline: "Emergency & ICU Ambulance — Always Ready",
    sub: "Hospital transfers, long-distance journeys, and emergency response across 20 areas of Bangalore.",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-ambulance-fleet.jpg",
    alt: "Ambulance fleet with Star of Life — Meghana Ambulance Service Bangalore",
    headline: "Hospital Transfers & Patient Transport",
    sub: "Hospital-to-hospital, hospital-to-home, and long-distance ambulance journeys across Karnataka and India.",
    position: "object-center",
  },
];

function DotNav({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-2" role="tablist" aria-label="Hero slides">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[active];

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero banner"
    >
      {/* Background image */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${s.position}`}
          />
        </div>
      ))}

      {/* Left-to-right dark overlay — mimics the reference design */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(3,14,40,0.92) 0%, rgba(3,14,40,0.75) 45%, rgba(3,14,40,0.35) 70%, rgba(3,14,40,0.10) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom gradient for dot legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to top, rgba(3,14,40,0.55), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-16 lg:max-w-3xl">
        {/* Badge */}
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
          <ClockIcon className="h-3.5 w-3.5 text-medblue-300" />
          Available 24 / 7 · Bangalore
        </span>

        {/* Headline */}
        <h1
          key={slide.headline}
          className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {slide.headline}
        </h1>

        {/* Sub */}
        <p
          key={slide.sub}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {slide.sub}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emergency-700/40 transition-transform hover:-translate-y-0.5 hover:bg-emergency-700"
          >
            <PhoneIcon className="h-5 w-5" />
            Call Ambulance
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:brightness-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Us
          </a>
          <Link
            href="/contact#request-ambulance"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white/20"
          >
            <AmbulanceRequestIcon className="h-5 w-5" />
            Request Ambulance
          </Link>
        </div>

        {/* Direct lines */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
          <span>Direct lines:</span>
          <a
            href={buildTelUrl(business.phone)}
            className="font-bold text-white hover:text-medblue-200"
          >
            {business.phoneDisplay}
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href={buildTelUrl(business.secondaryPhone)}
            className="font-bold text-white hover:text-medblue-200"
          >
            {business.secondaryPhoneDisplay}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Experienced Drivers", "Staff Nurse Support", "5G Connected Fleet", "20 Areas in Bangalore"].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur-sm"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* Slide dots — bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <DotNav count={slides.length} active={active} onSelect={setActive} />
      </div>
    </section>
  );
}
