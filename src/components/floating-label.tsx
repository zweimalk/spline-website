import { motion } from "motion/react";

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
  const randomOffset = () => Math.random() * 20 - 10; // Random value between -10 and 10

  return (
    <motion.div
      className="absolute text-blue-600 bg-background text-lg font-bold px-3 py-1 rounded-full dark:bg-white z-50"
      initial={{
        top: `calc(${top} + ${randomOffset()}px)`,
        left: `calc(${left} + ${randomOffset()}px)`,
      }}
      animate={{
        top: [
          `calc(${top} + ${randomOffset()}px)`,
          `calc(${top} + ${randomOffset()}px)`,
          `calc(${top} + ${randomOffset()}px)`,
        ],
        left: [
          `calc(${left} + ${randomOffset()}px)`,
          `calc(${left} + ${randomOffset()}px)`,
          `calc(${left} + ${randomOffset()}px)`,
        ],
      }}
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
