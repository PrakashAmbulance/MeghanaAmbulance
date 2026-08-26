"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";
import Lightbox from "@/components/Lightbox";

export default function AmbulanceGallery({
  compact,
}: {
  compact?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const images = compact ? galleryImages.slice(0, 4) : galleryImages;

  return (
    <section id="gallery" className="bg-medblue-50/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Our Ambulance Fleet
          </h2>
          <p className="mt-3 text-ink-500">
            A closer look at the ambulance our team operates in Bangalore.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900 shadow-sm"
                aria-label={`View larger image: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left text-xs font-semibold text-white">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-ink-500">
            Gallery images are being updated. Please check back soon.
          </p>
        )}

        {compact && (
          <div className="mt-8 text-center">
            <Link href="/gallery" className="text-sm font-bold text-medblue-600 hover:underline">
              View full gallery &rarr;
            </Link>
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
