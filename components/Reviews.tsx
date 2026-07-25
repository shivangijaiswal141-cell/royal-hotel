"use client";

import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Reviews() {
  return (
    <section className="section-pad bg-obsidian bg-gold-radial">
      <SectionHeading
        eyebrow="Guest Voices"
        title="What Our Guests Say"
        description="Real words from real stays at The Royal Hotel, Dhamtari."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {reviews.map((r, i) => (
          <FadeIn
            key={r.name}
            delay={i * 0.1}
            className="relative glass p-8 flex flex-col gap-4 hover:border-gold/30 transition-colors duration-500"
          >
            <Quote className="text-gold/30" size={36} />
            <p className="font-body text-ivory/70 text-sm leading-relaxed">{r.text}</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={14}
                  className={idx < r.rating ? "fill-gold text-gold" : "text-ivory/20"}
                />
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gold/10">
              <span className="font-display text-lg text-ivory">{r.name}</span>
              <span className="text-[11px] font-body tracking-wide uppercase text-gold-light/60">
                {r.stayType}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
