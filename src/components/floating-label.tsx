"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Add this custom floating animation component
export const FloatingLabel = ({
  text,
  color,
  top,
  left,
}: {
  text: string;
  color: string;
  top: string;
  left: string;
}) => {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Generate random offsets only on client side after mount
  useEffect(() => {
    setOffsets({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
    });
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="absolute text-spline-blue text-[8px] leading-[12px] md:text-[16px] md:leading-[24px] font-bold px-2 md:px-3 pt-0.5 md:py-1 rounded-full dark:bg-white z-30"
      style={{
        top,
        left,
        backgroundColor: color,
        willChange: "transform",
      }}
      initial={{ transform: "translate(0px, 0px)" }}
      animate={
        isMounted
          ? {
              transform: [
                `translate(${offsets.x}px, ${offsets.y}px)`,
                `translate(${-offsets.x}px, ${-offsets.y}px)`,
                `translate(${offsets.x}px, ${offsets.y}px)`,
              ],
            }
          : { transform: "translate(0px, 0px)" }
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
    >
      {text}
    </motion.div>
  );
};
