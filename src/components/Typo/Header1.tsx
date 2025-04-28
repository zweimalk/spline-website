import { cn } from '@/lib/utils';

export const Header1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h1 className={cn('text-[90px] leading-[90%]', 'md:text-[128px]', '5k:text-[250px]', className)}>{children}</h1>
  );
};
