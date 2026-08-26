import type { Metadata } from "next";
import B2BSection from "@/components/B2BSection";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Hospital & Healthcare Partnerships",
  description:
    "Meghana Ambulance Service partners with hospitals, nursing homes, clinics, diagnostic centres and healthcare institutions for patient transportation and ambulance coordination in Bangalore.",
  alternates: { canonical: "/hospital-partnerships" },
};

export default function HospitalPartnershipsPage() {
  return (
    <>
      <section className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-page text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Hospital &amp; Healthcare Partnerships
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            {business.name} supports healthcare organizations across
            Bangalore with patient transportation and ambulance coordination.
          </p>
        </div>
      </section>
      <B2BSection />
    </>
  );
}
