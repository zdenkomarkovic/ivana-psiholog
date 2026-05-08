import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import GostovanjaSection from "@/components/GostovanjaSection";
import SaradniciSection from "@/components/SaradniciSection";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
// import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <GostovanjaSection />
      <SaradniciSection />
      <Testimonials />
      <BlogPreview />
      {/* <CTASection /> */}
    </main>
  );
}
