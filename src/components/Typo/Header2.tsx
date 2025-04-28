import { cn } from '@/lib/utils';

export const Header2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h2
      className={cn(
        'sm:text-[48px] leading-[95%]',
        'md:text-[56px] md:leading-[95%] tracking-[5%]',
        '5k:text-[96px] 5k:leading-[95%] tracking-[2%]',
        className
      )}
    >
      {children}
    </h2>
  );
};
