import { cn } from '@/lib/utils';

export const Body1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-lg leading-[150%] tracking-wide', className)}>{children}</p>;
};
