"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        border border-white/10
        bg-white/10
        backdrop-blur-xl
        shadow-lg shadow-cyan-500/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400/50
        hover:bg-cyan-500
        hover:shadow-cyan-500/40
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <ChevronUp
        size={24}
        className="text-white transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
}
