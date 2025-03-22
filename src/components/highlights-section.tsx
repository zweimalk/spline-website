import { HighlightsSection as HighlightsSlider } from './Highlights/HighlightsSection';

export const HighlightsSection = () => {
  return (
    <div className='mt-50 md:mt-60 lg:mt-70'>
      <div className='flex flex-col md:grid md:grid-cols-3 px-4 md:items-center mb-10 md:mb-20'>
        <h1 className='text-7xl xl:text-9xl col-span-2'>insights</h1>
        <div className='flex flex-col mt-8 gap-y-7'>
          <h2 className='font-medium'>About our recent work</h2>
          <p className='tracking-wide text-foreground/75'>
            Explore our latest projects, case studies, and expert articles. See how we drive innovation and deliver
            impactful technology solutions.
          </p>
        </div>
      </div>
      <HighlightsSlider />
    </div>
  );
};
