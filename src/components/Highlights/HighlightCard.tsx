import { cn } from '@/lib/utils';
import { type Highlight } from '@/types/highlight';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Body1 } from '../Typo/Body1';
import { Header3 } from '../Typo/Header3';
interface HighlightCardProps {
  highlight: Highlight;
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const { year, title, description, imageUrl, ctaUrl, brandIcon } = highlight;

  const getBrandIcon = () => {
    if (!brandIcon) return null;
    return (
      <Image
        src={`/icons/brand/${brandIcon.toLowerCase()}.svg`}
        alt={`${brandIcon} brand icon`}
        width={40}
        height={40}
        className='object-cover fill-foreground w-10 h-10'
      />
    );
  };

  const longTitle = title.length > 23;

  return (
    <div className='group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-lg  dark:bg-light-black cursor-pointer w-[340px] h-[450px]'>
      {/* Image Container */}
      <div className='relative h-[197px] w-full overflow-hidden'>
        <Image src={imageUrl ?? ''} alt={title} fill className='object-cover ' priority />
      </div>

      {/* Content Container */}
      <div className='p-6'>
        {/* Year */}
        <p className='text-sm font-medium text-gray-4'>{year}</p>

        {/* Title */}
        <Header3 className='mt-2'>{title}</Header3>

        {/* Description */}
        <Body1 className={cn('text-gray-5 dark:text-dark-text mt-5 line-clamp-3', longTitle && 'line-clamp-2')}>
          {description}
        </Body1>

        {/* CTA Link */}
        <div className='mt-4 flex items-center justify-between'>
          {ctaUrl && (
            <div className='flex items-center gap-2'>
              <span className='text-xl font-bold text-spline-blue group-hover:tracking-wide transition-all duration-300'>
                See more
              </span>
              <ArrowRightIcon className='h-8 w-8 fill-spline-blue group-hover:ml-2 transition-all duration-300' />
            </div>
          )}

          {/* Brand Icon */}
          {getBrandIcon()}
        </div>
      </div>
    </div>
  );
};
