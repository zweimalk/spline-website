import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Header2 } from './Typo/Header2';

interface ServiceCardProps {
  title: ReactNode;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const ServiceCard = ({ title, description, image, tags, link }: ServiceCardProps) => {
  return (
    <Link href={link || '/'}>
      <div className='group transition-colors duration-300 lg:hover:bg-foreground md:p-4 rounded-[10px] cursor-pointer max-w-[532px] md:shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-5 xl:shadow-none'>
        <div className='flex gap-4 items-center justify-center lg:landscape:justify-start pt-3 pb-8 w-full flex-wrap px-2 lg:pl-0'>
          {tags.map((tag, idx) => {
            return idx > 2 ? (
              <span
                key={tag}
                className='px-2 py-1 bg-foreground/5 lg:group-hover:bg-background/5 text-foreground/80 lg:group-hover:text-background/75 transition-colors duration-300 rounded-full font-medium text-xs sm:text-sm hidden lg:landscape:block'
              >
                {tag}
              </span>
            ) : (
              <span
                key={tag}
                className='px-2 py-1 bg-foreground/5 lg:group-hover:bg-background/5 text-foreground/80 lg:group-hover:text-background/75 transition-colors duration-300 rounded-full font-medium text-xs sm:text-sm'
              >
                {tag}
              </span>
            );
          })}
        </div>
        <Header2 className='text-[48px] leading-[44px] lg:text-5xl text-center md:landscape:text-left lg:group-hover:text-background transition-colors duration-300'>
          {title}
        </Header2>
        <div className='mt-8 lg:mt-6'>
          <Image
            src={image}
            alt='hero'
            width={537}
            height={135}
            className='w-full object-cover max-w-[537px] max-h-[135px] rounded-lg clip-diagonal clip-diagonal-sm md:clip-diagonal-md'
          />
        </div>
        <div className='mt-7'>
          <p className='tracking-wide leading-6 text-center md:text-left lg:group-hover:text-background/85 transition-colors duration-300 line-clamp-3'>
            {description}
          </p>
        </div>
        <div className='flex items-center justify-center font-medium text-spline-blue dark:text-white lg:group-hover:text-background transition-all duration-300 w-full border border-spline-blue dark:border-white rounded-full px-4 py-1 mt-8 lg:border-0 lg:bg-transparent lg:justify-start lg:pl-0'>
          See more
          <ArrowRightIcon className='hidden lg:block w-8 h-8 text-spline-blue lg:group-hover:text-background transition-all duration-300 lg:group-hover:translate-x-4 dark:text-white lg:ml-4' />
        </div>
      </div>
    </Link>
  );
};
