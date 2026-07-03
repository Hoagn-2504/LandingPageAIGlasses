import { features } from "@/data/product";
import BentoCard from "./BentoCard";

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col gap-16">
          <div className="flex w-full justify-center mb-20">
            <div className="flex max-w-3xl flex-col items-center text-center">
              <p className="mb-3 text-base font-semibold uppercase tracking-[0.4em] text-cyan-400">
                Features
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl md:leading-tight">
                Everything You Need
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Right Before Your Eyes
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                IRIS AI Glasses combine intelligent assistance, immersive
                vision, and all-day comfort into one elegant wearable.
              </p>
            </div>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-4 md:grid-flow-row-dense auto-rows-[220px]">
            {features.map((item) => (
              <BentoCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
