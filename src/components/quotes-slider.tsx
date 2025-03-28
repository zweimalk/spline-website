'use client';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
          <div className='relative w-60 h-80 lg:w-80 overflow-hidden rounded-lg '>
            <Image
              src={quotes[activeIndex].imageSrc}
              alt={quotes[activeIndex].name}
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* Content section */}
        <div className='w-full'>
          <Header3 className='text-center text-2xl lg:text-3xl font-semibold'>{quotes[activeIndex].name}</Header3>
          <p className='text-center text-lg text-gray-4 dark:text-gray-2 tracking-wider'>{quotes[activeIndex].role}</p>

          <div className='flex justify-center items-center mt-2 gap-8'>
            <button
              onClick={prevSlide}
              className='p-2 rounded-full hover:bg-gray-200/70 transition-colors'
              aria-label='Previous testimonial'
            >
              <ChevronLeftIcon className='w-8 h-8' />
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

            <button
              onClick={nextSlide}
              className='p-2 rounded-full hover:bg-gray-200/70 transition-colors'
              aria-label='Next testimonial'
            >
              <ChevronRightIcon className='w-8 h-8' />
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
        <button
          onClick={prevSlide}
          className='p-2 rounded-full hover:bg-gray-200/70 transition-colors'
          aria-label='Previous testimonial'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M15 18l-6-6 6-6' />
          </svg>
        </button>

        <div className='flex gap-2'>
          {quotes.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                activeIndex === index ? 'w-6 bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className='p-2 rounded-full hover:bg-gray-200/70 transition-colors'
          aria-label='Next testimonial'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M9 18l6-6-6-6' />
          </svg>
        </button>
      </div>
    </div>
  );
};
