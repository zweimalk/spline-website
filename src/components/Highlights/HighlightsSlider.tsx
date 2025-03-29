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
  const [startX, setStartX] = useState(0);
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
    setStartX(e.pageX - (sliderRef.current?.scrollLeft || 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - startX;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = -x;
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

  // Add scroll event listener to update current slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollPosition = slider.scrollLeft;
      const slideWidth = slider.clientWidth;
      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(newSlide);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative w-full p-3' onMouseEnter={() => setIsAutoPlaying(false)}>
        <div
          ref={sliderRef}
          className={cn('relative overflow-x-scroll scrollbar-hide p-1 py-4')}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className={cn(scrollLeft === 0 && 'translate-x-12 md:translate-x-14')}>
            <div className='flex gap-4'>
              {highlights.map((highlight) => (
                <div
                  key={highlight._id}
                  className='w-full max-w-[340px] h-[488px] shrink-0'
                  onClick={() => {
                    window.open(highlight.ctaUrl, '_blank');
                  }}
                >
                  <HighlightCard highlight={highlight} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className='flex gap-2'>
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
    </div>
  );
}
