import FeatureCard from "./FeatureCard";
import { features } from "@/data/product";

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div className="flex w-full flex-col items-center justify-center mb-16 text-center">
            <div className="max-w-2xl">
              <p className="mb-3 font-medium uppercase tracking-widest text-blue-400">
                Features
              </p>

              <h2 className="mb-4 text-4xl font-bold">Why Choose Iris</h2>

              <p className="text-slate-400">
                Powerful AI features designed to simplify your daily life,
                improve productivity and enhance every experience.
              </p>
            </div>
          </div>

          <div
            className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
