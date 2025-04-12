import { HowWeWork } from '@/components/how-we-work';
import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';

const items = [
  {
    title: 'Discovery',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Planning',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Team Assembly',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Solution Design',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Development & Integration',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Testing & Quality Assurance',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
  {
    title: 'Deployment & Monitoring',
    content: (
      <Body1>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
    ),
  },
];

export const HowWeWorkSection = () => {
  return (
    <div className='mt-20 px-4 md:mt-40'>
      <Title className='md:text-right'>how do we work?</Title>
      <div className='mt-8'>
        <HowWeWork items={items} />
      </div>
    </div>
  );
};
