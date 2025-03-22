import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { Button } from './button';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from './icons';
import { Link } from './link';

export const Hero = () => {
  return (
    <div className='mt-28'>
      <div className='flex flex-col justify-center px-4 gap-y-6'>
        <div>
          <div className='flex'>
            <h1 className='text-6xl text-left md:text-8xl 2xl:text-[160px]'>
              connecting <br /> professionals
            </h1>
            <div className='flex-col ml-auto hidden md:flex md:gap-y-4 xl:gap-y-6'>
              <Link href='https://linkedin.com/company/spline' className='flex items-center hover:underline'>
                <span className='sr-only'>LinkedIn</span>
                <LinkedinLogoIcon className='w-7 md:h-7' />
              </Link>
              <Link href='https://instagram.com/spline' className='flex items-center hover:underline'>
                <span className='sr-only'>Instagram</span>
                <InstagramLogoIcon className='w-7 md:h-7' />
              </Link>
              <Link href='https://facebook.com/spline' className='flex items-center hover:underline'>
                <span className='sr-only'>Facebook</span>
                <FacebookLogoIcon className='w-7 md:h-7' />
              </Link>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full object-cover md:hidden mt-6 rounded-lg clip-diagonal-40'
          >
            <source src='/video/hero_video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p className='max-w-[509px] mt-9 md:mt-10 tracking-wider'>
            We build lasting technology partnerships, empowering organizations across industries to develop, validate,
            design, engineer, test, implement, and maintain advanced digital solutions. Over the years, we have fostered
            a unique environment where top engineers and IT professionals thrive, driving innovation in every project.
          </p>
          {/* TODO: think about bigger right arrow */}
          <Button color='dark/white' className='cursor-pointer mt-8 md:mt-10 xl:text-2xl flex items-center gap-x-4'>
            Connect right now
            <div className='flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10'>
              <ArrowRightIcon className='font-bold' />
            </div>
          </Button>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='hidden md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal-60'
          >
            <source src='/video/hero_video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex justify-center items-center mt-14 md:hidden'>
        <ArrowDownIcon className='font-bold fill-foreground size-10 cursor-pointer' />
      </div>
    </div>
  );
};
