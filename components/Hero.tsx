import React from "react";
import StarBackground from "./StarBackground";
import Typewriter from "./ui/type-animation";
import GlowButton from "./glow-button";
import GeneralButton from "./general-button";
import MountainBackground from "./MountainBackground";
import Moon from "./Moon";

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
      <div className="h-8 md:h-10 lg:h-12">
        <Typewriter
          sequence={sequence}
          className="text-center font-bold text-2xl md:text-4xl lg:text-5xl"
        />
      </div>

      <div
        className="mt-4 text-sm md:text-base lg:text-lg font-semibold flex items-center gap-2
          bg-linear-to-t from-gray-100 to-gray-600 text-transparent bg-clip-text"
      >
        <span>Hi, I&apos;m Gina.</span>
        <span>A full stack developer.</span>
      </div>

      <div className="mt-8 flex items-center gap-8 md:gap-16">
        <GlowButton>Get in Touch</GlowButton>
        <GeneralButton className="border-1 text-white">
          <a href="/Resume.pdf" target="_blank">
            Resume
          </a>
        </GeneralButton>
      </div>

      <MountainBackground/>
    </div>
  );
};
export default Hero;
