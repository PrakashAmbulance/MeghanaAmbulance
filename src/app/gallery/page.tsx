import type { Metadata } from "next";
import AmbulanceGallery from "@/components/AmbulanceGallery";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata: Metadata = {
  title: "Ambulance Gallery",
  description:
    "View the Meghana Ambulance Service fleet — front, side, rear and interior views.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-950 py-14 text-white sm:py-16">
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
