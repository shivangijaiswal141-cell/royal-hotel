"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { galleryImages, videoGallery } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function GalleryPageClient() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0">
        <SectionHeading
          eyebrow="Video Gallery"
          title="Watch Before You Book"
          description="A real walkthrough of the property and rooms, and a look at the building itself."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
          {videoGallery.map((v) => (
            <FadeIn key={v.src} className="relative overflow-hidden border border-gold/15 group">
              <video
                src={v.src}
                className={`w-full object-cover ${v.vertical ? "aspect-[9/16]" : "aspect-video"}`}
                muted
                playsInline
                preload="metadata"
              />
              <button
                onClick={() => setActiveVideo(v.src)}
                aria-label={`Play video: ${v.title}`}
                className="absolute inset-0 flex items-center justify-center bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors"
              >
                <span className="w-16 h-16 rounded-full bg-obsidian/50 backdrop-blur border border-gold/40 flex items-center justify-center">
                  <Play size={24} className="text-gold ml-1" fill="currentColor" />
                </span>
              </button>
              <span className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-obsidian/90 to-transparent font-body text-xs tracking-wide text-ivory">
                {v.title}
              </span>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Inside The Royal Hotel"
            description="Browse our rooms, bathrooms, exterior, and interiors — a real look at what awaits you in Dhamtari."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 text-xs font-body tracking-widest2 uppercase transition-all duration-300 border focus-gold ${
                filter === c
                  ? "bg-gold text-obsidian border-gold"
                  : "border-gold/20 text-ivory/60 hover:border-gold/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-14 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <FadeIn key={img.src + i} delay={(i % 6) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setLightbox(img.src)}
                className="relative block w-full overflow-hidden group focus-gold"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/30 transition-colors duration-500 flex items-end p-4">
                  <span className="font-body text-[11px] tracking-widest2 uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.category}
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-obsidian/95 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image src={lightbox} alt="Enlarged gallery photo" fill className="object-contain" />
          </div>
        </motion.div>
      )}

      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-obsidian/95 flex items-center justify-center p-6"
        >
          <button
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center"
          >
            <X size={20} className="text-ivory" />
          </button>
          <video
            src={activeVideo}
            className="max-h-[85vh] max-w-full"
            controls
            autoPlay
            playsInline
          />
        </motion.div>
      )}
    </div>
  );
}
