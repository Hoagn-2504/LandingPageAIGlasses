import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Experience", href: "#experience" },
    { label: "Specifications", href: "#specs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#newsletter" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div className="mt-5 flex h-16 items-center justify-between rounded-full border border-white/10 bg-slate-900/70 pl-8 pr-12 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={500}
                height={300}
                className="h-full w-full scale-125 object-cover"
              />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-wide text-white">
                IRIS
              </h1>
              <p className="-mt-1 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                AI GLASSES
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-12 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-base font-medium text-slate-300 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="group relative flex h-10 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,.35)] transition duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(99,102,241,.55)] lg:w-20">
            <span className="relative z-10">Buy</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
