'use client';

import { Highlight } from '@/types/highlight';
import { TouchEvent, useCallback, useEffect, useRef, useState } from 'react';
import { HighlightCard } from './HighlightCard';

interface HighlightsSliderProps {
  highlights: Highlight[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function HighlightsSlider({ highlights, autoplayInterval = 5000 }: HighlightsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [clickStartTime, setClickStartTime] = useState<number>(0);
  const [clickStartPosition, setClickStartPosition] = useState<number>(0);

  const minSwipeDistance = 50;

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === highlights.length - 1 ? 0 : prevIndex + 1));
  }, [highlights.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? highlights.length - 1 : prevIndex - 1));
  }, [highlights.length]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);

    // Resume autoplay after a short delay
    // setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    setStartX(e.clientX - dragOffset);
    setClickStartTime(Date.now());
    setClickStartPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = e.clientX - startX;
    setDragOffset(currentX);

    // Prevent default to stop text selection during drag
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const clickDuration = Date.now() - clickStartTime;
    const clickDistance = Math.abs(e.clientX - clickStartPosition);

    // If it's a quick tap/click (less than 200ms) and minimal movement (less than 5px)
    if (clickDuration < 200 && clickDistance < 5) {
      // Handle as a click
      const card = (e.target as HTMLElement).closest('[data-highlight-id]');
      if (card) {
        const highlightId = card.getAttribute('data-highlight-id');
        // Handle click on card - you can add your click handler here
        console.log('Card clicked:', highlightId);
        const highlight = highlights.find((highlight) => highlight._id === highlightId);
        if (highlight?.ctaUrl) {
          console.log('Opening URL:', highlight.ctaUrl);
          window.open(highlight.ctaUrl, '_blank');
        }
      }
    } else {
      // Handle as a drag
      const slideWidth = 340;
      const slidesToMove = Math.round(dragOffset / slideWidth);
      const newIndex = Math.max(0, Math.min(currentIndex - slidesToMove, highlights.length - 1));
      setCurrentIndex(newIndex);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  // const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full overflow-hidden p-4' onMouseEnter={handleMouseEnter}>
      {/* Slider container */}
      <div
        ref={sliderRef}
        className='relative touch-pan-y select-none' // cursor-grab active:cursor-grabbing
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className='flex gap-4 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(calc(-${currentIndex * 100}%))`,
            transition: isDragging ? 'none' : 'transform 500ms ease-in-out',
          }}
        >
          {highlights.map((highlight) => (
            <div key={highlight._id}>
              <HighlightCard highlight={highlight} />
            </div>
          ))}
        </div>
      </div>

      {/* Replace pagination dots with slider control */}
      <div className='hidden landscape:flex items-center justify-center mt-12 w-full max-w-md mx-auto shadow-xl'>
        <input
          type='range'
          min={0}
          max={highlights.length - 1}
          value={currentIndex}
          onChange={(e) => goToSlide(parseInt(e.target.value))}
          className='w-full h-[9px] bg-zinc-400 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gray-900'
          aria-label='Slide progress'
        />
      </div>
    </div>
  );
}
