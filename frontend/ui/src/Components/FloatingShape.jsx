import React from "react";

const FloatingShape = () => {
  const images = [
    "spring.png",
    "gasket.png",
    "disc-brake.png",
    "piston.png",
    "radiator-fan.png",
    "steering-wheel.png",
    "turbo-engine.png",
    "tools.png",
    "car-parts.png",
    "tire.png",
    "car-battery.png",
    "car-engine.png",
    "spark-plug.png",
    "speedometer.png",
    "gasoline.png",
    "gear.png",
    "spring-2.png",
    "car-door.png",
    "license-plate.png",
    "exhaust-pipe.png",
    "filter.png",
    "car-seat.png",
    "petrol.png",
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(100vh) rotate(0deg); /* Start from below the screen */
              opacity: 0.8; /* Slightly visible at the start */
            }
            100% {
              transform: translateY(-200vh) rotate(720deg); /* Move off the screen at the top */
              opacity: 0; /* Fade out completely */
            }
          }
        `}
      </style>
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/images/${image}`}
            alt={`Floating ${image}`}
            className="absolute w-10 h-10 opacity-80"
            style={{
              left: `${(index * 6) % 100}%`, // Spread images across the width
              bottom: `-${Math.random() * 300}px`, // Start further below the viewport
              animation: `floating ${50 + (index % 4) * 5}s linear infinite`, // Animation keeps running
              animationDelay: `${Math.random() * 5}s`, // Staggered start
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingShape;