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
    <div className='mt-20 px-4 md:px-0'>
      {/* Header */}
      <div className='lg:flex lg:justify-between lg:items-start lg:gap-4'>
        <Title className=''>
          business <br className='lg:hidden' /> needs
        </Title>
        <Body1 className='mt-24 select-none max-w-lg lg:mt-4'>
          We tailor our cooperation models to match your project goals, internal capacity, and preferred level of
          ownership—offering flexible, scalable, and effective engagement options.
        </Body1>
      </div>

      {/* Slider */}
      <div
        className={cn('w-full border-1 h-[752px] border-foreground/30 rounded-lg mt-24 flex flex-col overflow-hidden')}
      >
        <div className='p-4 border-b border-foreground/30 md:col-span-1 md:col-start-5 md:border-0 xl:col-start-1'>
          <div className='flex items-center gap-2 justify-end'>
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
        <div className={cn('border-foreground/30 grow-1')}>
          <div className={cn('px-[34px] pt-10 pb-16')}>
            <Cite>{slides[currentSlide].title}</Cite>
            <Body1 className='mt-6 text-balance text-md'>{slides[currentSlide].description}</Body1>
          </div>
        </div>
        <Image
          src={slides[currentSlide].imageUrl}
          alt='Staff augmentation'
          width={700}
          height={700}
          className='aspect-video object-cover h-56'
        />
      </div>

      {/* Indicator dots */}
      <div className='flex justify-center mt-12 gap-6 md:mt-8 md:gap-8'>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={cn(
              'size-3 rounded-full bg-foreground/30 cursor-pointer',
              index === currentSlide && 'bg-foreground'
            )}
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
