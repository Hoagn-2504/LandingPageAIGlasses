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
      text-center
      "
    >
      <div className="mb-4 flex items-center justify-center gap-4">
        <Icon className="h-7 w-7 text-blue-400" />

        <h3 className="text-xl font-semibold leading-none">{title}</h3>
      </div>

      <p className="leading-7 text-slate-400">{description}</p>
    </div>
  );
}
