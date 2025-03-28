'use client';

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
  const sliderRef = useRef<HTMLDivElement>(null);

  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const [clickStartTime, setClickStartTime] = useState<number>(0);
  const [clickStartPosition, setClickStartPosition] = useState<number>(0);

  const minSwipeDistance = 50;

  const goToNextSlide = useCallback(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const newScrollLeft = Math.max(0, Math.min(scrollLeft + clientWidth, scrollWidth - clientWidth));
      sliderRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }, [scrollLeft]);

  const goToPrevSlide = useCallback(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const newScrollLeft = Math.max(0, Math.min(scrollLeft - clientWidth, scrollWidth - clientWidth));
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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative w-full overflow-hidden p-4' onMouseEnter={() => setIsAutoPlaying(false)}>
      <div
        ref={sliderRef}
        className='relative overflow-x-scroll scrollbar-hide'
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
          {highlights.map((highlight) => (
            <div key={highlight._id} className='w-full shrink-0'>
              <HighlightCard highlight={highlight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
