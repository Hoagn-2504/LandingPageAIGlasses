import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Specifications",
      href: "#specs",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#newsletter",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div className="mt-5 flex h-16 items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-7 backdrop-blur-xl">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white border border-gray-200 shadow-sm">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={500}
                height={300}
                className="h-full w-full object-cover scale-125"
              />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-wide">IRIS</h1>
              <p className="-mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                AI GLASSES
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30">
            Pre-order
          </button>
        </div>
      </div>
    </header>
  );
}
