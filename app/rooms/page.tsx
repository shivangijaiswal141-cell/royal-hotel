import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Explore The Royal Hotel Dhamtari's room categories — Mini Deluxe, Deluxe, Super Deluxe & Suite Room — starting at ₹1500/night. Free WiFi, AC & premium bedding in every room.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0">
        <SectionHeading
          eyebrow="Accommodation"
          title="Our Rooms & Rates"
          description="Four categories, each finished to a standard of comfort you'd expect from a five-star address — at a four-star price. Every room includes free WiFi, air conditioning, a smart TV, and round-the-clock hot water."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {rooms.map((room, i) => (
            <RoomCard key={room.slug} room={room} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}
