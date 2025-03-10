"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./button";

interface WordAnimation {
  rotation: number;
  translateX: number;
  translateY: number;
}

const words = ["rapid support", "excellence longevity", "sustainability", "high quality standards"];

export const ShakyTextSection = () => {
  // State to track animation values for each word
  const [wordAnimations, setWordAnimations] = useState<WordAnimation[]>([]);
  // Track if the screen is mobile size
  const [isMobile, setIsMobile] = useState(false);

  // Initialize animations for each word
  useEffect(() => {
    setWordAnimations(
      words.map(() => ({
        rotation: 0,
        translateX: 0,
        translateY: 0,
      }))
    );

    // Check if we're on mobile initially
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile
    };

    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Function to generate random values based on screen size
  const getRandomValues = useCallback((): WordAnimation => {
    if (isMobile) {
      // Mobile values: rotation -3 to 3 degrees, translation -10 to 10px
      return {
        rotation: Math.random() * 6 - 3, // -3 to 3 degrees
        translateX: Math.random() * 20 - 10, // -10 to 10px
        translateY: Math.random() * 20 - 10, // -10 to 10px
      };
    } else {
      // Desktop values (original)
      return {
        rotation: Math.random() * 12 - 6, // -6 to 6 degrees
        translateX: Math.random() * 40 - 20, // -20px to 20px
        translateY: Math.random() * 40 - 20, // -20px to 20px
      };
    }
  }, [isMobile]);

  // Effect to update animations periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setWordAnimations((prev) => prev.map(() => getRandomValues()));
    }, 1000);

    return () => clearInterval(interval);
  }, [isMobile, getRandomValues]); // Re-run effect when isMobile changes

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-2 overflow-hidden py-10 mt-20 md:mt-60">
      {words.map((word, index) => (
        <h1
          key={word}
          className="text-7xl md:text-8xl xl:text-9xl text-center"
          style={{
            transform: `
              rotate(${wordAnimations[index]?.rotation || 0}deg)
              translate(
                ${wordAnimations[index]?.translateX || 0}px,
                ${wordAnimations[index]?.translateY || 0}px
              )
            `,
            transition: "transform 1.5s ease-in-out",
          }}
        >
          {word}
        </h1>
      ))}
      <Button color="dark" className="cursor-pointer max-w-[218px] mt-8 md:mt-10 md:text-2xl">
        Let&apos;s collaborate
        <ArrowRightIcon className="font-bold fill-background dark:fill-white" />
      </Button>
    </div>
  );
};
