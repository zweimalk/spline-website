import { BusinessNeedsSection, type Slide } from '@/components/BusinessNeeds/BusinessNeedsSection';
import { Body1 } from '@/components/Typo/Body1';
import { Cite } from '@/components/Typo/Cite';
import { Title } from '@/components/Typo/Title';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import { type Card, InfiniteCardsScroll } from '@/components/infinite-cards-scroll';
import Image from 'next/image';
import { CompetenceAccordion } from './competence-accordion';
import { HowWeWorkSection } from './how-we-work-section';
const slides: Slide[] = [
  {
    title: 'Staff augmentation',
    description:
      "At the heart of our approach is transparency. We're always in touch with stakeholders and make sure they're regularly informed about project progress. Our dedication to transparency extends to our reporting, which always provides clear insights into project developments and milestones. Reach out and within 48 hours, we'll have CVs of top devs who meet your requirements in your inbox.",
    imageUrl: '/images/software-development/business-needs/augmentation.webp',
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

const cards: Card[] = [
  {
    title: (
      <Cite className='text-left'>
        technology <br /> & Electronics
      </Cite>
    ),
    imgAlt: 'Technology & Electronics',
    tags: ['IoT', 'embedded', 'firmware'],
    imageUrl: '/images/service-cards/technology_electronics.png',
  },
  {
    title: (
      <Cite className='text-left'>
        automotive <br /> & mobility
      </Cite>
    ),
    imgAlt: 'Automotive & Mobility',
    tags: ['surfacing', 'engineering', 'hmi'],
    imageUrl: '/images/service-cards/automotive.png',
  },
  {
    title: (
      <Cite className='text-left'>
        healthcare <br /> solutions
      </Cite>
    ),
    imgAlt: 'Healthcare Solutions',
    tags: ['medtech', 'AI', 'imaging'],
    imageUrl: '/images/service-cards/healthcare.png',
  },
  {
    title: (
      <Cite className='text-left'>
        retail media
        <br /> & services
      </Cite>
    ),
    imgAlt: 'Retail Media & Services',
    tags: ['ecommerce', 'fintech', 'automation'],
    imageUrl: '/images/service-cards/retail.png',
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
          <>
            <Image
              src={'/images/software-development/hero.webp'}
              alt={'Hero image'}
              objectFit='cover'
              width={500}
              height={500}
              className='w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl xl:hidden'
            />
            <Image
              src={'/images/software-development/hero_5k.webp'}
              alt={'Hero image'}
              objectFit='cover'
              width={3758}
              height={995}
              className='w-full landscape:h-[600px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl hidden xl:block'
            />
          </>
        }
      />
      <CompetenceAccordion />
      <HowWeWorkSection />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <div className='mt-20 md:mt-40 text-center'>
        <div className='px-4'>
          <div className='max-w-lg mx-auto'>
            <Title>see also</Title>
            <Body1 className='mt-4'>
              We know how you can benefit from our solutions. See selected examples of our projects. We know how you can
              benefit from our solutions. See selected examples of our projects.
            </Body1>
          </div>
        </div>
        <InfiniteCardsScroll cards={cards} />
      </div>
      <ContactPeople />
    </>
  );
}
