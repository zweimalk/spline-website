'use client';

import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from './icons';
import { Link } from './link';

export const Hero = () => {
  return (
    <div className='mt-24 md:mt-28'>
      <div className='flex flex-col justify-center px-4 gap-y-6'>
        <div>
          <div className='flex'>
            <h1 className='text-6xl text-left md:text-8xl 2xl:text-[160px]'>
              connecting <br /> professionals
            </h1>
            <div className='flex-col ml-auto hidden md:flex md:gap-y-7 mt-3.5'>
              <Link href='https://www.linkedin.com/company/spline-polska' className='flex items-center hover:underline'>
                <LinkedinLogoIcon className='w-6 h-6 fill-background' />
              </Link>
              <Link
                href='https://www.facebook.com/share/12LutkKFykh/?mibextid=wwXIfr'
                className='flex items-center hover:underline'
              >
                <FacebookLogoIcon className='w-6 h-6 fill-background' />
              </Link>
              <Link
                href='https://www.instagram.com/spline_design_?igsh=dnUzaGl3M3gza25p'
                className='flex items-center hover:underline'
              >
                <InstagramLogoIcon className='w-6 h-6 fill-background' />
              </Link>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className='w-full object-cover md:hidden mt-6 rounded-lg clip-diagonal clip-diagonal-sm'
          >
            <source src='/video/hero_video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p className='max-w-[509px] mt-9 md:mt-10 tracking-wider'>
            We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
            them gain an edge over their competition. We understand that organisations we work with may be at different
            points in their digital journey.
          </p>
          <button
            className='cursor-pointer mt-8 md:mt-10 flex items-center gap-x-4 bg-foreground text-background px-5 py-3 xl:px-4 xl:py-2 rounded-lg tracking-wider leading-[150%] xl:text-[15px] font-[500]'
            onClick={() => {
              document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Connect right now
            <div className='flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 ml-2'>
              <ArrowRightIcon className='font-bold' />
            </div>
          </button>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className='hidden md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal-responsive'
          >
            <source src='/video/hero_video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex justify-center items-center mt-14 md:hidden'>
        <ArrowDownIcon className='font-bold fill-foreground/30 size-10 cursor-pointer' />
      </div>
    </div>
  );
};
