'use client';

import { cn } from '@/lib/utils';
import { Highlight } from '@/types/highlight';
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
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = useCallback(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const newScrollLeft = Math.max(0, Math.min(scrollLeft + clientWidth, scrollWidth - clientWidth));
      sliderRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }, [scrollLeft]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    setHasDragged(false);
    if (sliderRef.current) {
      setStartX(e.pageX);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
    setMoveX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setMoveX(e.pageX);

    const movement = Math.abs(moveX - e.pageX);
    if (movement > 5) {
      setHasDragged(true);
    }

    if (sliderRef.current) {
      const x = e.pageX - startX;
      sliderRef.current.scrollLeft = scrollLeft - x * 0.2;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  // Simplify the scroll event listener
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
      setScrollLeft(scrollPosition);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [highlights.length]);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = 340; // max-w-[340px]
      const gap = 16; // gap-4 = 16px
      const slideWidth = cardWidth + gap;
      const newScrollLeft = index * slideWidth;

      sliderRef.current.scrollLeft = newScrollLeft;
      setCurrentSlide(index);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative w-full' onMouseEnter={() => setIsAutoPlaying(false)}>
        <div
          ref={sliderRef}
          className={cn('relative overflow-x-scroll scrollbar-hide touch-pan-y select-none', 'scroll-smooth')}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className='flex gap-4'>
            <div className='shrink-0' style={{ width: 'calc(50vw - 170px)' }} />

            {highlights.map((highlight) => (
              <div
                key={highlight._id}
                className='w-full max-w-[340px] h-[488px] shrink-0'
                onClick={(e) => {
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
          onChange={(e) => goToSlide(parseInt(e.target.value))}
          className='w-full h-[9px] bg-gray-2 dark:bg-gray-5 rounded-lg appearance-none cursor-pointer accent-gray-900'
          aria-label='Slide progress'
        />
      </div>
    </div>
  );
}
