import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
// import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <Testimonials />
      <BlogPreview />
      {/* <CTASection /> */}
    </main>
  );
}
