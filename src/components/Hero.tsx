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
    sub: "Experienced drivers & staff nurse support — available any time, day or night.",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-city-road.jpg",
    alt: "Ambulance responding on city highway — Meghana Ambulance Service Bangalore",
    headline: "Emergency & ICU Ambulance, Always Ready",
    sub: "Hospital transfers, long-distance journeys & emergency response across 20 areas of Bangalore.",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-ambulance-fleet.jpg",
    alt: "Ambulance fleet with Star of Life — Meghana Ambulance Service Bangalore",
    headline: "Hospital Transfers & Patient Transport",
    sub: "Hospital-to-hospital, hospital-to-home, and long-distance journeys across Karnataka & India.",
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
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
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
      className="relative overflow-hidden bg-navy-950"
      style={{ minHeight: "calc(100svh - 64px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero banner"
    >
      {/* Background images */}
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

      {/* Mobile: uniform dark overlay. Desktop: left-to-right fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(3,14,40,0.93) 0%, rgba(3,14,40,0.85) 40%, rgba(3,14,40,0.60) 65%, rgba(3,14,40,0.20) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Extra dark layer only on mobile for legibility */}
      <div
        className="absolute inset-0 bg-navy-950/40 sm:hidden"
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-16"
        style={{ background: "linear-gradient(to top, rgba(3,14,40,0.6), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="container-page relative flex flex-col justify-center py-8 pb-14 sm:py-16 lg:max-w-3xl"
        style={{ minHeight: "calc(100svh - 64px)" }}
      >
        {/* Badge */}
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 ring-1 ring-white/20 backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-xs">
          <ClockIcon className="h-3 w-3 text-medblue-300 sm:h-3.5 sm:w-3.5" />
          Available 24 / 7 · Bangalore
        </span>

        {/* Headline — much smaller on mobile */}
        <h1
          key={slide.headline}
          className="mt-3 text-[1.6rem] font-extrabold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl"
        >
          {slide.headline}
        </h1>

        {/* Subtext */}
        <p
          key={slide.sub}
          className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base"
        >
          {slide.sub}
        </p>

        {/* CTA buttons — 2-column grid on mobile, row on desktop */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
          <a
            href={buildTelUrl(business.phone)}
            className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emergency-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emergency-700/40 transition-transform hover:-translate-y-0.5 hover:bg-emergency-700 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Call Now
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:brightness-95 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            WhatsApp
          </a>
          <Link
            href="/contact#request-ambulance"
            className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white/20 sm:col-auto sm:border-2 sm:px-6 sm:py-3.5 sm:text-base sm:font-bold"
          >
            <AmbulanceRequestIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Request Ambulance
          </Link>
        </div>

        {/* Direct lines — compact on mobile */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/65 sm:mt-5 sm:gap-x-5 sm:text-sm">
          <span>Direct:</span>
          <a href={buildTelUrl(business.phone)} className="font-bold text-white hover:text-medblue-200">
            {business.phoneDisplay}
          </a>
          <span aria-hidden="true">&middot;</span>
          <a href={buildTelUrl(business.secondaryPhone)} className="font-bold text-white hover:text-medblue-200">
            {business.secondaryPhoneDisplay}
          </a>
        </div>

        {/* Trust badges — 2 shown on mobile, all 4 on desktop */}
        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
          {[
            { label: "Experienced Drivers", mobileShow: true },
            { label: "Staff Nurse Support", mobileShow: true },
            { label: "5G Connected Fleet", mobileShow: false },
            { label: "20 Areas in Bangalore", mobileShow: false },
          ].map(({ label, mobileShow }) => (
            <span
              key={label}
              className={`rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur-sm sm:block sm:px-3 sm:py-1 sm:text-xs ${
                mobileShow ? "block" : "hidden"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6">
        <DotNav count={slides.length} active={active} onSelect={setActive} />
      </div>
    </section>
  );
}
