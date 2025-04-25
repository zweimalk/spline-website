'use client';

import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';
import { HowWeWork } from '@/components/how-we-work';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const items = [
  {
    title: 'Discovery',
    content:
      'We begin by understanding your goals, challenges, and requirements to ensure every solution is aligned with your business needs.',
  },
  {
    title: 'Planning',
    content:
      'Our team defines the architecture, selects the right technologies, and outlines a scalable roadmap tailored to your project.',
  },
  {
    title: 'Team Assembly',
    content:
      'We build a dedicated team of specialists, matching skills and experience to your domain, goals, and timeline.',
  },
  {
    title: 'Solution Design',
    content:
      'We define the system structure, workflows, and technical approach —balancing performance, scalability, and maintainability based on project size and complexity.',
  },
  {
    title: 'Development & Integration',
    content:
      'Using agile methodologies, we deliver clean, high-quality code with frequent iterations, seamless integration, and continuous stakeholder feedback.',
  },
  {
    title: 'Testing & Quality Assurance',
    content:
      'Our rigorous QA processes—including automated and manual testing —ensure functionality, performance, and security at every stage.',
  },
  {
    title: 'Deployment & Monitoring',
    content:
      'We handle smooth releases, infrastructure setup, and post-launch monitoring to ensure system stability and performance from day one.',
  },
];

export const HowWeWorkSection = () => {
  return (
    <div className='mt-20 px-4 md:mt-40'>
      <Title className='md:text-right'>how do we work?</Title>
      <div className='mt-8 max-w-6xl ml-auto lg:landscape:hidden'>
        <HowWeWork items={items} />
      </div>
      <div className='hidden lg:landscape:block max-w-7xl ml-auto mt-10'>
        <div className='border border-foreground/30 rounded-xl'>
          <div className='flex flex-col'>
            {items.map((item, index) => (
              <motion.div
                initial='initial'
                whileHover='hover'
                animate='initial'
                variants={{
                  initial: {
                    color: 'var(--foreground)',
                    margin: '0px',
                  },
                  hover: {
                    backgroundColor: 'var(--foreground)',
                    margin: '-1px',
                    color: 'var(--background)',
                    transition: { duration: 0.25 },
                    paddingBottom: '60px',
                  },
                }}
                key={item.title}
                className='grid grid-cols-[1fr_3fr] p-4 border-b border-foreground/30 last:border-b-0 cursor-pointer'
              >
                <motion.h3
                  variants={{
                    initial: {
                      transition: { duration: 0.25 },
                    },
                    hover: {
                      fontSize: '80px',
                      marginTop: '40px',
                      transition: { duration: 0.25 },
                    },
                  }}
                  className={cn('text-heading text-4xl')}
                >
                  {`0${index + 1}`}
                </motion.h3>
                <div className='text-left flex items-center'>
                  <Body1>{item.title}</Body1>
                </div>
                <motion.div
                  variants={{
                    initial: {
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.25 },
                    },
                    hover: {
                      height: 'auto',
                      opacity: 1,
                      transition: { duration: 0.25 },
                    },
                  }}
                  className='col-start-2 text-background -mt-6'
                >
                  {item.content}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
