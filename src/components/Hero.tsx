import Image from "next/image";
import { ShoppingCart, PlayCircle, Star, Users, Globe } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pb-0 text-white">
      <div className="hero-grid absolute inset-0 opacity-40" />

      <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className="max-w-xl text-5xl font-black leading-tight md:text-7xl">
            The Future Is
            <br />
            In Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Vision
            </span>
          </h1>
          <p className="max-w-lg text-lg leading-8 text-slate-400">
            Discover AI-powered smart glasses that redefine work, travel and
            creativity with seamless real-time assistance.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="group relative flex h-12 w-44 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold shadow-[0_0_30px_rgba(37,99,235,.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(99,102,241,.6)] sm:h-14 sm:w-45">
              <span className="z-10 flex items-center gap-2 text-sm text-white sm:text-base">
                Buy Now
                <ShoppingCart
                  size={26}
                  className="transition duration-300 group-hover:scale-110 group-hover:-rotate-3"
                />
              </span>

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </button>

            <button className="group relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(99,102,241,.55)] lg:h-14 lg:w-45">
              {" "}
              <PlayCircle
                size={26}
                className="text-cyan-400 transition duration-300 group-hover:scale-110"
              />
              Watch Demo
            </button>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-3 sm:gap-4 pt-4">
            <div className="glass flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-5">
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" size={24} />
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  4.9
                </h3>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                User Rating
              </p>
            </div>
            <div className="glass flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-5">
              <div className="flex items-center gap-2">
                <Users className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-3xl">
                  50K+
                </h3>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                Happy Users
              </p>
            </div>

            {/* Card 3: AI Translation (Hoặc thay nội dung tùy ý) */}
            <div className="glass flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:-translate-y-1 hover:bg-white/10 sm:p-5">
              <div className="flex items-center gap-2">
                <Globe className="text-indigo-400" size={24} />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 sm:text-3xl">
                  50+
                </h3>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                Languages
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[400px] w-full items-center justify-center lg:min-h-[600px]">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/30 blur-[100px] animate-pulse md:h-[520px] md:w-[520px] md:blur-[120px]" />

          <div className="absolute h-[330px] w-[330px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-cyan-500/30 md:h-[480px] md:w-[480px]" />

          <div className="relative z-10 h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(37,99,235,0.4)] backdrop-blur-sm transition-all duration-700 ease-out hover:scale-105 hover:border-blue-400/50 hover:shadow-[0_20px_70px_rgba(37,99,235,0.6)] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px]">
            <Image
              src="/images/glassesAI.png"
              alt="Nova AI Glasses"
              sizes="(max-width: 1024px) 100vw, 50vw"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center text-slate-500">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="mt-3 h-10 w-[2px] animate-pulse bg-slate-500" />
        </div>
      </div>
    </section>
  );
}
