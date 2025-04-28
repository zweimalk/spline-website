import { cn } from '@/lib/utils';

export const Body1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <p
      className={cn(
        'text-lg leading-[150%] tracking-[5%]',
        'md:text-base md:leading-[150%] md:tracking-[3%]',
        '5k:text-[26px] 5k:leading-[150%] 5k:tracking-[5%]',
        className
      )}
    >
      {children}
    </p>
  );
};
