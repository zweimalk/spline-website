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
    <div className='px-4 mt-20 md:mt-40'>
      <Title className=''>
        business <br /> needs
      </Title>
      <Body1 className='mt-24 select-none'>
        Choose your cooperation model - we offer adaptable cooperation models to align with your current needs.
      </Body1>
      <div className='border-1 border-foreground/30 rounded-lg mt-24 overflow-hidden'>
        <div className='flex gap-2 p-4 justify-end border-b border-foreground/30'>
          <ArrowLeftIcon
            className={cn(
              'size-12 p-2 border border-foreground/30 rounded-full cursor-pointer',
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
              'size-12 p-2 border border-foreground/30 rounded-full bg-foreground text-background cursor-pointer',
              currentSlide === slides.length - 1 && 'opacity-50 pointer-events-none cursor-not-allowed'
            )}
            onClick={() => {
              if (currentSlide < slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
              }
            }}
          />
        </div>
        <div className='px-[34px] pt-10 pb-16'>
          <Cite>{slides[currentSlide].title}</Cite>
          <Body1 className='mt-6'>{slides[currentSlide].description}</Body1>
        </div>
        <Image
          src={slides[currentSlide].imageUrl}
          alt='Staff augmentation'
          width={500}
          height={500}
          className='aspect-video object-cover'
        />
      </div>
    </div>
  );
};
