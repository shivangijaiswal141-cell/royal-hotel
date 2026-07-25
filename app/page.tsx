import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedRooms from "@/components/FeaturedRooms";
import VideoTour from "@/components/VideoTour";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/Reviews";
import LocationMap from "@/components/LocationMap";
import GalleryPreview from "@/components/GalleryPreview";

export const metadata: Metadata = {
  title: "The Royal Hotel Dhamtari | Premium 4-Star Stay in Chhattisgarh",
  description:
    "Book The Royal Hotel, Dhamtari — premium rooms from ₹1500/night, opposite Ratnabandha Talab. Free WiFi, AC, Smart TV & 24×7 hot water in every room.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedRooms />
      <VideoTour />
      <Facilities />
      <Reviews />
      <GalleryPreview />
      <LocationMap />
    </>
  );
}
