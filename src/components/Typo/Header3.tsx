import { cn } from '@/lib/utils';

export const Header3 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={cn('text-[24px] leading-[118%] tracking-[2%] font-medium', className)}>{children}</h3>;
};
