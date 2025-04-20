'use client';

import { cn } from '@/lib/utils';
import type { Highlight } from '@/types/highlight';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HighlightCard } from './HighlightCard';

interface HighlightsSliderProps {
  highlights: Highlight[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function HighlightsSlider({ highlights, autoplayInterval = 5000 }: HighlightsSliderProps) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const dragStartXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    setHasDragged(false);
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

      // Set hasDragged if there's significant movement
      if (Math.abs(x) > 2) {
        setHasDragged(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers (unchanged)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    touchStartXRef.current = e.touches[0].pageX;
    setHasDragged(false);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].pageX;
    const moveDistance = Math.abs(touchEndX - touchStartXRef.current);
    if (moveDistance > 5) {
      setHasDragged(true);
    }
  };

  const goToNextSlide = useCallback(() => {
    if (sliderRef.current) {
      const cardWidth = 340; // max-w-[340px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;
      const nextSlide = (currentSlide + 1) % highlights.length;
      sliderRef.current.scrollLeft = nextSlide * slideWidth;
    }
  }, [currentSlide, highlights.length]);

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
      const scrollPosition = slider.scrollLeft;
      const cardWidth = 340; // max-w-[340px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;

      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(Math.min(Math.max(0, newSlide), highlights.length - 1));
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [highlights.length]);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = 340; // max-w-[340px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;
      sliderRef.current.scrollLeft = index * slideWidth;
      setCurrentSlide(index);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative w-full' onMouseEnter={() => setIsAutoPlaying(false)}>
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

            {highlights.map((highlight) => (
              <div
                key={highlight._id}
                className='w-full max-w-[340px] h-[488px] shrink-0 snap-center my-4'
                onClick={() => {
                  if (!hasDragged) {
                    window.open(highlight.ctaUrl, '_blank');
                  }
                }}
              >
                <HighlightCard highlight={highlight} />
              </div>
            ))}

            <div className='shrink-0' style={{ width: 'calc(50vw - 170px)' }} />
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className='flex gap-2 lg:hidden'>
        {highlights.map((_, index) => (
          <div
            key={index}
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
          max={highlights.length - 1}
          value={currentSlide}
          onChange={(e) => goToSlide(Number.parseInt(e.target.value))}
          className='w-full h-[9px] bg-gray-2 dark:bg-gray-5 rounded-lg appearance-none cursor-pointer accent-gray-900'
          aria-label='Slide progress'
        />
      </div>
    </div>
  );
}
