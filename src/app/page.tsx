import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/features/Features";
import Experience from "@/components/Experience";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Experience />
        <Specifications />
        <Gallery />
        <Newsletter />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
