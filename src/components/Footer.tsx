import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Specifications", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
];

const resources = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { icon: FaGithub, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: Mail, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Background Subtle Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-24">
          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-black tracking-[0.2em] text-transparent">
              IRIS
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-slate-400">
              AI-powered smart glasses designed for work, travel and everyday
              life. Experience the future through intelligent wearable
              technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/50
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]
                  "
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Navigation
            </h3>

            <ul className="mt-8 space-y-5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Resources
            </h3>

            <ul className="mt-8 space-y-5">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center border-t border-white/10 pt-10 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} IRIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
