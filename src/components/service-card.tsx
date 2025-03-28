import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: ReactNode;
  description: string;
  image: string;
  tags: string[];
}

export const ServiceCard = ({ title, description, image, tags }: ServiceCardProps) => {
  return (
    <div className='group transition-colors duration-300 lg:hover:bg-foreground md:p-4 rounded-lg cursor-pointer max-w-[500px] md:shadow-2xl lg:p-5 xl:shadow-none'>
      <div className='flex gap-4 items-center justify-center md:justify-start pt-3 pb-8 lg:hidden w-full flex-wrap px-2'>
        {tags.map((tag, idx) => {
          return idx > 3 ? (
            <span key={tag} className='sr-only'>
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
      <h2 className='text-[48px] leading-[44px] lg:text-5xl text-center md:text-left lg:group-hover:text-background transition-colors duration-300'>
        {title}
      </h2>
      <div className='hidden gap-4 items-center justify-center md:justify-start pt-4 pb-8 lg:flex w-full flex-wrap px-2'>
        {tags.map((tag, idx) => {
          return idx > 3 ? (
            <span key={tag} className='sr-only'>
              {tag}
            </span>
          ) : (
            <span
              key={tag}
              className='px-2 py-1 bg-foreground/5 lg:group-hover:bg-background/5 text-foreground/75 lg:group-hover:text-background/75 transition-colors duration-300 rounded-full font-medium text-xs sm:text-sm'
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className='mt-8 lg:mt-6'>
        <Image
          src={image}
          alt='hero'
          width={537}
          height={135}
          className='w-full object-cover max-w-[537px] max-h-[135px] rounded-lg clip-diagonal'
        />
      </div>
      <div className='mt-7'>
        <p className='tracking-wide leading-6 text-center md:text-left lg:group-hover:text-background/85 transition-colors duration-300'>
          {description}
        </p>
      </div>
      <div className='flex justify-center md:justify-start items-center mt-8'>
        <div className='flex items-center justify-center gap-2 w-[145px] font-semibold text-blue-700 lg:group-hover:text-background transition-all duration-300 -translate-x-6'>
          See more
          <ArrowRightIcon className='w-8 h-8 text-blue-700 lg:group-hover:text-background transition-all duration-300 lg:group-hover:translate-x-4' />
        </div>
      </div>
    </div>
  );
};
