import type { Metadata } from "next";
// 1. Import your CTA component from @/components/home/CTA
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Book Appointment | BrightSmile Dental Care",
  description: "Schedule your visit with our expert dental team today.",
};

export default function BookingPage() {
  return (
    <main>
      {/* 2. Render the CTA component */}
      <CTA />
    </main>
  );
}