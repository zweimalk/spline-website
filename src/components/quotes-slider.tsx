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
      <div className='flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 lg:gap-16 p-6 rounded-lg lg:mt-6 sm:px-4 md:h-[780px] lg:h-[400px]'>
        {/* Image section */}
        <div className='flex justify-center md:justify-start lg:self-start lg:mt-8'>
          <div className='relative h-70 aspect-[12/16] overflow-hidden rounded-lg clip-diagonal clip-diagonal-sm'>
            <Image src={quotes[activeIndex].imageSrc} alt={quotes[activeIndex].name} fill className='object-cover' />
          </div>
          <div className='hidden lg:block w-50 ml-4'>
            <Header3 className='font-semibold'>{quotes[activeIndex].name}</Header3>
            <p className=' text-gray-4 dark:text-gray-2 tracking-wider'>{quotes[activeIndex].role}</p>
          </div>
        </div>

        {/* Content section */}
        <div className='w-full md:h-full'>
          <div className='lg:hidden'>
            <Header3 className='text-center text-xl sm:text-2xl font-semibold'>{quotes[activeIndex].name}</Header3>
            <p className='text-center sm:text-lg text-gray-4 dark:text-gray-2 tracking-wider'>
              {quotes[activeIndex].role}
            </p>
          </div>

          <div className='flex justify-center items-center my-4 gap-8 md:hidden'>
            <button type='button' onClick={prevSlide} aria-label='Previous testimonial' className='cursor-pointer'>
              <ArrowLeftIcon className='w-8 h-8' />
            </button>

            <div className='flex md:hidden gap-2'>
              {quotes.map((_, index) => (
                <div key={`dot-${index}`} className='w-6 h-6 flex items-center justify-center'>
                  <button
                    type='button'
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                      activeIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <button type='button' onClick={nextSlide} aria-label='Next testimonial' className='cursor-pointer'>
              <ArrowRightIcon className='w-8 h-8' />
            </button>
          </div>

          <div className='md:max-w-[500px] mx-auto relative'>
            <svg
              width='33'
              height='26'
              viewBox='0 0 33 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:inline translate-y-8 -translate-x-12 lg:-translate-x-12'
            >
              <title>Quote icon</title>
              <path
                d='M19.8481 25.728V14.4C19.8481 10.304 21.1281 7.04 23.6881 4.608C26.3121 2.112 29.4161 0.576 33.0001 0V4.512C31.2721 5.088 29.7361 6.144 28.3921 7.68C27.1121 9.216 26.4721 11.072 26.4721 13.248H32.8081V25.728H19.8481ZM0.840088 25.728V14.4C0.840088 10.304 2.12009 7.04 4.68009 4.608C7.30409 2.112 10.4081 0.576 13.9921 0V4.512C12.2641 5.088 10.7281 6.144 9.38409 7.68C8.10409 9.216 7.46409 11.072 7.46409 13.248H13.8001V25.728H0.840088Z'
                className='fill-foreground'
              />
            </svg>

            <Cite className='text-center sm:text-left text-2xl md:text-3xl/10'>{quotes[activeIndex].quote}</Cite>
          </div>

          <Body1 className='text-center mt-12 md:max-w-[500px] mx-auto sm:text-left lg:mt-2'>
            {quotes[activeIndex].description}
          </Body1>
        </div>
      </div>

      {/* Navigation controls */}
      <div className='hidden md:flex justify-center items-center mb-10 mt-4 gap-8'>
        <button type='button' onClick={prevSlide} aria-label='Previous testimonial' className='cursor-pointer'>
          <ArrowLeftIcon className='w-8 h-8' />
        </button>

        <div className='flex gap-2'>
          {quotes.map((_, index) => (
            <button
              key={`dot-${index}`}
              type='button'
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                activeIndex === index ? ' bg-gray-4' : 'bg-gray-2 hover:bg-gray-3'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button type='button' onClick={nextSlide} aria-label='Next testimonial' className='cursor-pointer'>
          <ArrowRightIcon className='w-8 h-8' />
        </button>
      </div>
    </div>
  );
};
