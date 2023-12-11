import React from "react";

export default function HeroSvg() {
  return (
    <svg viewBox="0 0 1273 906" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background - Vibrant Gradient */}
      <path
        d="M0 0C71.4877 0 1050.41 346.497 1000 400C949.585 453.503 641.944 881.331 400 700C158.056 518.669 0 0 0 0Z"
        fill="url(#vibrant-gradient)"
      />

      {/* Sun */}
      <circle cx="100" cy="100" r="80" fill="#FFD700" />

      {/* Mountains */}
      <polygon points="0,600 300,300 600,600" fill="#808080" />
      <polygon points="300,600 600,300 900,600" fill="#A9A9A9" />

      {/* River */}
      <rect x="0" y="700" width="1273" height="50" fill="#87CEEB" />

      {/* Abstract Shapes */}
      <circle cx="1000" cy="200" r="50" fill="#4CAF50" />
      <rect x="1100" y="300" width="80" height="120" fill="#FF9800" />

      {/* Define gradients and clipPath */}
      <defs>
        <linearGradient
          id="vibrant-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="50%" stopColor="#FF73C0" />
          <stop offset="100%" stopColor="#30C7FC" />
        </linearGradient>
        <clipPath id="clip-path">
          <rect width="1273" height="906" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
