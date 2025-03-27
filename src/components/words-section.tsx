import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Button } from './button';
import { FlipWords } from './flip-words';

export const WordsSection = () => {
  const words = ['rapid support', 'excellence longevity', 'sustainability', 'high quality standards'];
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-start justify-start gap-2'>
        <div className='h-[30rem] flex justify-start items-center px-4 text-left'>
          <div className='text-foreground/75 text-8xl md:text-8xl font-light text-left -mb-60'>
            driven by <FlipWords words={words} />
          </div>
        </div>
        <Button color='dark/white' className='cursor-pointer xl:text-2xl flex items-center gap-x-4'>
          Connect right now
          <div className='flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10'>
            <ArrowRightIcon className='font-bold' />
          </div>
        </Button>
      </div>
    </div>
  );
};
