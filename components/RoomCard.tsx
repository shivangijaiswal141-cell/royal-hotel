"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Room } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function RoomCard({ room, delay = 0 }: { room: Room; delay?: number }) {
  return (
    <FadeIn delay={delay} className="group relative flex flex-col overflow-hidden border border-gold/10 bg-charcoal hover:border-gold/40 transition-colors duration-500">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 glass px-4 py-2">
          <span className="font-display text-xl text-gold-light">₹{room.price}</span>
          <span className="text-[10px] text-ivory/60 tracking-wide"> /night</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="font-display text-2xl text-ivory">{room.name}</h3>
          <p className="font-body text-xs tracking-widest2 uppercase text-gold-light/70 mt-1">
            {room.size} &middot; {room.occupancy}
          </p>
        </div>
        <p className="font-body text-sm text-ivory/60 leading-relaxed flex-1">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((a) => (
            <span key={a} className="text-[11px] font-body px-3 py-1 border border-gold/20 text-ivory/60 rounded-full">
              {a}
            </span>
          ))}
        </div>
        <Link
          href={`/rooms/${room.slug}`}
          className="mt-2 inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors focus-gold"
        >
          View Details <ArrowUpRight size={16} />
        </Link>
      </div>
    </FadeIn>
  );
}
