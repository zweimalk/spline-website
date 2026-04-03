import Link from 'next/link';
import { Header4 } from './Typo/Header4';

interface JobCardProps {
  title: string;
  url: string;
}

export const JobCard = ({ title, url }: JobCardProps) => {
  return (
    <Link href={url} className='group cursor-pointer relative rounded-[10px] bg-background dark:bg-light-black px-5 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all w-full md:w-[400px] md:h-[400px] flex flex-col items-center justify-center'>
      <Header4 className='mb-6 text-balance text-center'>{title}</Header4>

      <div className='flex items-center gap-2 justify-center'>
        <span className='text-xl font-medium text-spline-blue dark:text-white group-hover:tracking-wide transition-all duration-300'>
          See the details
        </span>
        <svg
          width='23'
          height='22'
          viewBox='0 0 23 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='group-hover:translate-x-2 transition-all duration-300 ml-4'
        >
          <title>Arrow right</title>
          <path
            className='stroke-[#0037C3] transition-all duration-300 dark:stroke-white'
            d='M13.0833 2.18262L21 10.6826M21 10.6826L13.0833 19.1826M21 10.6826L2 10.6826'
            strokeWidth='3'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </Link>
  );
};
