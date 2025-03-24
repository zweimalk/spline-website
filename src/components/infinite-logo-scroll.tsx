'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface LogoScrollProps {
  logos: {
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

  const scroll = useCallback(() => {
    if (!scrollRef.current) return;

    setCurrentPosition((prevPosition) => {
      const nextPosition = prevPosition + 1;
      // Reset position when we reach the width of one set of logos
      if (nextPosition >= scrollRef.current!.scrollWidth / 2) {
        return 0;
      }
      return nextPosition;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(scroll, 30);
    return () => clearInterval(timer);
  }, [scroll, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className='w-full overflow-hidden' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        ref={scrollRef}
        className='flex items-center gap-12 py-8 whitespace-nowrap'
        style={{
          transform: `translateX(-${currentPosition}px)`,
          transition: 'transform 0.03s linear',
        }}
      >
        {/* Original logos */}
        {logos.map((logo, index) => (
          <Image
            key={`logo-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className='transition-all h-12 w-auto'
            draggable={false}
          />
        ))}
        {/* Duplicated logos for seamless loop */}
        {logos.map((logo, index) => (
          <Image
            key={`logo-2-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className='transition-all h-12 w-auto'
            draggable={false}
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`logo-3-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className='transition-all h-12 w-auto'
            draggable={false}
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`logo-4-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className='transition-all h-12 w-auto'
            draggable={false}
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`logo-5-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className='transition-all h-12 w-auto'
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};
