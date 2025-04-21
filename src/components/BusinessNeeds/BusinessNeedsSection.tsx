'use client';

import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import { Body1 } from '../Typo/Body1';
import { Cite } from '../Typo/Cite';
import { Title } from '../Typo/Title';

export type Slide = {
  title: string;
  description: string;
  imageUrl: string;
};

export const BusinessNeedsSection = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className='mt-20'>
      {/* Header */}
      <div className='px-4 lg:flex lg:justify-between lg:items-start lg:gap-4'>
        <Title className=''>
          business <br className='lg:hidden' /> needs
        </Title>
        <Body1 className='mt-24 select-none max-w-lg lg:mt-4'>
          We tailor our cooperation models to match your project goals, internal capacity, and preferred level of
          ownership—offering flexible, scalable, and effective engagement options.
        </Body1>
      </div>

      {/* Slider */}
      <div className='w-full border-1 border-foreground/30 rounded-lg mt-24 md:grid md:grid-cols-5'>
        <div className='p-4 border-b border-foreground/30 md:col-span-1 md:col-start-5 md:border-0'>
          <div className='flex items-center gap-4 justify-end md:justify-start'>
            <ArrowLeftIcon
              className={cn(
                'size-14 p-2 border border-foreground/30 rounded-full cursor-pointer',
                currentSlide === 0 && 'opacity-50 pointer-events-none cursor-not-allowed'
              )}
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlide(currentSlide - 1);
                }
              }}
            />
            <ArrowRightIcon
              className={cn(
                'size-14 p-2 border border-foreground/30 rounded-full bg-foreground text-background cursor-pointer',
                currentSlide === slides.length - 1 && 'opacity-50 pointer-events-none cursor-not-allowed'
              )}
              onClick={() => {
                if (currentSlide < slides.length - 1) {
                  setCurrentSlide(currentSlide + 1);
                }
              }}
            />
          </div>
        </div>
        <div
          className={cn(
            // General styling
            'border-foreground/30 md:col-span-4 md:col-start-1 md:row-start-1 md:border-r',
            // Itself
            'md:grid md:grid-cols-3'
          )}
        >
          <div
            className={cn(
              'px-[34px] pt-10 pb-16',
              // Self styling
              'md:col-span-2 md:col-start-2 md:row-start-1'
            )}
          >
            <Cite>{slides[currentSlide].title}</Cite>
            <Body1 className='mt-6 text-balance'>{slides[currentSlide].description}</Body1>
          </div>
          <Image
            src={slides[currentSlide].imageUrl}
            alt='Staff augmentation'
            width={700}
            height={700}
            className='aspect-video object-cover clip-diagonal clip-diagonal-sm h-full'
          />
        </div>
      </div>

      {/* Indicator dots */}
      <div className='flex justify-center mt-12 gap-10 md:mt-8 md:gap-12'>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={cn('w-4 h-4 rounded-full bg-foreground/30', index === currentSlide && 'bg-foreground')}
            onClick={() => setCurrentSlide(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCurrentSlide(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
