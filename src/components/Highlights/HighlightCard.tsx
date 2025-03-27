import { type Highlight } from '@/types/highlight';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

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

  return (
    <div className='group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-lg w-full max-w-[600px] dark:bg-[#0D0D0D] cursor-pointer'>
      {/* Image Container */}
      <div className='relative h-60 w-full overflow-hidden'>
        <Image src={imageUrl ?? ''} alt={title} fill className='object-cover ' priority />
      </div>

      {/* Content Container */}
      <div className='p-6'>
        {/* Year */}
        <p className='text-sm font-medium'>{year}</p>

        {/* Title */}
        <h3 className='mt-2 text-2xl font-semibold '>{title}</h3>

        {/* Description */}
        <p className='mt-3 text-base line-clamp-3 tracking-wider text-foreground/80'>{description}</p>

        {/* CTA Link */}
        <div className='mt-4 flex items-center justify-between'>
          {ctaUrl && (
            <div className='flex items-center gap-2'>
              <span className='text-xl font-bold text-blue-600 group-hover:tracking-wide transition-all duration-300'>
                See more
              </span>
              <ArrowRightIcon className='h-8 w-8 fill-blue-600 group-hover:ml-2 transition-all duration-300' />
            </div>
          )}

          {/* Brand Icon */}
          {getBrandIcon()}
        </div>
      </div>
    </div>
  );
};
