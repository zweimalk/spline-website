export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='text-heading text-[64px] leading-[60px] md:landscape:text-[120px] md:landscape:leading-[108px] 2lg:text-[120px] 2lg:leading-[108px] 5k:text-[437px] 5k:leading-[380px] '>
      {children}
    </h3>
  );
};
