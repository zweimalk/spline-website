'use client';

import { cn } from '@/lib/utils';
import {
  type AccordionItemProps,
  ControlledAccordion,
  AccordionItem as Item,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { easeInOut, easeOut, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
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
const AccordionItemComponent = ({
  header,
  isLast,
  ...rest
}: { header: React.ReactNode; isLast: boolean } & AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className='flex w-full text-left justify-between items-center cursor-pointer'>
        <Body1 className={cn('text-2xl md:text-lg', !isEnter && 'group-hover:text-spline-blue')}>{header}</Body1>
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
            strokeWidth='3'
            strokeLinecap='square'
            strokeLinejoin='round'
            className={cn('stroke-foreground', !isEnter && 'group-hover:stroke-spline-blue')}
          />
        </motion.svg>
      </div>
    )}
    buttonProps={{
      className: ({ isEnter }: { isEnter: boolean }) =>
        cn(
          'flex w-full justify-between items-center text-left border-b py-4 group cursor-pointer',
          !isEnter && 'hover:border-spline-blue',
          isLast && 'border-b-0'
        ),
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
  />
);

export const Accordion = ({ items }: AccordionProps) => {
  const [isAnyEntered, setIsAnyEntered] = useState(false);
  const providerValue1 = useAccordionProvider({
    transition: true,
    transitionTimeout: 200,
  });

  const providerValue2 = useAccordionProvider({
    transition: true,
    transitionTimeout: 200,
  });

  const { toggleAll: toggleAll1, stateMap: stateMap1 } = providerValue1;
  const { toggleAll: toggleAll2, stateMap: stateMap2 } = providerValue2;

  type AccordionState = {
    status: 'preEnter' | 'entering' | 'entered' | 'preExit' | 'exiting' | 'exited';
    isMounted: boolean;
    isEnter: boolean;
    isResolved: boolean;
  };

  const checkIfAnyEntered = useCallback((stateMap: ReadonlyMap<unknown, unknown>) => {
    return Array.from(stateMap.values()).some(
      (state) => (state as AccordionState).status === 'entered' || (state as AccordionState).status === 'entering'
    );
  }, []);

  useEffect(() => {
    const isAnyEntered1 = checkIfAnyEntered(stateMap1);
    const isAnyEntered2 = checkIfAnyEntered(stateMap2);

    if (isAnyEntered1 || isAnyEntered2) {
      setIsAnyEntered(true);
    } else {
      setIsAnyEntered(false);
    }
  }, [stateMap1, stateMap2, checkIfAnyEntered]);

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
              isLast={index === items.length - 1}
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
              isLast={index === items.length - 1}
            >
              <div className='origin-top pt-6'>{item.content}</div>
            </AccordionItemComponent>
          );
        })}
      </ControlledAccordion>

      <div className='mt-8 col-span-2' key={'image'}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, aspectRatio: isAnyEntered ? '16/9' : '9/16' }}
          transition={{ duration: 0, ease: easeInOut }}
          src={'/images/software-development/shape.jpeg'}
          alt={'Automotive & mobility'}
          width={1000}
          height={1000}
          className={
            'w-full sm:hidden transition-all duration-300 aspect-[9/16] md:aspect-[16/6] object-cover md:landscape:aspect-[16/3] clip-diagonal clip-diagonal-sm'
          }
        />
        <img
          src={'/images/software-development/shape.jpeg'}
          alt={'Automotive & mobility'}
          width={1000}
          height={1000}
          className={
            'hidden w-full sm:block transition-all duration-300 aspect-[9/16] md:aspect-[16/6] object-cover md:landscape:aspect-[16/3] clip-diagonal clip-diagonal-sm'
          }
        />
      </div>
    </div>
  );
};
