import type { Metadata } from "next";
import AmbulanceGallery from "@/components/AmbulanceGallery";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata: Metadata = {
  title: "Ambulance Gallery",
  description:
    "See the Meghana Ambulance Service fleet up close — front, side, rear and interior views. 24/7 ambulance service across Bangalore, available for booking now.",
  keywords: [
    "ambulance photos Bangalore",
    "ambulance fleet Bangalore",
    "AC ambulance Bangalore",
    "advanced life support ambulance Bangalore",
    "ambulance interior equipment",
    "ambulance vehicle images Bangalore",
    "private ambulance Bangalore gallery",
  ],
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-page text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ambulance Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            A closer look at the ambulance our team operates in Bangalore.
          </p>
        </div>
      </section>
      <AmbulanceGallery />
      <ContactTeaser />
    </>
  );
}
