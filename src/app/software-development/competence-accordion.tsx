import { Header3 } from '@/components/Typo/Header3';

import { Accordion } from '@/components/accordion';

import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';

export type CompetenceAccordionItem = {
  title: string;
  content: React.ReactNode;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const CompetenceAccordion = ({
  items,
  description,
  imageUrl,
  imageAlt,
}: {
  items: CompetenceAccordionItem[];
  description: string;
  imageUrl: string;
  imageAlt: string;
}) => {
  return (
    <div className='px-4 mt-20 md:mt-40'>
      <Header3>automotive & mobility</Header3>
      <div className='xl:flex justify-between items-center'>
        <Title className='mt-4'>competence</Title>
        <Body1 className='mt-8 max-w-[65ch]'>{description}</Body1>
      </div>
      <div className='mt-8'>
        <Accordion items={items} imageUrl={imageUrl} imageAlt={imageAlt} />
      </div>
    </div>
  );
};
