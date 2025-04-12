'use client';

import { AnimatePresence, easeInOut } from 'motion/react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { motion } from 'motion/react';
import { Body1 } from './Typo/Body1';
import { Title } from './Typo/Title';

interface HowWeWorkItem {
  title: string;
  content: React.ReactNode;
}

interface HowWeWorkProps {
  items: HowWeWorkItem[];
}

export const HowWeWork = ({ items }: HowWeWorkProps) => {
  return (
    <div className='flex rounded-xl border border-foreground/30 w-full'>
      <div className='mx-auto w-full divide-y divide-foreground/30'>
        {items.map((item, index) => (
          <Disclosure key={item.title + index} as='div'>
            {({ open }) => (
              <>
                <DisclosureButton className='flex w-full items-center justify-between text-left py-4 px-4 cursor-pointer'>
                  <div className='items-center gap-x-4 grid grid-cols-[40px_1fr]'>
                    <Title className='text-3xl col-span-1 md:text-4xl'>{`0${index + 1}`}</Title>
                    <Body1 className='text-lg col-span-1 md:text-2xl'>{item.title}</Body1>
                  </div>
                  <motion.svg
                    initial={{ rotate: 0 }}
                    animate={{ rotate: open ? 270 : 0 }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={'h-6 w-6'}
                  >
                    <path
                      d='M13.0833 3L21 11.5M21 11.5L13.0833 20M21 11.5L2 11.5'
                      stroke='var(--foreground)'
                      strokeWidth='3'
                      strokeLinecap='square'
                      strokeLinejoin='round'
                    />
                  </motion.svg>
                </DisclosureButton>
                <AnimatePresence>
                  <DisclosurePanel>
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: '1000px' }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: easeInOut,
                        layout: true,
                      }}
                      className='origin-top p-4 pt-0 text-foreground/60 overflow-hidden grid grid-cols-[40px_1fr]'
                    >
                      <div className='col-span-1' />
                      <div className='pl-4'>{item.content}</div>
                    </motion.div>
                  </DisclosurePanel>
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
