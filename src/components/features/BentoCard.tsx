import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  size: string;
};

export default function BentoCard({
  title,
  description,
  icon: Icon,
  size,
}: Props) {
  return (
    <div
      className={clsx(
        "group relative flex flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10",
        {
          "md:col-span-2 md:row-span-2": size === "large",
          "md:col-span-2": size === "wide",
        },
      )}
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 transition group-hover:scale-110">
        <Icon className="text-cyan-400" size={32} />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 max-w-sm leading-7 text-slate-400">{description}</p>
      </div>

      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl transition group-hover:scale-125 pointer-events-none" />
    </div>
  );
}
