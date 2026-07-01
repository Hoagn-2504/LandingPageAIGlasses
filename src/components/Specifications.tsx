import { specifications } from "@/data/product";

export default function Specifications() {
  return (
    <section id="specs" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div className="flex w-full flex-col items-center text-center">
            <div className="max-w-2xl">
              <p className="mb-3 uppercase tracking-widest text-blue-400">
                Specifications
              </p>

              <h2 className="mb-4 text-4xl font-bold">
                Built for Everyday Innovation
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
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition
                  duration-300
                  hover:border-blue-500/40
                  hover:-translate-y-2
                "
              >
                <h3 className="mb-2 text-4xl font-bold text-blue-400">
                  {item.value}
                </h3>

                <p className="text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
