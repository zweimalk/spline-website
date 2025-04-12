import { HowWeWork } from '@/components/how-we-work';
import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';

const items = [
  {
    title: 'Discovery',
    content: (
      <Body1>
        We begin by understanding your goals, challenges, and requirements to ensure every solution is aligned with your
        business needs.
      </Body1>
    ),
  },
  {
    title: 'Planning',
    content: (
      <Body1>
        Our team defines the architecture, selects the right technologies, and outlines a scalable roadmap tailored to
        your project.
      </Body1>
    ),
  },
  {
    title: 'Team Assembly',
    content: (
      <Body1>
        We build a dedicated team of specialists, matching skills and experience to your domain, goals, and timeline.
      </Body1>
    ),
  },
  {
    title: 'Solution Design',
    content: (
      <Body1>
        We define the system structure, workflows, and technical approach —balancing performance, scalability, and
        maintainability based on project size and complexity.
      </Body1>
    ),
  },
  {
    title: 'Development & Integration',
    content: (
      <Body1>
        Using agile methodologies, we deliver clean, high-quality code with frequent iterations, seamless integration,
        and continuous stakeholder feedback.
      </Body1>
    ),
  },
  {
    title: 'Testing & Quality Assurance',
    content: (
      <Body1>
        Our rigorous QA processes—including automated and manual testing —ensure functionality, performance, and
        security at every stage.
      </Body1>
    ),
  },
  {
    title: 'Deployment & Monitoring',
    content: (
      <Body1>
        We handle smooth releases, infrastructure setup, and post-launch monitoring to ensure system stability and
        performance from day one.
      </Body1>
    ),
  },
];

export const HowWeWorkSection = () => {
  return (
    <div className='mt-20 px-4 md:mt-40'>
      <Title className='md:text-right'>how do we work?</Title>
      <div className='mt-8 max-w-6xl ml-auto'>
        <HowWeWork items={items} />
      </div>
    </div>
  );
};
