'use client';

import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from './icons';
import { Link } from './link';

interface HeroProps {
  title: ReactNode;
  description: string;
  mediaElement: ReactNode;
}

export const Hero = (props: HeroProps) => {
  const { title, description, mediaElement } = props;

  return (
    <div className='mt-24 md:mt-28'>
      <div className='flex flex-col justify-center px-4 gap-y-6'>
        <div>
          <div className='flex'>
            <h1 className='text-6xl text-left md:text-8xl 2xl:text-[160px]'>{title}</h1>
            <div className='flex-col ml-auto hidden md:flex md:gap-y-7 mt-3.5'>
              <Link
                aria-label='Go to Spline LinkedIn'
                href='https://www.linkedin.com/company/spline-polska'
                className='flex items-center hover:underline'
              >
                <LinkedinLogoIcon className='w-6 h-6 fill-background' />
              </Link>
              <Link
                aria-label='Go to Spline Facebook'
                href='https://www.facebook.com/share/12LutkKFykh/?mibextid=wwXIfr'
                className='flex items-center hover:underline'
              >
                <FacebookLogoIcon className='w-6 h-6 fill-background' />
              </Link>
              <Link
                aria-label='Go to Spline Instagram'
                href='https://www.instagram.com/spline_design_?igsh=dnUzaGl3M3gza25p'
                className='flex items-center hover:underline'
              >
                <InstagramLogoIcon className='w-6 h-6 fill-background' />
              </Link>
            </div>
          </div>
          <div className='md:hidden'>{mediaElement}</div>

          <p className='max-w-[509px] mt-9 md:mt-10 tracking-wider'>{description}</p>
          <button
            className='cursor-pointer mt-8 md:mt-10 flex items-center gap-x-4 bg-foreground text-background px-5 py-3 xl:px-4 xl:py-2 rounded-lg tracking-wider leading-[150%] xl:text-[15px] font-semibold'
            onClick={() => {
              document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Connect right now
            <div className='flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 ml-2'>
              <ArrowRightIcon className='size-8' />
            </div>
          </button>
          <div className='hidden md:block'>{mediaElement}</div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-14 md:hidden'>
        <ArrowDownIcon className='fill-foreground/30 size-10 cursor-pointer' />
      </div>
    </div>
  );
};
