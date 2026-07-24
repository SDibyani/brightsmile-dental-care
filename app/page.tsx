import Hero from "@/components/home/Hero";
import ClinicHighlights from "@/components/home/ClinicHighlights";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClinicHighlights />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}