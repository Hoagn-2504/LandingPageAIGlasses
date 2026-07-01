import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:bg-white/10
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20">
        <Icon className="h-7 w-7 text-blue-400" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="leading-7 text-slate-400">{description}</p>
    </div>
  );
}
