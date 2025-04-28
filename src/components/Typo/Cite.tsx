import { cn } from '@/lib/utils';

export const Cite = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-[32px] leading-[132%] tracking-wide', className)}>{children}</p>;
};
