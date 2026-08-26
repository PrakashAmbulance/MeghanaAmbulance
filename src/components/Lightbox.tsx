"use client";

import Image from "@/components/StaticImage";
import { useEffect, useCallback } from "react";
import type { GalleryImage } from "@/lib/gallery";
import { CloseIcon } from "@/components/icons";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const image = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ambulance gallery image: ${image.caption}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      <div
        className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-navy-900">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-center text-sm font-semibold text-white">{image.caption}</p>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % images.length)}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
