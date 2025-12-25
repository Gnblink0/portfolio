import React from "react";
import StarBackground from "../svg/StarBackground";
import Typewriter from "../ui/type-animation";
import GlowButton from "../GlowButton";
import MountainBackground from "../svg/MountainBackground";
import Moon from "../svg/Moon";
import { TextFade } from "../ui/TextFade";

const sequence = [
  "I create things for web.",
  3000,
  "I create things for mobile.",
  3000,
  "I create things for easier life.",
  4000,
];
const Hero = () => {
  return (
    <div className="relative h-[100vh] flex flex-col items-center justify-center">
      <StarBackground />
      <Moon />
      <TextFade
        direction="up"
        className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
      >
        <div className="h-8 md:h-10 lg:h-12">
          <Typewriter
            sequence={sequence}
            className="text-center font-bold heading-responsive-size"
          />
        </div>
        <div
          className="mt-4 text-sm md:text-base lg:text-lg font-semibold flex items-center gap-2
            bg-linear-to-t from-gray-600 to-gray-100 text-transparent bg-clip-text"
        >
          <span>Hi, I&apos;m Gina.</span>
          <span>A creator & builder.</span>
        </div>

        <div className="mt-8 flex items-center gap-8 md:gap-16">
          <GlowButton className="bg-white text-black">
            <a href="#work">View My Work</a>
          </GlowButton>
          <GlowButton className="border-1 text-white">
            <a href="https://en.gnblink.com" target="_blank" rel="noopener noreferrer">
              My Blog
            </a>
          </GlowButton>
        </div>
      </TextFade>

      <MountainBackground />
    </div>
  );
};
export default Hero;
