import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="py-24">
      <div className="container grid gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-blue-400 uppercase">AI Powered</p>

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            The Future
            <br />
            Is In
            <br />
            Your Vision
          </h1>

          <p className="mb-8 text-slate-400">
            Smart glasses powered by artificial intelligence. Work smarter.
            Travel easier. Create faster.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-4">
              Buy Now
            </button>

            <button className="rounded-full border border-slate-500 px-8 py-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/glassesAI.png"
            alt="glasses"
            width={650}
            height={650}
            priority
          />
        </div>
      </div>
    </section>
  );
}
