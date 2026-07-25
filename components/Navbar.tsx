"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { hotel } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-gold py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="flex flex-col leading-none focus-gold" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl md:text-3xl text-ivory tracking-wide">
            The Royal <span className="text-gold">Hotel</span>
          </span>
          <span className="font-body text-[10px] tracking-widest2 uppercase text-gold-light/80 mt-0.5">
            Dhamtari
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm tracking-wide text-ivory/80 hover:text-gold transition-colors duration-300 focus-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={hotel.phoneHref}
            className="flex items-center gap-2 text-sm text-ivory/80 hover:text-gold transition-colors focus-gold"
          >
            <Phone size={16} className="text-gold" />
            {hotel.phone}
          </a>
          <Link href="/booking" className="btn-gold">
            Book Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ivory focus-gold"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden glass-gold mt-4 mx-4 rounded-sm"
          >
            <ul className="flex flex-col p-6 gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-ivory hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/booking" onClick={() => setOpen(false)} className="btn-gold w-full">
                  Book Now
                </Link>
              </li>
              <li>
                <a href={hotel.phoneHref} className="flex items-center gap-2 text-ivory/80">
                  <Phone size={16} className="text-gold" /> {hotel.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
