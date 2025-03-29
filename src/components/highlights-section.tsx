import { HighlightsSection as HighlightsSlider } from './Highlights/HighlightsSection';
import { Header1 } from './Typo/Header1';

export const HighlightsSection = () => {
  return (
    <div className='mt-30 lg:mt-40'>
      <div className='grid grid-cols-1 px-4 mb-10 lg:grid-cols-2 lg:mb-20'>
        <Header1 className=''>insights</Header1>
        <div className='flex flex-col mt-8 gap-y-7 md:max-w-[350px] lg:max-w-[500px]'>
          <h2 className='font-medium'>About our recent work</h2>
          <p className='tracking-wide text-gray-5 dark:text-gray-3'>
            We know how you can benefit from our solutions. See selected examples of our projects. We know how you can
            benefit from our solutions. See selected examples of our projects.
          </p>
        </div>
      </div>
      <HighlightsSlider />
    </div>
  );
};
