import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/features/Features";
import Experience from "@/components/Experience";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Features />
      <Experience />
      <Specifications />
      <Gallery />

      <ScrollToTop />
    </>
  );
}
