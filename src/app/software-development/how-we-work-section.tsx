'use client';

import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';
import { HowWeWork } from '@/components/how-we-work';
import { AnimatePresence, motion } from 'motion/react';

const items = [
  {
    title: 'Discovery',
    content: (
      <Body1 className='text-foreground/80'>
        We begin by understanding your goals, challenges, and requirements to ensure every solution is aligned with your
        business needs.
      </Body1>
    ),
  },
  {
    title: 'Planning',
    content: (
      <Body1 className='text-foreground/80'>
        Our team defines the architecture, selects the right technologies, and outlines a scalable roadmap tailored to
        your project.
      </Body1>
    ),
  },
  {
    title: 'Team Assembly',
    content: (
      <Body1 className='text-foreground/80'>
        We build a dedicated team of specialists, matching skills and experience to your domain, goals, and timeline.
      </Body1>
    ),
  },
  {
    title: 'Solution Design',
    content: (
      <Body1 className='text-foreground/80'>
        We define the system structure, workflows, and technical approach —balancing performance, scalability, and
        maintainability based on project size and complexity.
      </Body1>
    ),
  },
  {
    title: 'Development & Integration',
    content: (
      <Body1 className='text-foreground/80'>
        Using agile methodologies, we deliver clean, high-quality code with frequent iterations, seamless integration,
        and continuous stakeholder feedback.
      </Body1>
    ),
  },
  {
    title: 'Testing & Quality Assurance',
    content: (
      <Body1 className='text-foreground/80'>
        Our rigorous QA processes—including automated and manual testing —ensure functionality, performance, and
        security at every stage.
      </Body1>
    ),
  },
  {
    title: 'Deployment & Monitoring',
    content: (
      <Body1 className='text-foreground/80'>
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
      <div className='mt-8 max-w-6xl ml-auto sm:hidden'>
        <HowWeWork items={items} />
      </div>
      <div className='hidden sm:block'>
        <div className='border border-foreground/30 rounded-xl'>
          <div className='flex flex-col'>
            {items.map((item, index) => (
              <motion.div
                whileHover={{
                  height: '210px',
                  backgroundColor: 'var(--foreground)',
                  margin: '-1px',
                  color: 'var(--background)',
                  transition: { duration: 0.25 },
                }}
                key={item.title}
                className='grid grid-cols-2 px-4 py-1 border-b border-foreground/30'
              >
                <div className='flex items-center'>
                  <Title className='sm:text-4xl'>{`0${index + 1}`}</Title>
                </div>
                <div className='text-left flex items-center'>
                  <Body1>{item.title}</Body1>
                </div>
                <AnimatePresence key={item.title}>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: '210px',
                    }}
                    transition={{ duration: 0.25 }}
                    className='flex items-center col-start-2 overflow-hidden'
                  >
                    <Body1>{item.content}</Body1>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
