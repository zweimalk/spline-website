import { HighlightsSection as HighlightsSlider } from './Highlights/HighlightsSection';
import { Header1 } from './Typo/Header1';

export const HighlightsSection = () => {
  return (
    <div className='mt-30 md:mt-60 lg:mt-70'>
      <div className='flex flex-col md:grid md:grid-cols-3 px-4 md:items-center mb-10 md:mb-20'>
        <Header1>insights</Header1>
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
