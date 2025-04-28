'use client';

import { useTheme } from 'next-themes';
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
  const { resolvedTheme } = useTheme();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [multiplicator, setMultiplicator] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 320) {
        setMultiplicator(2);
      } else if (window.innerWidth >= 480) {
        setMultiplicator(3);
      } else if (window.innerWidth >= 768) {
        setMultiplicator(4);
      } else if (window.innerWidth >= 1024) {
        setMultiplicator(5);
      } else if (window.innerWidth >= 1280) {
        setMultiplicator(6);
      } else if (window.innerWidth >= 1536) {
        setMultiplicator(7);
      } else if (window.innerWidth >= 1920) {
        setMultiplicator(8);
      } else if (window.innerWidth >= 2560) {
        setMultiplicator(9);
      } else if (window.innerWidth >= 3840) {
        setMultiplicator(10);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scroll = useCallback((timestamp: number) => {
    if (!scrollRef.current) return;

    // Limit updates to ~30fps for better performance
    if (timestamp - lastTimeRef.current < 33) {
      animationFrameRef.current = requestAnimationFrame(scroll);
      return;
    }

    setCurrentPosition((prevPosition) => {
      const nextPosition = prevPosition + 1; // Reduced speed
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
        {mounted &&
          Array.from({ length: multiplicator }).flatMap((_, setIndex) =>
            logos.map((logo, index) => (
              <Image
                key={`logo-${setIndex}-${index}`}
                src={resolvedTheme === 'dark' ? logo.srcDark : logo.src}
                className='block w-18 h-18 md:w-24 md:h-24'
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                draggable={false}
                loading='eager'
              />
            ))
          )}
      </div>
    </div>
  );
};
