"use client";

import { Testimonial } from "@/types/testimonial";
import { TouchEvent, useCallback, useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function TestimonialSlider({ testimonials, autoplayInterval = 5000 }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  }, [testimonials.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, [testimonials.length]);

  // Add this new function for handling desktop pagination clicks
  const goToDesktopSlide = useCallback(
    (index: number) => {
      // Since we're passing index/2 from the button click,
      // we just need to multiply by 2 to get even numbers (0, 2, 4, etc.)
      const targetIndex = Math.floor(index) * 2;
      console.log(targetIndex);
      if (targetIndex < testimonials.length) {
        setCurrentIndex(targetIndex);
      }
    },
    [testimonials.length]
  );

  // Handle touch start
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end
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

  // Handle autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  // Pause autoplay on hover (desktop)
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
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full min-w-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div
          className="gap-6 transition-transform duration-500 ease-in-out hidden md:flex"
          style={{ transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px))` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full min-w-full md:min-w-[calc(50%-12px)] md:w-[calc(50%-12px)]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="flex gap-2 md:hidden">
          {testimonials.map((_, index) => (
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
          {testimonials.map(
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
      </div>
    </div>
  );
}
