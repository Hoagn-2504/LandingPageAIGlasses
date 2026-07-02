import Image from "next/image";
import { ArrowRight, PlayCircle, Star } from "lucide-react"; // Đã xóa bớt import của các icon không còn dùng (ScanSearch, BatteryCharging)

export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pb-0">
      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-40" />

      {/* Blur Decorations */}
      <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        {/* ================= LEFT COLUMN ================= */}
        <div>
          <h1 className="max-w-xl text-5xl font-black leading-tight md:text-7xl">
            The Future Is
            <br />
            In Your <span className="gradient-text">Vision</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
            Discover AI-powered smart glasses that redefine work, travel and
            creativity with seamless real-time assistance.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
              Buy Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="glass flex items-center gap-2 rounded-full px-8 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <PlayCircle size={20} className="text-cyan-400" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <Star
                className="mb-2 fill-yellow-400 text-yellow-400"
                size={20}
              />
              <h3 className="text-2xl font-bold">4.9</h3>
              <p className="mt-1 text-sm text-slate-400">User Rating</p>
            </div>

            <div className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                50K+
              </h3>
              <p className="mt-1 text-sm text-slate-400">Happy Users</p>
            </div>

            <div className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                18H
              </h3>
              <p className="mt-1 text-sm text-slate-400">Battery</p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[400px] w-full items-center justify-center lg:min-h-[600px]">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/30 blur-[100px] animate-pulse md:h-[520px] md:w-[520px] md:blur-[120px]" />

          <div className="absolute h-[330px] w-[330px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-cyan-500/30 md:h-[480px] md:w-[480px]" />

          {/* Hình tròn chứa Ảnh */}
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
