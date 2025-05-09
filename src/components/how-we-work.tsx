'use client';

import { easeOut } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  type AccordionItemProps,
  ControlledAccordion,
  AccordionItem as Item,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { motion } from 'motion/react';
import { Body1 } from './Typo/Body1';
import { Title } from './Typo/Title';
interface HowWeWorkItem {
  title: string;
  content: string;
}

interface HowWeWorkProps {
  items: HowWeWorkItem[];
}

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItemComponent = ({
  header,
  index,
  isLast,
  ...rest
}: { header: React.ReactNode; index: number; isLast: boolean } & AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className='items-center gap-x-4 grid grid-cols-[40px_1fr] md:landscape:grid-cols-[120px_1fr]'>
          <Title className='text-3xl col-span-1 md:text-4xl md:landscape:text-6xl'>{`0${index + 1}`}</Title>
          <Body1 className='text-lg col-span-1 md:text-2xl'>{header}</Body1>
        </div>
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
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </motion.svg>
      </>
    )}
    buttonProps={{
      className: cn(
        'flex w-full justify-between items-center text-left py-4 px-4 md:landscape:px-4 md:landscape:py-0 cursor-pointer group border-b border-foreground/30',
        isLast && 'border-b-0'
      ),
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{
      className: 'transition-height duration-200 ease-out',
    }}
  />
);

export const HowWeWork = ({ items }: HowWeWorkProps) => {
  const providerValue = useAccordionProvider({
    transition: true,
    transitionTimeout: 300,
  });

  return (
    <ControlledAccordion className='flex rounded-xl border border-foreground/30 w-full' providerValue={providerValue}>
      <div className='mx-auto w-full'>
        {items.map((item, index) => (
          <AccordionItemComponent
            className='w-full flex-1 items-center justify-between'
            itemKey={item.title}
            key={item.title}
            header={item.title}
            index={index}
            isLast={index === items.length - 1}
          >
            <div className='p-4 text-foreground/60 overflow-hidden flex'>
              <div className='w-[108px] md:w-[56px] md:landscape:w-[60px]' />
              <Body1 className='text-foreground/80 w-lg text-balance'>{item.content}</Body1>
            </div>
          </AccordionItemComponent>
        ))}
      </div>
    </ControlledAccordion>
  );
};
