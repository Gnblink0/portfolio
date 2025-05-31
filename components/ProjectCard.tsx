"use client";
import React from "react";
import { projects } from "@/data";
import GlowButton from "./GlowButton";

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div
      className="group relative rounded-xl bg-card border border-border-light p-6 transition-all
        duration-300 hover:scale-[1.02] hover:border-border-hover hover:glow-sm
        backdrop-blur-sm"
    >
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p className="text-sm text-text-muted mt-1">{project.time}</p>
      </div>

      {/* Project Description */}
      <p className="text-text-secondary mb-6">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-lg bg-background-DEFAULT/50 border border-border-light
              text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="flex gap-4">
        {project.codeLink && (
          <GlowButton
            onClick={() => window.open(project.codeLink, "_blank")}
            className="px-4 py-2 text-sm"
          >
            View Code
          </GlowButton>
        )}
        {project.liveLink && (
          <GlowButton
            onClick={() => window.open(project.liveLink, "_blank")}
            className="px-4 py-2 text-sm"
          >
            Live Demo
          </GlowButton>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
