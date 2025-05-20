import React from "react";
import { techStacks, categoryDisplayNames } from "@/data";

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

  return (
    <div id="tech-stack">
      <div className="flex flex-col items-center justify-center mb-4">
        <p className="text-sm uppercase text-gray-500 mb-2">
          I constantly try to improve
        </p>
        <h2 className="heading-responsive-size font-bold">My Tech Stack</h2>
      </div>

      <div>
        {Object.entries(groupedTechStacks).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-3xl">{categoryDisplayNames[category as keyof typeof categoryDisplayNames]}</h3>
            <div>
              {techs.map((tech) => (
                <div key={tech.id}>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
