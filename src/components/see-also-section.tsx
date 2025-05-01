import { Body1 } from './Typo/Body1';
import { Title } from './Typo/Title';
import { type Card, InfiniteCardsScroll } from './infinite-cards-scroll';

export const SeeAlsoSection = ({ cards }: { cards: Card[] }) => {
  return (
    <div className='mt-20 md:mt-40 text-center'>
      <div className='px-4'>
        <div className='max-w-lg mx-auto'>
          <Title>see also</Title>
          <Body1 className='mt-4'>
            We know how you can benefit from our solutions. See selected examples of our projects. We know how you can
            benefit from our solutions. See selected examples of our projects.
          </Body1>
        </div>
      </div>
      <InfiniteCardsScroll cards={cards} />
    </div>
  );
};
