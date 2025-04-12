import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
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
      <ContactPeople />
    </>
  );
}
