"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { rooms, hotel } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("room") ?? "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: preselected,
    request: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomLabel = rooms.find((r) => r.slug === form.roomType)?.name ?? "Not specified";

    const message = `Booking Enquiry — The Royal Hotel Dhamtari
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Check-in: ${form.checkIn}
Check-out: ${form.checkOut}
Guests: ${form.guests}
Room Type: ${roomLabel}
Special Request: ${form.request || "None"}`;

    const url = `https://wa.me/917024803620?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeIn className="glass-gold p-10 md:p-14 text-center flex flex-col items-center gap-4">
        <span className="eyebrow">Enquiry Sent</span>
        <h3 className="font-display text-3xl text-ivory">Thank You, {form.name.split(" ")[0]}</h3>
        <p className="font-body text-ivory/60 max-w-md">
          Your booking enquiry has been prepared for WhatsApp. If it didn&rsquo;t open
          automatically, call us directly at{" "}
          <a href={hotel.phoneHref} className="text-gold hover:text-gold-light">
            {hotel.phone}
          </a>{" "}
          and we&rsquo;ll confirm your stay right away.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-2"
        >
          Submit Another Enquiry
        </button>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-gold p-8 md:p-12 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
      </div>

      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Check-in Date" name="checkIn" type="date" value={form.checkIn} onChange={handleChange} required />
        <Field label="Check-out Date" name="checkOut" type="date" value={form.checkOut} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-body text-xs tracking-widest2 uppercase text-gold-light/70">
            Guests
          </label>
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="bg-obsidian border border-gold/20 px-4 py-3 font-body text-sm text-ivory focus-gold focus:outline-none focus:border-gold"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-body text-xs tracking-widest2 uppercase text-gold-light/70">
            Room Type
          </label>
          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            required
            className="bg-obsidian border border-gold/20 px-4 py-3 font-body text-sm text-ivory focus-gold focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select a room
            </option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name} — ₹{r.price}/Night
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-body text-xs tracking-widest2 uppercase text-gold-light/70">
          Special Request
        </label>
        <textarea
          name="request"
          value={form.request}
          onChange={handleChange}
          rows={4}
          placeholder="Early check-in, extra bed, airport pickup, etc."
          className="bg-obsidian border border-gold/20 px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/30 focus-gold focus:outline-none focus:border-gold resize-none"
        />
      </div>

      <button type="submit" className="btn-gold w-full md:w-fit">
        Send Booking Enquiry <Send size={16} />
      </button>
      <p className="font-body text-xs text-ivory/40">
        This is a booking enquiry only — no online payment is required. Our team will confirm
        availability and rates with you directly over WhatsApp or phone.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-body text-xs tracking-widest2 uppercase text-gold-light/70">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-obsidian border border-gold/20 px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/30 focus-gold focus:outline-none focus:border-gold"
      />
    </div>
  );
}
