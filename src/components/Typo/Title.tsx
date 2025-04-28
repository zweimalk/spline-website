import { cn } from '@/lib/utils';

export const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3
      className={cn(
        'text-heading text-[56px]',
        'sm:text-[64px] leading-[90%]',
        'md:text-[120px] md:leading-[108px]',
        '5k:text-[437px] 5k:leading-[87%]',
        className
      )}
    >
      {children}
    </h3>
  );
};
