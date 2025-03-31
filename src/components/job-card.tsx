import Link from 'next/link';
import { Header4 } from './Typo/Header4';

interface JobCardProps {
  title: string;
  location: string;
  url: string;
  description?: string[];
  tags?: string[];
}

export const JobCard = ({
  title,
  location = 'Kraków, Poland / Remote',
  url,
  description = [],
  tags = [], // Optional tags array
}: JobCardProps) => {
  return (
    <div className='group relative rounded-[10px] bg-background dark:bg-light-black px-5 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all w-full md:w-[400px] md:h-[400px] grid grid-rows-[auto_auto_auto_1fr_auto]'>
      {/* Tags section */}
      <div className='mb-4 flex gap-2 items-center justify-center pb-3'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='px-2 py-1 bg-gray-1 dark:bg-gray-5 rounded-full font-medium text-xs sm:text-sm text-gray-5 dark:text-gray-1 '
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Job title */}
      <Header4 className='mb-4 text-center'>{title}</Header4>

      {/* Location and job type */}
      <div className='text-[14px] font-light text-gray-5 dark:text-gray-1 ml-4 text-center'>
        <p>{location}</p>
      </div>

      <div className='mt-2 ml-4'>
        <ul className='list-disc list-inside'>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* See more link */}
      <Link href={url} className='flex items-center gap-2 justify-center mt-6'>
        <span className='text-xl font-bold text-spline-blue dark:text-white group-hover:tracking-wide transition-all duration-300'>
          See the details
        </span>
        <svg
          width='23'
          height='22'
          viewBox='0 0 23 22'
          fill='red'
          xmlns='http://www.w3.org/2000/svg'
          className='group-hover:translate-x-2 transition-all duration-300 ml-4'
        >
          <path
            className='stroke-[#1C5BFF] transition-all duration-300 dark:stroke-white'
            d='M13.0833 2.18262L21 10.6826M21 10.6826L13.0833 19.1826M21 10.6826L2 10.6826'
            strokeWidth='3'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
    </div>
  );
};
