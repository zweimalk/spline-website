import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

interface DiagonalImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const DiagonalImage: FC<DiagonalImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='relative w-full'>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn('w-full h-full object-cover', className)}
        />
      </div>
    </div>
  );
};
