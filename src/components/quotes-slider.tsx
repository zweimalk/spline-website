'use client';

import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Body1 } from './Typo/Body1';
import { Cite } from './Typo/Cite';
import { Header3 } from './Typo/Header3';

export interface Quote {
  id: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  imageSrc: string;
}

interface QuotesSliderProps {
  quotes: Quote[];
  autoPlayInterval?: number;
  className?: string;
}

export const QuotesSlider = ({ quotes, autoPlayInterval = 5000, className }: QuotesSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }, [quotes.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
  }, [quotes.length]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Handle auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  // const handleMouseEnter = () => setIsAutoPlaying(false);
  // const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className={cn('relative overflow-hidden w-full', className)}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 lg:p-12 rounded-lg'>
        {/* Image section */}
        <div className='flex justify-center'>
          <div className='relative w-55 h-80 overflow-hidden rounded-lg clip-diagonal clip-diagonal-sm'>
            <Image src={quotes[activeIndex].imageSrc} alt={quotes[activeIndex].name} fill className='object-cover' />
          </div>
        </div>

        {/* Content section */}
        <div className='w-full'>
          <Header3 className='text-center text-2xl lg:text-3xl font-semibold'>{quotes[activeIndex].name}</Header3>
          <p className='text-center text-lg text-gray-4 dark:text-gray-2 tracking-wider'>{quotes[activeIndex].role}</p>

          <div className='flex justify-center items-center my-4 gap-8 md:hidden'>
            <button onClick={prevSlide} aria-label='Previous testimonial'>
              <ArrowLeftIcon className='w-8 h-8' />
            </button>

            <div className='flex md:hidden gap-2'>
              {quotes.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    activeIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={nextSlide} aria-label='Next testimonial'>
              <ArrowRightIcon className='w-8 h-8' />
            </button>
          </div>

          <>
            <Cite className='text-center'>{quotes[activeIndex].quote}</Cite>
          </>

          <Body1 className='text-center mt-12'>{quotes[activeIndex].description}</Body1>
        </div>
      </div>

      {/* Navigation controls */}
      <div className='hidden md:flex justify-center items-center mt-8 gap-8'>
        <button onClick={prevSlide} aria-label='Previous testimonial'>
          <ArrowLeftIcon className='w-8 h-8' />
        </button>

        <div className='flex gap-2'>
          {quotes.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                activeIndex === index ? ' bg-gray-4' : 'bg-gray-2 hover:bg-gray-3'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button onClick={nextSlide} aria-label='Next testimonial'>
          <ArrowRightIcon className='w-8 h-8' />
        </button>
      </div>
    </div>
  );
};
