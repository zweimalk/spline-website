import { BusinessNeedsSection, type Slide } from '@/components/BusinessNeeds/BusinessNeedsSection';
import { Body1 } from '@/components/Typo/Body1';
import { Cite } from '@/components/Typo/Cite';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import type { Card } from '@/components/infinite-cards-scroll';
import { SeeAlsoSection } from '@/components/see-also-section';
import Image from 'next/image';
import { CompetenceAccordion, type CompetenceAccordionItem } from '../software-development/competence-accordion';
import type { HowWeWorkItem } from '../software-development/how-we-work-section';
import { HowWeWorkSection } from '../software-development/how-we-work-section';

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

const compoetenceItems: CompetenceAccordionItem[] = [
  {
    title: 'Medical Device Engineering',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Product development adhering to ISO 13485 and IEC 62304 standards</li>
          <li>Risk management and safety analysis following ISO 14971</li>
          <li>Design and development of medical software and hardware</li>
          <li>Verification and validation processes for medical devices</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Digital Health Solutions',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Development of telemedicine platforms and applications</li>
          <li>Integration with electronic health records (EHR) systems</li>
          <li>Implementation of patient portals and mobile health solutions</li>
          <li>Support for digital transformation in healthcare services</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Artificial Intelligence',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>AI-driven diagnostics and decision support systems</li>
          <li>Machine learning models for predictive analytics</li>
          <li>Natural language processing for medical data analysis</li>
          <li>AI integration in medical imaging and diagnostics</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Cybersecurity',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Ensuring data security and patient privacy (e.g., GDPR, HIPAA)</li>
          <li>Cybersecurity measures for medical devices and systems</li>
          <li>Compliance with industry regulations and standards</li>
          <li>Continuous monitoring and risk management strategies</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
];

const cards: Card[] = [
  {
    title: (
      <Cite className='text-left text-white z-10'>
        technology <br /> & Electronics
      </Cite>
    ),
    imgAlt: 'Technology & Electronics',
    tags: ['IoT', 'embedded', 'firmware'],
    imageUrl: '/images/service-cards/technology_electronics.png',
    link: '/technology-and-electronics',
  },
  {
    title: (
      <Cite className='text-left text-white z-10'>
        automotive <br /> & mobility
      </Cite>
    ),
    imgAlt: 'Automotive & Mobility',
    tags: ['surfacing', 'engineering', 'hmi'],
    imageUrl: '/images/service-cards/automotive.png',
    link: '/automotive-and-mobility',
  },
  {
    title: (
      <Cite className='text-left text-white z-10'>
        software <br /> & development
      </Cite>
    ),
    imgAlt: 'Software & Development',
    tags: ['cloud', 'AI', 'backend'],
    imageUrl: '/images/service-cards/mobility.png',
    link: '/software-development',
  },
  {
    title: (
      <Cite className='text-left text-white z-10'>
        retail media
        <br /> & services
      </Cite>
    ),
    imgAlt: 'Retail Media & Services',
    tags: ['ecommerce', 'fintech', 'automation'],
    imageUrl: '/images/service-cards/retail.png',
    link: '/retail-media-and-services',
  },
];

const howWeWorkItems: HowWeWorkItem[] = [
  {
    title: 'Discovery',
    content:
      'We begin by understanding your healthcare goals, regulatory requirements, and technical needs, ensuring full alignment with industry standards (e.g., ISO 13485, IEC 60601).',
  },
  {
    title: 'Development',
    content:
      'Our experts develop robust solutions—designing both hardware and software, integrating systems, and ensuring compliance with medical device standards and regulations.',
  },
  {
    title: 'Engineering',
    content:
      'Our teams handle circuit design, system configuration, and software development using platforms like Altium, Zuken, and proprietary OEM environments.',
  },
  {
    title: 'Testing & Compliance',
    content:
      'We perform functional testing, EMC validation, and documentation according to IEC, ISO, and CE requirements, preparing your product for market readiness.',
  },
];

export default function HealthcareSolutions() {
  return (
    <>
      <Hero
        title={
          <>
            healthcare <br /> solutions
          </>
        }
        description={
          'We support medical technology companies with engineering and software development services focused on safety, compliance, and performance. From imaging platforms and connected devices to AI diagnostics and data integration, our teams help deliver innovative healthcare solutions that improve outcomes and meet the highest regulatory standards.'
        }
        mediaElement={
          <Image
            src={'/images/healthcare-solutions/Healthcare-1440.webp'}
            alt={'Hero image'}
            objectFit='cover'
            width={3758}
            height={995}
            className='w-full landscape:h-[600px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl xl:block'
          />
        }
      />
      <CompetenceAccordion
        title='healthcare solutions'
        items={compoetenceItems}
        description={
          'Our teams deliver end-to-end engineering services for the healthcare industry, ensuring compliance with international standards and enhancing patient outcomes.'
        }
        imageUrl={'/images/healthcare-solutions/Healthare-1440.2.webp'}
        imageAlt={'Healthcare Solutions'}
      />

      <HowWeWorkSection howWeWorkItems={howWeWorkItems} />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <SeeAlsoSection cards={cards} />
      <ContactPeople />
    </>
  );
}
