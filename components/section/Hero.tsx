import React from "react";
import StarBackground from "../svg/StarBackground";
import GlowButton from "../GlowButton";
import MountainBackground from "../svg/MountainBackground";
import Moon from "../svg/Moon";
import { TextFade } from "../ui/TextFade";
import { TextHoverEffect } from "../ui/text-hover-effect";

const Hero = () => {
  return (
    <div className="relative h-[100vh] flex flex-col items-center justify-center">
      <StarBackground />
      <Moon />
      <TextFade
        direction="up"
        className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 -mt-24 md:-mt-32"
      >
        <div className="w-full max-w-2xl h-28 md:h-36 lg:h-44">
          <TextHoverEffect text="GINA" />
        </div>
        <p
          className="text-sm md:text-base lg:text-lg italic tracking-wide
            bg-linear-to-t from-gray-600 to-gray-300 text-transparent bg-clip-text"
        >
          &ldquo;Not all those who wander are lost.&rdquo;
        </p>

        <div className="mt-8 flex items-center gap-8 md:gap-16">
          <GlowButton className="bg-white text-black">
            <a href="#about">Who I Am</a>
          </GlowButton>
          <GlowButton className="border-1 text-white">
            <a href="/Gina_Resume_Developer20260222.pdf" download>
              Resume
            </a>
          </GlowButton>
        </div>
      </TextFade>

      <MountainBackground />
    </div>
  );
};
export default Hero;
