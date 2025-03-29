import { cn } from '@/lib/utils';

export const Header4 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h4 className={cn('text-[36px] leading-[118%] tracking-[2%]', className)}>{children}</h4>;
};
