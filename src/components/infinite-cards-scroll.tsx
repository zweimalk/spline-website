'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Cite } from './Typo/Cite';
export interface Card {
  title: React.ReactNode;
  imgAlt: string;
  tags: string[];
  imageUrl: string;
}

interface CardsScrollProps {
  cards: Card[];
}

export const InfiniteCardsScroll = ({ cards }: CardsScrollProps) => {
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
        setMultiplicator(1);
      } else if (window.innerWidth >= 480) {
        setMultiplicator(1);
      } else if (window.innerWidth >= 768) {
        setMultiplicator(1);
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
      className='w-full overflow-hidden mt-12'
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
            cards.map((card, index) => (
              <div
                key={`card-${card.title}-${index}-${setIndex}`}
                className='relative flex flex-col justify-between gap-4 aspect-3/5 min-w-[300px] rounded-lg overflow-hidden md:aspect-5/4 md:min-w-[491px] '
              >
                <div className='absolute inset-0 -z-10'>
                  <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none' />
                  <img src={card.imageUrl} alt={card.imgAlt} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-wrap gap-2 p-4 justify-center md:justify-end'>
                  {card.tags.map((tag) => (
                    <div
                      key={tag}
                      className='text-white bg-gray-6 rounded-full px-2 py-1 font-semibold tracking-wide text-sm'
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className='p-4'>
                  <Cite className='text-white z-10'>{card.title}</Cite>
                  <div className='flex items-center gap-2 mt-4 border-t border-white pt-6'>
                    <span className='text-xl font-medium text-white group-hover:tracking-wide transition-all duration-300'>
                      See more
                    </span>
                    <svg
                      width='23'
                      height='22'
                      viewBox='0 0 23 22'
                      fill='red'
                      xmlns='http://www.w3.org/2000/svg'
                      className='group-hover:translate-x-2 transition-all duration-300 ml-4'
                    >
                      <title>See more</title>
                      <path
                        className='transition-all duration-300 stroke-white'
                        d='M13.0833 2.18262L21 10.6826M21 10.6826L13.0833 19.1826M21 10.6826L2 10.6826'
                        strokeWidth='3'
                        strokeLinecap='square'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};
