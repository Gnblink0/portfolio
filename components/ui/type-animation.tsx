"use client";

import { TypeAnimation } from "react-type-animation";

interface TypewriterProps {
  className?: string;
  sequence: (string | number)[];
}

const Typewriter = ({ className, sequence }: TypewriterProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      className={className}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
