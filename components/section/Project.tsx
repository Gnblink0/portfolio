import React from 'react'
import { projects } from '@/data'
import ProjectCard from '../ProjectCard'

const Project = () => {
  return (
    <div id="work">
      <div className="flex flex-col items-center justify-center">
      <p className="text-sm uppercase text-gray-500 mb-2">real-world results</p>
      <h2 className="heading-responsive-size font-bold">Featured Projects</h2>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project