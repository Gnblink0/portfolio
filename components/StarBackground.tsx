// components/StarBackground.tsx
const StarBackground = () => {
  // Fixed positions for all stars
  const smallStars = [
    // Top section
    { cx: "5%", cy: "10%", r: 0.5, animationDelay: "0.5s" },
    { cx: "15%", cy: "5%", r: 0.5, animationDelay: "1.2s" },
    { cx: "25%", cy: "15%", r: 0.5, animationDelay: "2.3s" },
    { cx: "35%", cy: "8%", r: 0.5, animationDelay: "3.1s" },
    { cx: "45%", cy: "12%", r: 0.5, animationDelay: "2.7s" },
    { cx: "60%", cy: "7%", r: 0.5, animationDelay: "1.8s" },
    { cx: "75%", cy: "15%", r: 0.5, animationDelay: "3.2s" },
    { cx: "85%", cy: "10%", r: 0.5, animationDelay: "2.5s" },
    { cx: "95%", cy: "5%", r: 0.5, animationDelay: "1.5s" },
    // Middle section
    { cx: "10%", cy: "30%", r: 0.5, animationDelay: "2.1s" },
    { cx: "20%", cy: "45%", r: 0.5, animationDelay: "3.4s" },
    { cx: "30%", cy: "35%", r: 0.5, animationDelay: "1.7s" },
    { cx: "50%", cy: "40%", r: 0.5, animationDelay: "2.9s" },
    { cx: "65%", cy: "35%", r: 0.5, animationDelay: "1.4s" },
    { cx: "80%", cy: "45%", r: 0.5, animationDelay: "3.6s" },
    { cx: "90%", cy: "30%", r: 0.5, animationDelay: "2.2s" },
    // Bottom section
    { cx: "8%", cy: "75%", r: 0.5, animationDelay: "1.9s" },
    { cx: "18%", cy: "85%", r: 0.5, animationDelay: "3.3s" },
    { cx: "28%", cy: "70%", r: 0.5, animationDelay: "2.6s" },
    { cx: "40%", cy: "80%", r: 0.5, animationDelay: "1.6s" },
    { cx: "55%", cy: "75%", r: 0.5, animationDelay: "3.8s" },
    { cx: "70%", cy: "85%", r: 0.5, animationDelay: "2.4s" },
    { cx: "85%", cy: "80%", r: 0.5, animationDelay: "1.3s" },
    { cx: "95%", cy: "90%", r: 0.5, animationDelay: "3.7s" },
  ];

  const mediumStars = [
    // Top area
    { cx: "20%", cy: "20%", r: 0.8, animationDelay: "1.2s" },
    { cx: "40%", cy: "25%", r: 0.8, animationDelay: "2.8s" },
    { cx: "60%", cy: "15%", r: 0.8, animationDelay: "3.4s" },
    { cx: "80%", cy: "25%", r: 0.8, animationDelay: "1.8s" },
    // Middle area
    { cx: "15%", cy: "50%", r: 0.8, animationDelay: "2.5s" },
    { cx: "35%", cy: "55%", r: 0.8, animationDelay: "3.2s" },
    { cx: "55%", cy: "45%", r: 0.8, animationDelay: "1.5s" },
    { cx: "75%", cy: "50%", r: 0.8, animationDelay: "2.9s" },
    // Bottom area
    { cx: "25%", cy: "75%", r: 0.8, animationDelay: "3.6s" },
    { cx: "45%", cy: "80%", r: 0.8, animationDelay: "1.9s" },
    { cx: "65%", cy: "70%", r: 0.8, animationDelay: "2.7s" },
    { cx: "85%", cy: "75%", r: 0.8, animationDelay: "3.3s" },
  ];

  const largeStars = [
    // Evenly distributed large stars
    { cx: "35%", cy: "15%", r: 1.2, animationDelay: "1.7s" },
    { cx: "75%", cy: "20%", r: 1.2, animationDelay: "2.3s" },
    { cx: "25%", cy: "60%", r: 1.2, animationDelay: "3.1s" },
    { cx: "45%", cy: "70%", r: 1.2, animationDelay: "1.6s" },
    { cx: "65%", cy: "55%", r: 1.2, animationDelay: "2.9s" },
    { cx: "85%", cy: "65%", r: 1.2, animationDelay: "3.5s" },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#061E31] to-[#040d30]
        -z-10"
    >
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
