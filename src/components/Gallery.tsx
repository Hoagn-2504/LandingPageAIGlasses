import Image from "next/image";
import { gallery } from "@/data/product";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div className="flex w-full flex-col items-center text-center gap-16">
            <div className="max-w-2xl">
              <p className="mb-3 uppercase tracking-widest text-blue-400">
                Gallery
              </p>
              <h2 className="mb-4 text-4xl font-bold">Experience Iris</h2>
              <p className="text-slate-400">
                Discover how Iris AI Glasses seamlessly fit into your work,
                travel and everyday life.
              </p>
            </div>
            <div className="grid w-full gap-6 md:grid-cols-2">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      to-transparent
                    "
                  />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
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
