import clsx from 'clsx';
import Image from 'next/image';
import { TestimonialsSection } from './Testimonials/TestimonialsSection';
import { Body1 } from './Typo/Body1';
interface StatItemProps {
  number: string;
  label: string;
  className?: string;
}

function StatItem({ number, label, className }: StatItemProps) {
  return (
    <div className={clsx('flex flex-col items-center text-center', className)}>
      <h2 className='text-8xl md:text-6xl mb-3 text-zinc-900 dark:text-white'>{number}</h2>
      <Body1 className='text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal'>{label}</Body1>
    </div>
  );
}

interface CertificationTisaxItemProps {
  title: string;
  className?: string;
}

function CertificationTisaxItem({ title, className }: CertificationTisaxItemProps) {
  return (
    <div className={clsx('flex flex-col items-center text-center', className)}>
      <div className='relative aspect-square'>
        <Image
          alt='Tisax'
          key={`logo-tisax-dark`}
          src={'/logos/tisax-dark.svg'}
          className='hidden dark:block transition-all'
          width={100}
          height={100}
          draggable={false}
        />
        <Image
          alt='Tisax'
          key={`logo-tisax`}
          src={'/logos/tisax.svg'}
          className='block dark:hidden transition-all'
          width={100}
          height={100}
          draggable={false}
        />
      </div>
      <Body1 className='text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal'>{title}</Body1>
    </div>
  );
}

interface CertificationISOItemProps {
  title: string;
  className?: string;
}

function CertificationISOItem({ title, className }: CertificationISOItemProps) {
  return (
    <div className={clsx('flex flex-col items-center text-center', className)}>
      <div className='relative aspect-square'>
        <Image
          alt='ISO'
          key={`logo-iso-dark`}
          src={'/logos/iso-dark.svg'}
          className='hidden dark:block transition-all'
          width={100}
          height={100}
          draggable={false}
        />
        <Image
          alt='ISO'
          key={`logo-iso`}
          src={'/logos/iso.svg'}
          className='block dark:hidden transition-all'
          width={100}
          height={100}
          draggable={false}
        />
      </div>
      <Body1 className='text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal'>{title}</Body1>
    </div>
  );
}

export function CompanyStats() {
  return (
    <div className='mt-30 grid grid-cols-1 lg:horizontal:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8 sm:px-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0 px-4 sm:px-0'>
        <StatItem
          number='15'
          label='years of expertise'
          className='xl:border-r border-foreground/20 xl:border-b md:p-6 flex items-center justify-center'
        />
        <StatItem
          number='6'
          label='years on the market'
          className='xl:border-r border-foreground/20 xl:border-b md:p-6 flex items-center justify-center'
        />
        <StatItem
          number='6'
          label='business sectors'
          className='xl:border-b border-foreground/20 md:p-6 flex items-center justify-center'
        />
        <StatItem
          number='3'
          label='business sectors'
          className='xl:border-r border-foreground/20 md:p-6 flex items-center justify-center'
        />
        <CertificationTisaxItem
          title='Tisax certification'
          className='xl:border-r border-foreground/20 md:p-6 flex items-center justify-center'
        />
        <CertificationISOItem
          title='ISO 13485 & ISO 9001 certification'
          className='md:p-6 flex items-center justify-center'
        />
      </div>
      <div className='relative'>
        <svg
          width='33'
          height='26'
          viewBox='0 0 33 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='hidden md:block absolute top-6 -left-8.5 z-20'
        >
          <title>Spline Logo</title>
          <path
            d='M19.8481 25.728V14.4C19.8481 10.304 21.1281 7.04 23.6881 4.608C26.3121 2.112 29.4161 0.576 33.0001 0V4.512C31.2721 5.088 29.7361 6.144 28.3921 7.68C27.1121 9.216 26.4721 11.072 26.4721 13.248H32.8081V25.728H19.8481ZM0.840088 25.728V14.4C0.840088 10.304 2.12009 7.04 4.68009 4.608C7.30409 2.112 10.4081 0.576 13.9921 0V4.512C12.2641 5.088 10.7281 6.144 9.38409 7.68C8.10409 9.216 7.46409 11.072 7.46409 13.248H13.8001V25.728H0.840088Z'
            fill='#191919'
            className='fill-foreground'
          />
        </svg>

        <TestimonialsSection />
      </div>
    </div>
  );
}
