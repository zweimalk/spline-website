import { motion } from 'motion/react';

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
  // Use a single random offset per render instead of calculating multiple times
  const offsetX = Math.random() * 20 - 10;
  const offsetY = Math.random() * 20 - 10;

  return (
    <motion.div
      className='absolute text-spline-blue text-[8px] leading-[12px] md:text-lg md:leading-[24px] lg:text-2xl lg:leading-[32px] font-bold px-2 md:px-3 lg:px-4 pt-0.5 md:py-1 lg:py-2 rounded-full dark:bg-white z-30'
      style={{
        top,
        left,
        backgroundColor: color,
        willChange: 'transform',
      }}
      initial={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      animate={{
        transform: [
          `translate(${offsetX}px, ${offsetY}px)`,
          `translate(${-offsetX}px, ${-offsetY}px)`,
          `translate(${offsetX}px, ${offsetY}px)`,
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        times: [0, 0.5, 1],
      }}
    >
      {text}
    </motion.div>
  );
};
