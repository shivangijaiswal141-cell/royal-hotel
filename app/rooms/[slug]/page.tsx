import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { rooms, hotel } from "@/lib/data";
import RoomGallery from "@/components/RoomGallery";
import RoomCard from "@/components/RoomCard";
import FadeIn from "@/components/FadeIn";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} — ₹${room.price}/Night`,
    description: `${room.description} Book the ${room.name} at The Royal Hotel, Dhamtari from ₹${room.price}/night.`,
    alternates: { canonical: `/rooms/${room.slug}` },
  };
}

export default async function RoomDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0">
        <FadeIn className="flex flex-col gap-2 mb-10">
          <span className="eyebrow">The Royal Hotel &middot; Dhamtari</span>
          <h1 className="font-display text-5xl md:text-6xl text-ivory">{room.name}</h1>
          <p className="font-body text-sm text-ivory/50 tracking-wide">
            {room.size} &middot; {room.occupancy} &middot; {room.bed}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <RoomGallery images={room.images} roomName={room.name} />
          </div>

          <FadeIn delay={0.15} className="lg:col-span-2 flex flex-col gap-8">
            <div className="glass-gold p-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-gold-light">₹{room.price}</span>
                <span className="font-body text-ivory/50">/ night</span>
              </div>
              <p className="font-body text-sm text-ivory/60 mt-4 leading-relaxed">
                {room.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href={`/booking?room=${room.slug}`} className="btn-gold flex-1">
                  Book Now <ArrowRight size={16} />
                </Link>
                <a href={hotel.phoneHref} className="btn-outline flex-1">
                  <Phone size={16} /> Call to Book
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-ivory mb-4">Room Amenities</h3>
              <ul className="grid grid-cols-2 gap-3">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 font-body text-sm text-ivory/70">
                    <Check size={16} className="text-gold shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24">
          <h3 className="font-display text-3xl text-ivory mb-8">Other Room Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((r, i) => (
              <RoomCard key={r.slug} room={r} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
