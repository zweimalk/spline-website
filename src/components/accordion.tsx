'use client';

import { cn } from '@/lib/utils';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, easeOut, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { Body1 } from './Typo/Body1';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [isAnyOpen, setIsAnyOpen] = useState(false);

  return (
    <div className='mx-auto w-full max-w-lg rounded-xl'>
      {items.map((item, index) => (
        <Disclosure key={item.title + index}>
          {({ open }) => {
            // Update the open state when any disclosure changes
            if (open !== isAnyOpen) {
              setIsAnyOpen(open);
            }
            return (
              <div key={item.title + index}>
                <DisclosureButton className='flex w-full items-center justify-between border-b text-left py-4 cursor-pointer'>
                  <Body1 className='text-2xl'>{item.title}</Body1>
                  <svg
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={cn('h-6 w-6 transition-transform duration-300', open && 'rotate-90')}
                  >
                    <path
                      d='M13.0833 3L21 11.5M21 11.5L13.0833 20M21 11.5L2 11.5'
                      stroke='var(--foreground)'
                      strokeWidth='3'
                      strokeLinecap='square'
                      strokeLinejoin='round'
                    />
                  </svg>
                </DisclosureButton>
                <AnimatePresence>
                  <DisclosurePanel>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                      className='origin-top py-4'
                    >
                      {item.content}
                    </motion.div>
                  </DisclosurePanel>
                </AnimatePresence>
              </div>
            );
          }}
        </Disclosure>
      ))}
      <div className='mt-8'>
        <Image
          src={'/images/software-development/shape.jpeg'}
          alt={'Automotive & mobility'}
          width={1000}
          height={1000}
          className={cn('w-full transition-all duration-300 aspect-[9/16] object-cover', isAnyOpen && 'aspect-[16/9] ')}
        />
      </div>
    </div>
  );
};
