'use client';

import {
  type AccordionItemProps,
  ControlledAccordion,
  AccordionItem as Item,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { easeOut, motion } from 'motion/react';
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
  />
);

export const Accordion = ({ items }: AccordionProps) => {
  const providerValue1 = useAccordionProvider({
    transition: true,
    transitionTimeout: 200,
    onStateChange: (event) => {
      console.log('EVENT 1: ', event);
    },
  });

  const providerValue2 = useAccordionProvider({
    transition: true,
    transitionTimeout: 200,
    onStateChange: (event) => {
      console.log('EVENT 2: ', event);
    },
  });

  const { toggleAll: toggleAll1 } = providerValue1;
  const { toggleAll: toggleAll2 } = providerValue2;

  return (
    <div className='mx-auto w-full md:landscape:grid md:landscape:grid-cols-[1fr_1fr] md:landscape:gap-x-6'>
      <ControlledAccordion providerValue={providerValue1}>
        {items.map((item, index) => {
          if (index > 2) return null;
          return (
            <AccordionItemComponent
              className='w-full flex-1 items-center justify-between'
              key={item.title}
              header={item.title}
              onClick={() => {
                toggleAll2(false);
              }}
            >
              <div className='origin-top pt-6'>{item.content}</div>
            </AccordionItemComponent>
          );
        })}
      </ControlledAccordion>
      <ControlledAccordion providerValue={providerValue2}>
        {items.map((item, index) => {
          if (index <= 2) return null;
          return (
            <AccordionItemComponent
              className='w-full flex-1 items-center justify-between'
              key={item.title}
              header={item.title}
              onClick={() => {
                toggleAll1(false);
              }}
            >
              <div className='origin-top pt-6'>{item.content}</div>
            </AccordionItemComponent>
          );
        })}
      </ControlledAccordion>

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
