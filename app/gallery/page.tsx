import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of The Royal Hotel Dhamtari's rooms, bathrooms, and interiors — Mini Deluxe to Suite Room.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
