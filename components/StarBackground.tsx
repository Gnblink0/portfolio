// components/StarBackground.tsx
const StarBackground = () => {
  // Generate three sets of stars of different sizes
  const smallStars = Array.from({ length: 100 }, () => ({
    cx: Math.random() * 100 + "%",
    cy: Math.random() * 100 + "%",
    r: 0.5, // size of the star
    animationDelay: `${Math.random() * 5}s`, // delay of the animation
  }));

  const mediumStars = Array.from({ length: 30 }, () => ({
    cx: Math.random() * 100 + "%",
    cy: Math.random() * 100 + "%",
    r: 0.8,
    animationDelay: `${Math.random() * 5}s`,
  }));

  const largeStars = Array.from({ length: 10 }, () => ({
    cx: Math.random() * 100 + "%",
    cy: Math.random() * 100 + "%",
    r: 1.2,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#061E31] to-[#040d30]">
      <svg className="w-full h-full">
        {/* small stars */}
        {smallStars.map((star, i) => (
          <circle
            key={`small-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            className="animate-[twinkle_4s_ease-in-out_infinite]"
            style={{
              animationDelay: star.animationDelay,
              animationFillMode: "both",
              opacity: 1,
            }}
          />
        ))}

        {/* medium stars */}
        {mediumStars.map((star, i) => (
          <circle
            key={`medium-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            className="animate-[twinkle_5s_ease-in-out_infinite]"
            style={{
              animationDelay: star.animationDelay,
              animationFillMode: "both",
              opacity: 1,
            }}
          />
        ))}

        {/* large stars */}
        {largeStars.map((star, i) => (
          <circle
            key={`large-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            className="animate-[twinkle_6s_ease-in-out_infinite]"
            style={{
              animationDelay: star.animationDelay,
              animationFillMode: "both",
              opacity: 1,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default StarBackground;
