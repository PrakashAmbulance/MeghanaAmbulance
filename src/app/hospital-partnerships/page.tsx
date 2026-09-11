import type { Metadata } from "next";
import B2BSection from "@/components/B2BSection";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Hospital Ambulance Partnerships",
  description:
    "Meghana Ambulance Service partners with hospitals, nursing homes & clinics in Bangalore for patient transportation and ambulance coordination.",
  keywords: [
    "ambulance service for hospitals Bangalore",
    "hospital ambulance tie-up Bangalore",
    "ambulance partnership Bangalore",
    "patient transport for hospitals",
    "ambulance vendor for nursing homes",
    "B2B ambulance service Bangalore",
    "ambulance for diagnostic centres Bangalore",
    "corporate ambulance tie-up Bangalore",
  ],
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
