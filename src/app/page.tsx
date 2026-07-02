import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Specifications />
      <Gallery />
    </>
  );
}
