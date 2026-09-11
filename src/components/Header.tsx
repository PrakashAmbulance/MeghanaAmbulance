"use client";

import Link from "next/link";
import Image from "@/components/StaticImage";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business, buildTelUrl } from "@/lib/business";
import { MenuIcon, CloseIcon, SirenIcon } from "@/components/icons";

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
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
          <button
            type="button"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src={business.logoPath}
              alt={`${business.name} logo`}
              width={168}
              height={57}
              priority
              className="h-12 w-auto md:h-14"
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
                  className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-150 ${
                    active
                      ? "bg-medblue-600 text-white shadow-sm shadow-medblue-600/30"
                      : "text-ink-700 hover:bg-medblue-100 hover:text-medblue-600"
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
              className="inline-flex items-center gap-2 rounded-full bg-emergency-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-emergency-600/30 transition-all duration-150 hover:-translate-y-0.5 hover:bg-emergency-700 hover:shadow-md hover:shadow-emergency-600/40"
              aria-label={`Call Ambulance now at ${business.phoneDisplay}`}
            >
              <SirenIcon className="h-4 w-4" />
              Call Ambulance
            </a>
          </div>

          <a
            href={buildTelUrl(business.phone)}
            className="siren-beacon relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={`Call Ambulance now at ${business.phoneDisplay}`}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-emergency-500 opacity-75 animate-ping" />
            <SirenIcon className="relative h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Backdrop — closes the drawer when clicked outside it */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Off-canvas drawer, slides in from the left */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-xs transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 border-b border-black/5 px-4">
          <Image
            src={business.logoPath}
            alt={`${business.name} logo`}
            width={140}
            height={48}
            className="h-10 w-auto"
          />
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center text-navy-900"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-3 py-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                    active
                      ? "bg-medblue-50 text-navy-900"
                      : "text-ink-700 hover:bg-medblue-50 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-2 border-t border-black/5 px-4 py-4">
          <a
            href={buildTelUrl(business.phone)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emergency-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emergency-700"
            aria-label={`Call Ambulance now at ${business.phoneDisplay}`}
          >
            <SirenIcon className="h-4 w-4" />
            Call Ambulance
          </a>
        </div>
      </nav>
    </>
  );
}
