"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { hotel, heroVideo, heroVideoPoster } from "@/lib/data";

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        poster={heroVideoPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
      <div className="absolute inset-0 bg-obsidian/20" />

      {/* Signature: animated gold corner frame */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pointer-events-none absolute inset-6 md:inset-10 border border-gold/25"
      >
        {[
          "top-0 left-0 border-t-2 border-l-2",
          "top-0 right-0 border-t-2 border-r-2",
          "bottom-0 left-0 border-b-2 border-l-2",
          "bottom-0 right-0 border-b-2 border-r-2",
        ].map((pos, i) => (
          <span key={i} className={`absolute w-10 h-10 border-gold ${pos}`} />
        ))}
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow mb-6"
        >
          Avenue Tower &middot; Dhamtari &middot; Chhattisgarh
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl text-ivory leading-[0.95] max-w-4xl"
        >
          The Royal Hotel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-body text-ivory/70 text-base md:text-lg mt-6 max-w-xl"
        >
          {hotel.tagline} — refined rooms, warm hospitality, and a prime address opposite Ratnabandha Talab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link href="/booking" className="btn-gold">
            Book Now <ArrowRight size={16} />
          </Link>
          <a href={hotel.phoneHref} className="btn-outline">
            <Phone size={16} /> Call Now
          </a>
          <a href={hotel.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </motion.div>
      </div>

      <button
        onClick={toggleSound}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-8 right-8 z-10 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/50 transition-colors"
      >
        {muted ? <VolumeX size={18} className="text-ivory" /> : <Volume2 size={18} className="text-ivory" />}
      </button>
    </section>
  );
}
