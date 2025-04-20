'use client';

import {
  Accordion as AccordionComponent,
  type AccordionItemProps,
  AccordionItem as Item,
} from '@szhsin/react-accordion';
import { AnimatePresence, easeOut, motion } from 'motion/react';
import Image from 'next/image';
import { Body1 } from './Typo/Body1';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItemComponent = ({ header, ...rest }: { header: React.ReactNode } & AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className='flex w-full text-left justify-between items-center cursor-pointer'>
        <Body1 className='text-2xl md:text-lg'>{header}</Body1>
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isEnter ? 90 : 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={'h-6 w-6'}
        >
          <title>{header}</title>
          <path
            d='M13.0833 3L21 11.5M21 11.5L13.0833 20M21 11.5L2 11.5'
            stroke='var(--foreground)'
            strokeWidth='3'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
        </motion.svg>
      </div>
    )}
    buttonProps={{
      className: 'flex w-full justify-between items-center text-left border-b py-4',
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'py-4' }}
  />
);
// TODO: max pone item open a
export const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className='mx-auto w-full md:landscape:grid md:landscape:grid-cols-[1fr_1fr] md:landscape:gap-x-6'>
      <AccordionComponent transition transitionTimeout={200}>
        {items.map((item, index) => {
          if (index > 2) return null;
          return (
            <AccordionItemComponent
              className='w-full flex-1 items-center justify-between'
              key={item.title}
              header={item.title}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className='origin-top py-4'
                >
                  {item.content}
                </motion.div>
              </AnimatePresence>
            </AccordionItemComponent>
          );
        })}
      </AccordionComponent>
      <AccordionComponent transition transitionTimeout={200}>
        {items.map((item, index) => {
          if (index <= 2) return null;
          return (
            <AccordionItemComponent
              className='w-full flex-1 items-center justify-between'
              key={item.title}
              header={item.title}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className='origin-top py-4'
                >
                  {item.content}
                </motion.div>
              </AnimatePresence>
            </AccordionItemComponent>
          );
        })}
      </AccordionComponent>

      <div className='mt-8 col-span-2' key={'image'}>
        <Image
          src={'/images/software-development/shape.jpeg'}
          alt={'Automotive & mobility'}
          width={1000}
          height={1000}
          className={
            'w-full transition-all duration-300 aspect-[9/16] md:aspect-[16/6] object-cover md:landscape:aspect-[16/3]'
          }
        />
      </div>
    </div>
  );
};
