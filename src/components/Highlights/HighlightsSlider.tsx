"use client";

import { Highlight } from "@/types/highlight";
import { TouchEvent, useCallback, useEffect, useRef, useState } from "react";
import { HighlightCard } from "./HighlightCard";

interface HighlightsSliderProps {
  highlights: Highlight[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function HighlightsSlider({ highlights, autoplayInterval = 5000 }: HighlightsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Track if the screen is mobile size
  const [isMobile, setIsMobile] = useState(false);

  // Initialize animations for each word
  useEffect(() => {
    // Check if we're on mobile initially
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile
    };

    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const minSwipeDistance = 50;

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === highlights.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1));
  }, [highlights.length, isMobile]);

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
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative w-full overflow-hidden p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="relative touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out md:hidden"
          style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` }}
        >
          {highlights.map((highlight) => (
            <div key={highlight.id} className="w-full min-w-full">
              <HighlightCard highlight={highlight} />
            </div>
          ))}
        </div>
        <div
          className="gap-6 transition-transform duration-500 ease-in-out hidden md:flex"
          style={{ transform: `translateX(calc(-${currentIndex * 340}px - ${currentIndex * 24}px))` }}
        >
          {highlights.map((highlight) => (
            <div key={highlight.id} className="min-w-[340px]">
              <HighlightCard highlight={highlight} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {/* <div className="flex justify-center gap-2 mt-6">
        <div className="flex gap-2 md:hidden">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hidden md:flex gap-2">
          {highlights.map(
            (_, index) =>
              index % 2 === 0 && (
                <button
                  key={index}
                  onClick={() => goToDesktopSlide(Math.floor(index / 2))}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
          )}
        </div>
      </div> */}
    </div>
  );
}
