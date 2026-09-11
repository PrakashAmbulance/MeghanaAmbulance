import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "Meghana Ambulance",
    description: business.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#06111f",
    theme_color: "#06111f",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
