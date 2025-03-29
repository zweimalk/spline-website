import { Testimonial } from '@/types/testimonial';
import Image from 'next/image';
import { Body1 } from '../Typo/Body1';
import { Header3 } from '../Typo/Header3';
interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Displays a single testimonial card with client information and quote
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, position, company, content, avatarUrl } = testimonial;

  return (
    <div className='flex flex-col h-[390px] p-8 bg-background rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.1)] dark:bg-light-black'>
      <div className='flex items-center gap-4 mb-6'>
        <div className='relative w-15 h-15 overflow-hidden rounded-full shrink-0'>
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 64px, 64px'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <Header3 className='text-[20px] font-semibold leading-[150%] tracking-[5%]'>{name}</Header3>
          <Body1 className='text-foreground/70 text-sm'>
            {position}
            {company && ` ${company}`}
          </Body1>
        </div>
      </div>
      <div className='mt-4'>
        <p className='flex-1 text-lg text-foreground/85 leading-snug'>{content}</p>
      </div>
    </div>
  );
}
