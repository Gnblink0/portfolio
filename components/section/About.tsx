"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="heading-responsive-size font-bold moonlit-heading">
          Who I am
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
        {/* Left — Text */}
        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          <p className="text-lg md:text-xl font-semibold text-text-primary">
            I build products that solve real problems — fast.
          </p>

          <p className="text-text-secondary leading-relaxed">
            I&apos;m a full-stack developer based in Vancouver with a background
            in marketing. Every project I&apos;ve built started from a real pain
            point — mine or someone around me. I don&apos;t clone Spotify for
            practice; I ship tools that people actually use.
          </p>

          <p className="text-text-secondary leading-relaxed">
            What I care about most is delivering a stable product that helps
            people, as quickly as possible. My marketing experience gave me the
            instinct to observe users, validate needs, and communicate with
            non-technical teams. The rise of AI gave me the technical leverage
            I&apos;ve always wanted — I guide AI through the full product
            lifecycle, from database design to deployment, to launch a working
            MVP and iterate from there.
          </p>

          <p className="text-text-secondary leading-relaxed">
            I proved this at Ours TCF — a language platform I took from concept
            to profitability with 100+ paying users, handling everything from
            schema architecture to Stripe integration to spaced-repetition
            algorithms.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Rapid Prototyping",
              "End-to-End Delivery",
              "AI-Augmented Dev",
              "Business Sense",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-full
                  border border-border-light text-text-secondary
                  bg-[rgba(180,200,140,0.05)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className="shrink-0 w-64 md:w-72 lg:w-80"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.215, 0.61, 0.355, 1.0],
          }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-border-light
              shadow-[0_0_30px_rgba(180,200,140,0.08)]"
          >
            <Image
              src="/personal_photo.jpeg"
              alt="Gina waving by the lake"
              width={320}
              height={427}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
