"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Experience", href: "#experience" },
    { label: "Specifications", href: "#specs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#newsletter" },
  ];

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div
          className="
            relative
            mt-5
            flex
            h-16
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-slate-900/70
            px-8
            backdrop-blur-xl

            lg:h-16
            md:h-14
            sm:h-12

            lg:px-8
            md:px-6
            px-5
          "
        >
          <a href="#" className="flex items-center gap-3">
            <div
              className="
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-sm

                lg:h-14 lg:w-14
                md:h-12 md:w-12
                h-10 w-10
              "
            >
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={500}
                height={300}
                className="h-full w-full scale-125 object-cover"
              />
            </div>

            <div>
              <h1
                className="
                  font-extrabold
                  tracking-wide
                  text-white

                  lg:text-xl
                  md:text-lg
                  text-base
                "
              >
                IRIS
              </h1>

              <p
                className="
                  -mt-1
                  uppercase
                  tracking-[0.35em]
                  text-slate-400

                  lg:text-[11px]
                  text-[10px]
                "
              >
                AI GLASSES
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center lg:gap-12 md:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative
                  font-medium
                  text-slate-300
                  transition
                  duration-300
                  hover:text-white

                  lg:text-base
                  md:text-sm

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-0.5
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              className="
                group
                relative
                hidden
                md:flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(37,99,235,.35)]
                transition
                duration-300
                hover:scale-105
                hover:shadow-[0_10px_35px_rgba(99,102,241,.55)]

                lg:h-10 lg:w-20 lg:text-sm
                md:h-9 md:w-28 md:text-xs
              "
            >
              <span className="relative z-10">Buy</span>

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="
                flex
                md:hidden
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                transition
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`absolute right-0 top-[calc(100%+12px)] z-50 w-45 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
              open
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            }`}
          >
            <nav className="flex flex-col items-center p-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  w-full
                  rounded-2xl
                  px-5
                  py-4
                  text-center
                  text-base
                  font-medium
                  text-slate-300
                  transition
                  duration-300
                  hover:bg-white/5
                  hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
              <div className="my-2 h-px w-full bg-white/10" />
              <button
                onClick={() => setOpen(false)}
                className="
                group
                relative
                mt-2
                flex
                h-8
                w-30
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-sm
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(37,99,235,.35)]
                transition
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_10px_35px_rgba(99,102,241,.55)]"
              >
                <span className="relative z-10">Buy</span>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
