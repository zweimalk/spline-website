import { cn } from '@/lib/utils';

export const Header1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h1 className={cn(`text-[90px] leading-[90px] xl:text-[140px] xl:leading-[140px]`, className)}>{children}</h1>;
};
