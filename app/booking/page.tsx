import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Send a booking enquiry to The Royal Hotel, Dhamtari. No online payment required — we confirm your stay directly over phone or WhatsApp.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0 max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Reserve Your Stay"
          title="Book Now"
          description="Fill in your details below and we'll confirm availability directly — no online payment needed."
        />

        <div className="mt-14">
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
