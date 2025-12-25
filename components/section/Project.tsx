import React from "react";
import { projects } from "@/data";
import ProjectCard from "../ProjectCard";

const Project = () => {
  return (
    <div id="work" className="w-full">
      <div className="flex flex-col items-center justify-center mb-16">
        <p className="text-sm uppercase text-gray-500 mb-2">
          Things I&apos;ve Built
        </p>
        <h2 className="heading-responsive-size font-bold">My Creations</h2>
      </div>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Project;
