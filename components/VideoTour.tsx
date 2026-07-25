"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { videoGallery } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function VideoTour() {
  const tour = videoGallery.find((v) => v.vertical);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !el.paused) {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  if (!tour) return null;

  return (
    <section className="section-pad bg-charcoal">
      <SectionHeading
        eyebrow="See It For Yourself"
        title="A Walk Through The Royal Hotel"
        description="A real, unedited walkthrough of our rooms and property — exactly what you'll find when you check in."
      />

      <div className="flex justify-center mt-14">
        <FadeIn className="relative w-full max-w-[340px]">
          {/* Phone-style frame for the vertical tour video */}
          <div className="relative rounded-[2.2rem] border-[6px] border-surface bg-obsidian overflow-hidden shadow-card aspect-[9/16]">
            <video
              ref={videoRef}
              src={tour.src}
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              preload="metadata"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-obsidian rounded-full" />
            <button
              onClick={toggle}
              aria-label={playing ? "Pause tour video" : "Play tour video"}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <span
                className={`w-16 h-16 rounded-full bg-obsidian/50 backdrop-blur border border-gold/40 flex items-center justify-center transition-opacity duration-300 ${
                  playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                {playing ? (
                  <Pause size={26} className="text-gold" fill="currentColor" />
                ) : (
                  <Play size={26} className="text-gold ml-1" fill="currentColor" />
                )}
              </span>
            </button>
          </div>
          <p className="text-center font-body text-xs text-ivory/40 mt-4">{tour.title}</p>
        </FadeIn>
      </div>
    </section>
  );
}
