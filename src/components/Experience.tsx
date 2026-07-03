import Image from "next/image";
import { experiences } from "@/data/product";

export default function Experience() {
  return (
    <section id="experience" className="py-32 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-16">
          <div className="flex w-full justify-center mb-20">
            <div className="flex flex-col items-center text-center">
              <p className="mb-3 text-base font-semibold uppercase tracking-[0.4em] text-cyan-400">
                Experience
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl md:leading-tight">
                AI That Moves
                <span className="gradient-text block"> With You</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/images/experience.png"
                alt="Experience"
                width={700}
                height={900}
                priority
                className="rounded-[40px] shadow-2xl"
              />
            </div>

            <div className="space-y-10">
              {experiences.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                      {item.step}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
