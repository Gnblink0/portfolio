"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socialLinks, navLinks } from "@/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background-card border-t border-border-light mt-16 md:mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Gina&apos;s Portfolio
            </h3>
            <p className="text-text-secondary text-sm">
              Creator and tech enthusiast. I build projects that solve problems
              and explore new ideas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-white transition-colors duration-200 text-sm w-fit"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target={social.icon !== "mail" ? "_blank" : undefined}
                    rel={
                      social.icon !== "mail"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative p-3 rounded-lg bg-background-DEFAULT border border-border-light hover:border-border-hover transition-all duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors duration-300" />
                    <span className="sr-only">{social.name}</span>

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear} Gina. All rights reserved.
            </p>
            <motion.p
              className="text-text-muted text-sm flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Built with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              using Next.js & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;