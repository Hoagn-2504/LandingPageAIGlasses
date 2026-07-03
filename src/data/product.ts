import {
  Bot,
  Languages,
  Camera,
  ShieldCheck,
  BatteryCharging,
  Hand,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Instant answers, summaries and intelligent recommendations.",
    icon: Bot,
    size: "large",
  },
  {
    id: 2,
    title: "Live Translation",
    description: "Translate conversations in over 120 languages.",
    icon: Languages,
    size: "small",
  },
  {
    id: 3,
    title: "18 Hours Battery",
    description: "All-day battery life for work and travel.",
    icon: BatteryCharging,
    size: "small",
  },
  {
    id: 4,
    title: "48MP AI Camera",
    description: "Capture every moment with computational photography.",
    icon: Camera,
    size: "wide",
  },
  {
    id: 5,
    title: "Privacy",
    description: "Built-in indicators and encrypted processing.",
    icon: ShieldCheck,
    size: "wide",
  },
  {
    id: 6,
    title: "Gesture Control",
    description: "Navigate naturally using intuitive hand gestures.",
    icon: Hand,
    size: "wide",
  },
];

export const experiences = [
  {
    step: "01",
    title: "Ask Anything",
    description: "Get instant answers without reaching for your phone.",
  },
  {
    step: "02",
    title: "Translate Instantly",
    description: "Communicate naturally in over 120 languages.",
  },
  {
    step: "03",
    title: "Navigate Smarter",
    description: "Real-time directions appear directly in your field of view.",
  },
  {
    step: "04",
    title: "Capture Moments",
    description: "Shoot stunning photos and videos with AI enhancement.",
  },
];

export const specifications = [
  {
    value: "48MP",
    label: "AI Camera",
    description: "Capture every moment with computational photography.",
  },
  {
    value: "18H",
    label: "Battery Life",
    description: "Power through your day with intelligent battery management.",
  },
  {
    value: "65g",
    label: "Ultra Light",
    description: "Designed for maximum comfort during extended wear.",
  },
  {
    value: "OLED",
    label: "Micro Display",
    description: "Crystal-clear visuals with vivid colors and sharp details.",
  },
  {
    value: "Wi-Fi 6",
    label: "Connectivity",
    description: "Fast wireless performance with low latency.",
  },
  {
    value: "IP54",
    label: "Water Resistant",
    description: "Built to withstand everyday splashes and dust.",
  },
];

export const gallery = [
  {
    src: "/images/gallery/gallery-1.png",
    title: "AI Vision",
  },
  {
    src: "/images/gallery/gallery-2.png",
    title: "Remote Meeting",
  },
  {
    src: "/images/gallery/gallery-3.png",
    title: "Travel Anywhere",
  },
  {
    src: "/images/gallery/gallery-4.png",
    title: "Everyday Productivity",
  },
];
