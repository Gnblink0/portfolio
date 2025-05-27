"use client";

import { KeyboardIcon } from "@radix-ui/react-icons";
import { IconCloudComponent } from "../IconCloud";
import { Copy } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { hobbies } from "@/data";
import GlowButton from "../GlowButton";
import { ConfettiButton } from "../ui/confetti";

const features = [
  {
    name: "Ideas Generator",
    description: "My mind runs on side projects.",
    href: "#work",
    cta: "My Previous Works",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-2",
  },
  {
    name: "Based in Vancouver",
    description: "I'm currently based in Vancouver, Canada.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: KeyboardIcon,
    name: "Tech Enthusiast",
    description: "I love to learn new things.",
    href: "#tech-stack",
    cta: "My Tech Stack",
    background: (
      <div className="absolute -right-5 -top-20 opacity-60">
        <IconCloudComponent />
      </div>
    ),
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "contact",
    className: "md:col-span-1",
    background: (
      <div className="mt-16 flex flex-col items-center justify-center">
        <p className="text-center text-3xl font-bold">Let&apos;s Connect</p>
        <ConfettiButton
          className="mt-4 inline-flex items-center gap-2"
          onClick={() => {
            navigator.clipboard.writeText("Gnblink44@gmail.com");
          }}
        >
          <Copy className="h-4 w-4" />
          Gnblink44@gmail.com
        </ConfettiButton>
      </div>
    ),
  },
  {
    name: "Lover of Many Things",
    background: (
      <div className="px-10 py-8">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="inline-flex gap-2 px-2">
            <GlowButton className="bg-white text-black">
              <span>{hobby.name}</span>
              <span>{hobby.emoji}</span>
            </GlowButton>
          </div>
        ))}
      </div>
    ),
    className: "md:col-span-2 md:row-span-1",
  },
];

export function Grid() {
  return (
    <div className="">
      <BentoGrid className="relative">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
