"use client";
import React from "react";
import { techStacks, categoryDisplayNames, type TechStack } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
  // Group tech stacks by category
  const groupedTechStacks = techStacks.reduce(
    (acc, tech) => {
      const category = tech.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, typeof techStacks>,
  );

  const renderIcon = (tech: TechStack) => {
    if (tech.svg) {
      return (
        <div
          className="w-12 h-12 text-white"
          dangerouslySetInnerHTML={{ __html: tech.svg }}
        />
      );
    }

    if (tech.slug) {
      if (tech.darkmode) {
        return (
          <Image
            src={`https://cdn.simpleicons.org/${tech.slug}/white`}
            alt={tech.name}
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        );
      }
      return (
        <Image
          src={`https://cdn.simpleicons.org/${tech.slug}/${tech.slug}`}
          alt={tech.name}
          className="w-12 h-12 object-contain"
          loading="lazy"
        />
      );
    }

    return null;
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1.0], // use cubic-bezier
      },
    }),
  };

  const TechCard = ({ tech, index }: { tech: TechStack; index: number }) => (
    <motion.div
      key={tech.id}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 1.0,
      }}
      custom={index}
      className="group flex flex-col items-center justify-center p-4 rounded-lg bg-card
        transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-12 h-12 mb-3">{renderIcon(tech)}</div>
      <span className="text-sm text-center text-gray-300 group-hover:text-white">
        {tech.name}
      </span>
    </motion.div>
  );

  return (
    <div id="tech-stack" className="">
      <div className="flex flex-col items-center justify-center mb-12">
        <p className="text-sm uppercase text-gray-500 mb-2">
          I constantly try to improve
        </p>
        <h2 className="heading-responsive-size font-bold">My Tech Stack</h2>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedTechStacks).map(([category, techs]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {
                categoryDisplayNames[
                  category as keyof typeof categoryDisplayNames
                ]
              }
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {techs.map((tech, index) => (
                <TechCard key={tech.id} tech={tech} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
