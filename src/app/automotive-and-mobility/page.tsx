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
import { type HowWeWorkItem, HowWeWorkSection } from '../software-development/how-we-work-section';

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

// bullet points check
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
        healthcare <br /> solutions
      </Cite>
    ),
    imgAlt: 'Healthcare Solutions',
    tags: ['medtech', 'AI', 'imaging'],
    imageUrl: '/images/service-cards/healthcare.png',
    link: '/healthcare-solutions',
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

const compoetenceItems: CompetenceAccordionItem[] = [
  {
    title: 'Design services',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>CAD design and concept modeling</li>
          <li>Class A surfacing</li>
          <li>Polygon modeling</li>
          <li>HMI design integration</li>
          <li>Studio Engineering</li>
          <li>Visualization and rendering</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Exterior & interior',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Project Management and Lead Engineering</li>
          <li>CAD Design and Data Coordination</li>
          <li>Bill of Materials (BOM) and Change Management</li>
          <li>Validation and Testing</li>
          <li>Integration and Concept Engineering</li>
          <li>Cost and Weight Optimization</li>
          <li>Supplier and Quality Engineering</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Testing & Validation',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Functional and system-level testing</li>
          <li>Electrical and mechanical component validation</li>
          <li>Environmental, durability, and thermal testing</li>
          <li>Hardware-in-the-loop (HiL) and simulation support</li>
          <li>Cybersecurity</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'E&E',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>System Architecture and Harness Design</li>
          <li>E/E Engineering</li>
          <li>ADAS</li>
          <li>Energy Management</li>
          <li>ECU Integration and Communication</li>
          <li>Diagnostics and Fault Management</li>
          <li>DVP</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Body-in-white',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Development of underbody, upperbody, chassis, and monocoque structures</li>
          <li>Closures, glazing, sealing systems, and mechanisms engineering</li>
          <li>Sheet metal, composite, and cast component design</li>
          <li>Material expertise in stamping, additive manufacturing, and (pre)forming</li>
          <li>Joining technologies and welding methods</li>
          <li>Crash performance and NVH optimization</li>
          <li>Tolerance management and production feasibility</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'ADAS',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Sensor integration: camera, radar, LiDAR, and ultrasonic</li>
          <li>ADAS architecture and signal flow design</li>
          <li>Perception, fusion, and control system support</li>
          <li>Integration of L1-L5 autonomous features</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
];

const howWeWorkItems: HowWeWorkItem[] = [
  {
    title: 'Requirement Alignment',
    content:
      'We begin by reviewing technical specifications, platform strategies, and OEM requirements to ensure full alignment with your development goals.',
  },
  {
    title: 'Concept & Feasibility',
    content:
      'Our teams support early-stage studies, CAD concepts, packaging, and system architecture to assess feasibility and integration from the start.',
  },
  {
    title: 'Team Integration',
    content:
      'We provide experts across disciplines—software, mechanical, E&E, validation—who integrate directly with your team or operate as a standalone unit.',
  },
  {
    title: 'Development & Engineering',
    content:
      'Whether it’s surface modeling, EDS, embedded software, or BiW design, we execute with precision and automotive-grade quality standards.',
  },
  {
    title: 'Validation & Compliance',
    content:
      'From virtual validation to physical testing and homologation support, we ensure performance, safety, and regulation compliance at every step.',
  },
  {
    title: 'Delivery & Lifecycle Support',
    content:
      'We hand over validated deliverables and stay engaged through change management, documentation updates, and production launch phases.',
  },
];

export default function AutomotiveAndMobility() {
  return (
    <>
      <Hero
        title={
          <>
            automotive <br /> & mobility
          </>
        }
        description={
          'We deliver comprehensive engineering services for the automotive industry, spanning software, mechanical, and E&E domains. From in-vehicle systems and embedded software to UX/UI design, 3D surface modeling, and component-level engineering, our experts contribute at every stage of development. With deep industry knowledge and a hands-on approach, we help clients build safe, efficient, and forward-looking mobility solutions.'
        }
        mediaElement={
          <Image
            src={'/images/automotive-and-mobility/Automotive-1440.webp'}
            alt={'Hero image'}
            objectFit='cover'
            width={3758}
            height={995}
            className='w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl'
          />
        }
      />
      <CompetenceAccordion
        title='automotive & mobility'
        items={compoetenceItems}
        description={
          'Our interdisciplinary teams combine expertise in software, mechanical, and E&E engineering to support every aspect of vehicle development. We deliver tailored solutions that meet industry standards and accelerate innovation across modern mobility ecosystems.'
        }
        imageUrl={'/images/automotive-and-mobility/Automotive-1440.2.webp'}
        imageAlt={'Automotive & Mobility'}
      />
      <HowWeWorkSection howWeWorkItems={howWeWorkItems} />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <SeeAlsoSection cards={cards} />
      <ContactPeople />
    </>
  );
}
