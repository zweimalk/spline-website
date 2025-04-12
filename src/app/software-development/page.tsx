import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';
import Image from 'next/image';
import { CompetenceAccordion } from './competence-accordion';
import { HowWeWorkSection } from './how-we-work-section';

export default function SoftwareDevelopment() {
  return (
    <>
      <Hero
        title={
          <>
            software <br /> development
          </>
        }
        description={
          'We create reliable, scalable, and efficient software solutions tailored to your business needs. From backend systems and cloud platforms to mobile and desktop applications, our development teams bring deep technical knowledge, agile processes, and a strong focus on quality to every project.'
        }
        mediaElement={
          <Image
            src={'/images/software-development/hero.png'}
            alt={'Hero image'}
            width={509}
            height={300}
            className='md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal-responsive'
          />
        }
      />
      <CompetenceAccordion />
      <HowWeWorkSection />
      <HighlightsSection />
      <div className='px-4 mt-20 md:mt-40'>
        <Title className='text-center'>see also</Title>
        <Body1 className='text-center mt-4'>
          We know how you can benefit from our solutions. See selected examples of our projects. We know how you can
          benefit from our solutions. See selected examples of our projects.
        </Body1>
      </div>
      <ContactPeople />
    </>
  );
}
