"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` z-100 fixed left-0 right-0 mx-auto flex justify-center  h-10
        md:h-16 rounded-md md:rounded-2xl bg-[#050e24] backdrop-blur-md
        shadow-[0_0_30px_rgba(73,160,255,0.15)] border border-[#233554]/30
        transition-all duration-300 hover:shadow-[0_0_40px_rgba(73,160,255,0.2)]
        hover:border-[#233554]/40
        ${isScrolled ? "top-0 rounded-none w-full" : "top-4 w-9/10 md:w-1/2 rounded-md md:rounded-2xl"} `}
    >
      <div className="hidden md:flex items-center space-x-20 font-bold">
        <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
          Home
        </a>
        <a
          href="#about"
          className="text-gray-300 hover:text-white cursor-pointer"
        >
          About
        </a>
        <a
          href="#work"
          className="text-gray-300 hover:text-white cursor-pointer"
        >
          Work
        </a>
        <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
          Blog
        </a>
        <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
