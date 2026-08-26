"use client";

import Link from "next/link";
import Image from "@/components/StaticImage";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { business, buildTelUrl } from "@/lib/business";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/coverage", label: "Coverage" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hospital-partnerships", label: "Hospital Partnerships" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src={business.logoPath}
            alt={`${business.name} logo`}
            width={168}
            height={42}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-medblue-50 text-navy-900"
                    : "text-ink-700 hover:bg-black/[.03] hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex items-center gap-2 rounded-full bg-emergency-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-emergency-600/30 transition-colors hover:bg-emergency-700"
            aria-label={`Call Ambulance now at ${business.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            Call Ambulance
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex items-center justify-center rounded-full bg-emergency-600 p-2.5 text-white shadow-sm"
            aria-label={`Call Ambulance now at ${business.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-black/10 p-2.5 text-navy-900"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-black/5 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink-700 hover:bg-medblue-50 hover:text-navy-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
