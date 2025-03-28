'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface LogoScrollProps {
  logos: {
    srcDark: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export const InfiniteLogoScroll = ({ logos }: LogoScrollProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  const scroll = useCallback((timestamp: number) => {
    if (!scrollRef.current) return;

    // Limit updates to ~30fps for better performance
    if (timestamp - lastTimeRef.current < 33) {
      animationFrameRef.current = requestAnimationFrame(scroll);
      return;
    }

    setCurrentPosition((prevPosition) => {
      const nextPosition = prevPosition + 0.5; // Reduced speed
      if (nextPosition >= scrollRef.current!.scrollWidth / 2) {
        return 0;
      }
      return nextPosition;
    });

    lastTimeRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(scroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    animationFrameRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scroll, isAutoPlaying]);

  const handleInteractionStart = () => setIsAutoPlaying(false);
  const handleInteractionEnd = () => setIsAutoPlaying(true);

  return (
    <div
      className='w-full overflow-hidden'
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        ref={scrollRef}
        className='flex items-center gap-4 md:gap-12 py-8 whitespace-nowrap'
        style={{
          transform: `translate3d(-${currentPosition}px, 0, 0)`,
          willChange: 'transform',
          transition: 'none',
        }}
      >
        {/* Reduce to two sets of logos instead of three */}
        {[...Array(4)].map((_, setIndex) => (
          <>
            {logos.map((logo, index) => (
              <Image
                key={`logo-${setIndex}-${index}`}
                src={logo.src}
                className='block dark:hidden'
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                draggable={false}
                loading='eager'
              />
            ))}
            {logos.map((logo, index) => (
              <Image
                key={`logo-dark-${setIndex}-${index}`}
                src={logo.srcDark}
                className='hidden dark:block'
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                draggable={false}
                loading='eager'
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
