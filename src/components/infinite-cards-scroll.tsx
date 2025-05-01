'use client';

import { cn } from '@/lib/utils';
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
  autoplayInterval?: number;
}

export const InfiniteCardsScroll = ({ cards, autoplayInterval = 5000 }: CardsScrollProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const dragStartXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    dragStartXRef.current = e.pageX;
    if (sliderRef.current) {
      scrollLeftRef.current = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    if (sliderRef.current) {
      const x = e.pageX - dragStartXRef.current;
      sliderRef.current.scrollLeft = scrollLeftRef.current - x;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    touchStartXRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].pageX;
    const moveDistance = Math.abs(touchEndX - touchStartXRef.current);
    if (moveDistance > 5) {
    }
  };

  const goToNextSlide = useCallback(() => {
    if (sliderRef.current) {
      const cardWidth = 300; // min-w-[300px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;
      const nextSlide = (currentSlide + 1) % cards.length;
      sliderRef.current.scrollLeft = nextSlide * slideWidth;
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide, cards.length]);

  const goToSlide = useCallback((index: number) => {
    if (sliderRef.current) {
      const cardWidth = 300; // min-w-[300px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;
      sliderRef.current.scrollLeft = index * slideWidth;
      setCurrentSlide(index);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  // Scroll event listener for updating current slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cards = slider.querySelectorAll('.snap-center');
      if (cards.length === 0) return;

      const sliderRect = slider.getBoundingClientRect();
      const containerRect = slider.parentElement?.getBoundingClientRect();

      if (!containerRect) return;

      // Calculate the center position relative to the container
      const sliderOffset = sliderRect.left - containerRect.left;
      const sliderCenter = sliderOffset + sliderRect.width / 2;

      // Find the card closest to the center of the viewport
      let closestCardIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardOffset = cardRect.left - containerRect.left;
        const cardCenter = cardOffset + cardRect.width / 2;
        const distance = Math.abs(cardCenter - sliderCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = index;
        }
      });

      setCurrentSlide(closestCardIndex);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-col items-center gap-4 mt-10'>
      <div
        className='relative w-full'
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          ref={sliderRef}
          className={cn(
            'relative overflow-x-scroll scrollbar-hide select-none',
            'scroll-smooth snap-x snap-mandatory',
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          )}
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className='flex gap-4'>
            <div className='shrink-0' style={{ width: 'calc(50vw - 170px)' }} />
            {cards.map((card, index) => (
              <div
                key={`card-${card.title}-${index}`}
                className='relative flex flex-col justify-between gap-4 aspect-3/5 min-w-[300px] rounded-lg overflow-hidden md:aspect-5/4 md:min-w-[491px] snap-center'
              >
                <div className='absolute inset-0 -z-10'>
                  <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none' />
                  <img src={card.imageUrl} alt={card.imgAlt} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-wrap gap-2 p-4 justify-center md:justify-end'>
                  {card.tags.map((tag) => (
                    <div
                      key={tag}
                      className='text-white bg-gray-6 rounded-full px-2 py-1 font-semibold tracking-wide text-xs  sm:text-sm'
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
            ))}
            <div className='shrink-0' style={{ width: 'calc(50vw - 170px)' }} />
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className='flex gap-2 lg:hidden'>
        {cards.map((_, index) => (
          <div
            key={`dot-${_.title}-${index}`}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              currentSlide === index ? 'dark:bg-gray-1 bg-gray-5 w-4' : 'dark:bg-gray-5 bg-gray-2'
            )}
            aria-hidden='true'
          />
        ))}
      </div>

      {/* Slider control */}
      <div className='hidden lg:flex items-center justify-center mt-12 w-full max-w-[340px] mx-auto'>
        <input
          type='range'
          min={0}
          max={cards.length - 1}
          value={currentSlide}
          onChange={(e) => goToSlide(Number.parseInt(e.target.value))}
          className='w-full h-[9px] bg-gray-2 dark:bg-gray-5 rounded-lg appearance-none cursor-pointer accent-gray-900'
          aria-label='Slide progress'
        />
      </div>
    </div>
  );
};
