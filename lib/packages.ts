export type PackageOption = {
  id: string;
  name: string;
  tag: string;
  tagClass: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
};

export const packages: PackageOption[] = [
  {
    id: "brand",
    name: "The Brand",
    tag: "Starter",
    tagClass: "tag-starter",
    description:
      "Premium website + personal brand suite. Your story, classes, booking, media kit - one polished place that shows the world who you are.",
    features: [
      "Custom Design",
      "Mobile First",
      "SEO",
      "Media Kit",
      "Booking",
      "1 Yr Hosting",
    ],
    price: "$1,500",
    priceNote: "one-time",
  },
  {
    id: "engine",
    name: "The Engine",
    tag: "Growth",
    tagClass: "tag-growth",
    description:
      "AI social media automation. Your voice, your personality - content production, scheduling, and analytics handled by our Social Media Orchestra.",
    features: [
      "Multi-Platform",
      "AI Content",
      "Auto-Schedule",
      "Analytics",
      "Campaign Mgmt",
    ],
    price: "$3,000",
    priceNote: "setup \u00b7 $300/mo",
  },
  {
    id: "fullstack",
    name: "The Full Stack",
    tag: "Best Value",
    tagClass: "tag-full",
    description:
      "Everything. Website + social engine + business automation + video pipeline. One unified system for your entire operation.",
    features: [
      "Website",
      "Social Auto",
      "Biz Ops",
      "Video Pipeline",
      "Email",
      "Priority Support",
    ],
    price: "$7,500",
    priceNote: "setup \u00b7 $500/mo",
  },
];

export function buildCtaHref(selectedOption: PackageOption): string {
  return `mailto:admin@taurusai.io?subject=${encodeURIComponent(
    `I want ${selectedOption.name} - Tera`,
  )}&body=${encodeURIComponent(
    `Effin, I looked at the package. I want ${selectedOption.name}. Let's talk at 2:30.`,
  )}`;
}
