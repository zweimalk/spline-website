'use client';

import type { Testimonial } from '@/types/testimonial';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { type TouchEvent, useCallback, useEffect, useRef, useState } from 'react';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function TestimonialSlider({ testimonials, autoplayInterval = 5000 }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track if the screen is mobile size
  const [isMobile, setIsMobile] = useState(false);

  // Initialize intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observerRef.current.observe(sliderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Optimize mobile check with debounce
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIfMobile, 250);
    };

    checkIfMobile();
    window.addEventListener('resize', debouncedCheck);
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  const minSwipeDistance = 50;

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1));
  }, [testimonials.length, isMobile]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, [testimonials.length]);

  const goToDesktopSlide = useCallback(
    (index: number) => {
      const targetIndex = Math.floor(index) * 2;
      if (targetIndex < testimonials.length) {
        setCurrentIndex(targetIndex);
      }
    },
    [testimonials.length]
  );

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

  // Optimize autoplay with requestAnimationFrame
  useEffect(() => {
    if (!isAutoPlaying) return;

    let rafId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= autoplayInterval) {
        goToNextSlide();
        lastTime = currentTime;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isAutoPlaying, goToNextSlide, autoplayInterval]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className='relative w-full overflow-hidden p-6'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider container */}
      <div
        ref={sliderRef}
        className='relative touch-pan-y @container'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className='flex gap-4 transition-transform duration-500 ease-in-out @lg:hidden'
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='w-full min-w-full'>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div
          className='gap-6 transition-transform duration-500 ease-in-out hidden @lg:flex'
          style={{
            transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px))`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='w-full min-w-full h-[400px] md:h-[440px] lg:h-auto @lg:min-w-[calc(50%-12px)] @lg:w-[calc(50%-12px)]'
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className='flex justify-center gap-2 mt-6 @container'>
        <div className='flex gap-2 @lg:hidden'>
          {testimonials.map((_, index) => (
            <button
              key={testimonials[index].id}
              type='button'
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-foreground' : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className='hidden @lg:flex gap-2 items-center'>
          <button
            type='button'
            onClick={goToPrevSlide}
            aria-label='Previous testimonial'
            className='cursor-pointer mr-4'
          >
            <ArrowLeftIcon className='w-8 h-8' />
          </button>
          {testimonials.map(
            (_, index) =>
              index % 2 === 0 && (
                <button
                  key={testimonials[index].id}
                  type='button'
                  onClick={() => goToDesktopSlide(Math.floor(index / 2))}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-foreground' : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
          )}
          <button type='button' onClick={goToNextSlide} aria-label='Next testimonial' className='cursor-pointer ml-4'>
            <ArrowRightIcon className='w-8 h-8' />
          </button>
        </div>
      </div>
    </div>
  );
}
