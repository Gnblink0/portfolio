"use client";
import React from "react";
import { workExperiences } from "@/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <div className="flex flex-col items-center justify-center mb-16">
        <p className="text-sm uppercase text-gray-500 mb-2">
          Where I&apos;ve worked
        </p>
        <h2 className="heading-responsive-size font-bold moonlit-heading">
          Work Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-light" />

        <div className="space-y-12">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.15 * index,
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[11px] md:left-[19px] top-1.5 w-2.5 h-2.5 rounded-full bg-[rgba(180,200,140,0.6)] border-2 border-[rgba(180,200,140,0.3)] shadow-[0_0_8px_rgba(180,200,140,0.3)]" />

              {/* Card */}
              <div
                className="rounded-lg bg-card border border-border-light p-5 md:p-6
                  transition-all duration-300 hover:border-border-hover
                  hover:shadow-[0_0_15px_rgba(180,200,140,0.1)]"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-4">
                  <span className="text-text-secondary font-medium">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline text-text-muted">·</span>
                  <span className="text-text-muted text-sm">
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-[rgba(180,200,140,0.5)] mt-1 shrink-0">
                        ▹
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
