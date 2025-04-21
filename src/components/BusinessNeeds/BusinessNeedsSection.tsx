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
      <div className='md:landscape:flex md:landscape:items-center md:landscape:justify-between'>
        <Title className=''>
          business <br /> needs
        </Title>
        <Body1 className='mt-24 select-none max-w-[65ch]'>
          We tailor our cooperation models to match your project goals, internal capacity, and preferred level of
          ownership—offering flexible, scalable, and effective engagement options.
        </Body1>
      </div>
      <div className='border-1 border-foreground/30 rounded-lg mt-24 md:landscape:grid md:landscape:grid-cols-[1fr_200px] md:landscape:grid-rows-1 md:landscape:ml-auto md:landscape:max-w-[1400px]'>
        <div className='flex flex-1 gap-2 p-4 justify-end border-b border-foreground/30 md:landscape:col-start-2 md:landscape:border-b-0 md:landscape:border-l'>
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
        <div className='md:landscape:col-start-1 md:landscape:grid-cols-2 md:landscape:row-start-1 md:landscape:grid md:landscape:grid-rows-1 h-full'>
          <div className='px-[34px] pt-10 pb-16 md:col-start-2 md:landscape:pb-0'>
            <Cite>{slides[currentSlide].title}</Cite>
            <Body1 className='mt-6'>{slides[currentSlide].description}</Body1>
          </div>
          <Image
            src={slides[currentSlide].imageUrl}
            alt='Staff augmentation'
            width={700}
            height={700}
            className='aspect-video object-cover md:col-start-1 w-full md:row-start-1 md:landscape:h-full'
          />
        </div>
      </div>
    </div>
  );
};
