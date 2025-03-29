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
  const randomOffset = () => Math.random() * 20 - 10; // Random value between -10 and 10

  return (
    <motion.div
      className='absolute text-spline-blue text-[8px] leading-[12px] md:text-lg md:leading-[24px] lg:text-2xl lg:leading-[32px] font-bold px-2 md:px-3 lg:px-4 pt-0.5 md:py-1 lg:py-2 rounded-full dark:bg-white z-30'
      initial={{
        top: `calc(${top} + ${randomOffset()}px)`,
        left: `calc(${left} + ${randomOffset()}px)`,
        backgroundColor: color,
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
        repeatType: 'reverse',
        ease: 'easeInOut',
        times: [0, 0.5, 1],
      }}
    >
      {text}
    </motion.div>
  );
};
