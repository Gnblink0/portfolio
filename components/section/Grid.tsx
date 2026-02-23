"use client";

import { KeyboardIcon } from "@radix-ui/react-icons";
import { IconCloudComponent } from "../IconCloud";
import Globe from "../Globe";
import { Copy } from "lucide-react";
import Image from "next/image";

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
    contentTop: true,
    background: (
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[320px] w-[320px] md:h-[400px] md:w-[400px]">
        <Globe />
      </div>
    ),
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
      <div className="relative h-full flex flex-col items-center px-4">
        {/* Memoji peeking from top-left corner */}
        <Image
          src="/memoji.png"
          alt="Gina's Memoji"
          width={130}
          height={130}
          className="absolute -top-8 -left-3 pointer-events-none"
        />
        <p className="text-3xl font-bold mt-auto">Say Hi!</p>
        <ConfettiButton
          className="mt-3 mb-auto inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-3xl
            bg-white text-black transition-all
            shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
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
