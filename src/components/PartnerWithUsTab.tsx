"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Persistent vertical edge tab linking to the hospital/healthcare
 * partnerships page. Shown on every page except the partnerships page
 * itself, since a "Partner With Us" link is pointless once you're already
 * there.
 */
export default function PartnerWithUsTab() {
  const pathname = usePathname();
  if (pathname?.startsWith("/hospital-partnerships")) return null;

  return (
    <Link
      href="/hospital-partnerships"
      aria-label="Partner With Us — Hospital and healthcare partnerships"
      className="fixed right-0 top-1/2 z-30 flex -translate-y-1/2 items-center rounded-l-xl bg-medblue-600 px-2 py-4 shadow-lg shadow-black/20 transition-colors hover:bg-medblue-700 sm:px-2.5 sm:py-5"
    >
      <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-xs font-bold tracking-wide text-white sm:text-sm">
        Partner With Us
      </span>
    </Link>
  );
}
