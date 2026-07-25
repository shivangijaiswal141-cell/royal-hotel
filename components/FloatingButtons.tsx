"use client";

import { Phone, MessageCircle } from "lucide-react";
import { hotel } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={hotel.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-card hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
      <a
        href={hotel.phoneHref}
        aria-label="Call The Royal Hotel"
        className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300"
      >
        <Phone size={24} className="text-obsidian" fill="#0A0A0B" />
      </a>
    </div>
  );
}
