import Image from "next/image";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  size: string;
};

export default function BentoCard({
  title,
  description,
  icon: Icon,
  image,
  size,
}: Props) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40",
        {
          "md:col-span-2 md:row-span-2": size === "large",
          "md:col-span-2": size === "wide",
        },
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          fill
          priority
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/20" />

      <div className="absolute inset-0 z-[2] bg-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40">
            <Icon
              size={28}
              className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
            />
          </div>

          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>

        <p className="mt-6 w-full text-base leading-7 font-medium text-white/90">
          {description}
        </p>
        <div className="mt-auto pt-8">
          <div className="h-1 w-0 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-150" />
        </div>
      </div>
    </div>
  );
}
