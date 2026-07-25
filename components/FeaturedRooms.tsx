import { rooms } from "@/lib/data";
import RoomCard from "./RoomCard";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedRooms() {
  return (
    <section className="section-pad bg-obsidian">
      <SectionHeading
        eyebrow="Accommodation"
        title="Rooms Designed for Rest"
        description="Four categories, one standard of comfort — each room pairs premium furnishings with the essentials that matter, from air conditioning to round-the-clock hot water."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {rooms.map((room, i) => (
          <RoomCard key={room.slug} room={room} delay={i * 0.1} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Link href="/rooms" className="btn-outline">
          View All Rooms <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
