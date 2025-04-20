import { BusinessNeedsSection, type Slide } from '@/components/BusinessNeeds/BusinessNeedsSection';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import Image from 'next/image';
import { CompetenceAccordion } from './competence-accordion';
import { HowWeWorkSection } from './how-we-work-section';

const slides: Slide[] = [
  {
    title: 'Staff augmentation',
    description:
      "At the heart of our approach is transparency. We're always in touch with stakeholders and make sure they're regularly informed about project progress. Our dedication to transparency extends to our reporting, which always provides clear insights into project developments and milestones. Reach out and within 48 hours, we'll have CVs of top devs who meet your requirements in your inbox.",
    imageUrl: '/images/software-development/business-needs/augmentation.png',
  },
  {
    title: 'Team Extensions',
    description:
      'Expand your in-house team with experienced engineers who seamlessly integrate into your workflows, tools, and culture. This model gives you full control while accelerating delivery with specialized skills and reduced recruitment overhead.',
    imageUrl: '/images/software-development/business-needs/extensions.png',
  },
  {
    title: 'Dedicated Teams',
    description:
      'Access a full, cross-functional team focused entirely on your project. We assemble and manage a group tailored to your domain and requirements—ensuring aligned goals, efficient communication, and long-term value creation.',
    imageUrl: '/images/software-development/business-needs/teams.png',
  },
  {
    title: 'Managed Services',
    description:
      'Offload full responsibility for your project or product development. From planning and architecture to implementation and maintenance, we deliver end-to-end solutions with clear accountability, timelines, and outcomes.',
    imageUrl: '/images/software-development/business-needs/services.png',
  },
];

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
            className='md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal clip-diagonal-sm md:clip-diagonal-xl'
          />
        }
      />
      <CompetenceAccordion />
      <HowWeWorkSection />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <ContactPeople />
    </>
  );
}
