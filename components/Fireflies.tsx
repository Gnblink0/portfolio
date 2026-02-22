"use client";
import React from "react";

const FIREFLY_COUNT = 18;

// Pre-generated random positions and timing so they're consistent across renders
const fireflies = Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 37 + 13) % 90)}%`,
  top: `${8 + ((i * 53 + 7) % 84)}%`,
  size: 2 + (i % 3),
  floatDuration: 6 + (i % 5) * 2,
  glowDuration: 4 + (i % 7) * 1.5,
  floatDelay: (i * 1.3) % 8,
  glowDelay: (i * 2.1) % 10,
  // Mix of warm yellow and green-yellow firefly colors
  color: i % 3 === 0 ? "#d4e080" : i % 3 === 1 ? "#e8d06a" : "#b8d868",
}));

const Fireflies = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            backgroundColor: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px ${f.color}`,
            animation: `firefly-float ${f.floatDuration}s ease-in-out ${f.floatDelay}s infinite, firefly-glow ${f.glowDuration}s ease-in-out ${f.glowDelay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
