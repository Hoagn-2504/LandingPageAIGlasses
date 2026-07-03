import { specifications } from "@/data/product";

export default function Specifications() {
  return (
    <section id="specs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex w-full flex-col items-center text-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-base font-semibold uppercase tracking-[0.4em] text-cyan-400">
                Specifications
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl md:leading-tight">
                Built for Everyday
                <span className="gradient-text block">Innovation</span>
              </h2>

              <p className="text-slate-400">
                Every detail is engineered to deliver an exceptional AI-powered
                experience.
              </p>
            </div>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specifications.map((item) => (
              <div
                key={item.label}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-between
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  md:p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.15)]
                "
              >
                <div className="absolute -top-20 right-1/2 h-40 w-40 translate-x-1/2 rounded-full bg-cyan-500/10 blur-[50px] transition duration-500 group-hover:scale-150 group-hover:bg-cyan-500/20" />

                <div className="relative z-10 flex h-full w-full flex-col items-center text-center">
                  <div className="mt-auto flex flex-col items-center">
                    <h3 className="mb-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-4xl font-black tracking-tighter text-transparent lg:text-5xl">
                      {item.value}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-1.5">
                    <div className="h-1 w-1.5 rounded-full bg-cyan-400/60" />
                    <div className="h-1 w-8 rounded-full bg-blue-500/40 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-400" />
                    <div className="h-1 w-1.5 rounded-full bg-cyan-400/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
