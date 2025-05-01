import { Body1 } from '@/components/Typo/Body1';
import { Hero } from '@/components/hero';
import Image from 'next/image';
import { CompetenceAccordion, type CompetenceAccordionItem } from '../software-development/competence-accordion';
// const slides: Slide[] = [
//   {
//     title: 'Staff augmentation',
//     description:
//       "At the heart of our approach is transparency. We're always in touch with stakeholders and make sure they're regularly informed about project progress. Our dedication to transparency extends to our reporting, which always provides clear insights into project developments and milestones. Reach out and within 48 hours, we'll have CVs of top devs who meet your requirements in your inbox.",
//     imageUrl: '/images/software-development/business-needs/augmentation.webp',
//   },
//   {
//     title: 'Team Extensions',
//     description:
//       'Expand your in-house team with experienced engineers who seamlessly integrate into your workflows, tools, and culture. This model gives you full control while accelerating delivery with specialized skills and reduced recruitment overhead.',
//     imageUrl: '/images/software-development/business-needs/extensions.png',
//   },
//   {
//     title: 'Dedicated Teams',
//     description:
//       'Access a full, cross-functional team focused entirely on your project. We assemble and manage a group tailored to your domain and requirements—ensuring aligned goals, efficient communication, and long-term value creation.',
//     imageUrl: '/images/software-development/business-needs/teams.png',
//   },
//   {
//     title: 'Managed Services',
//     description:
//       'Offload full responsibility for your project or product development. From planning and architecture to implementation and maintenance, we deliver end-to-end solutions with clear accountability, timelines, and outcomes.',
//     imageUrl: '/images/software-development/business-needs/services.png',
//   },
// ];

// const cards: Card[] = [
//   {
//     title: (
//       <Cite className='text-left text-white z-10'>
//         technology <br /> & Electronics
//       </Cite>
//     ),
//     imgAlt: 'Technology & Electronics',
//     tags: ['IoT', 'embedded', 'firmware'],
//     imageUrl: '/images/service-cards/technology_electronics.png',
//   },
//   {
//     title: (
//       <Cite className='text-left text-white z-10'>
//         automotive <br /> & mobility
//       </Cite>
//     ),
//     imgAlt: 'Automotive & Mobility',
//     tags: ['surfacing', 'engineering', 'hmi'],
//     imageUrl: '/images/service-cards/automotive.png',
//   },
//   {
//     title: (
//       <Cite className='text-left text-white z-10'>
//         healthcare <br /> solutions
//       </Cite>
//     ),
//     imgAlt: 'Healthcare Solutions',
//     tags: ['medtech', 'AI', 'imaging'],
//     imageUrl: '/images/service-cards/healthcare.png',
//   },
//   {
//     title: (
//       <Cite className='text-left text-white z-10'>
//         retail media
//         <br /> & services
//       </Cite>
//     ),
//     imgAlt: 'Retail Media & Services',
//     tags: ['ecommerce', 'fintech', 'automation'],
//     imageUrl: '/images/service-cards/retail.png',
//   },
// ];

const compoetenceItems: CompetenceAccordionItem[] = [
  {
    title: 'DevOps',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Streamlining and automating development workflows</li>
          <li>CI/CD pipeline implementation and infrastructure management</li>
          <li>Containerization, orchestration, and configuration management for efficient deployment</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Architecture',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Event driven architecture</li>
          <li>Cloud architecture</li>
          <li>Caching</li>
          <li>Pub/Sub</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Data management',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Data processing and management solutions, including ETL pipelines and data lakes</li>
          <li>Enabling efficient data storage, retrieval, and analysis</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Business analysis',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Data visualization, predictive modeling, and performance tracking</li>
          <li>End-to-end analytics solutions for actionable insights</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Service Desk',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Systems engineering</li>
          <li>Design and project planning</li>
          <li>Calculation and simulation</li>
          <li>Programming</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap' />
        </div>
      </>
    ),
  },
  {
    title: 'Development',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Front-end, back-end, and full-stack application development</li>
          <li>User-friendly interfaces and cross-platform compatibility</li>
          <li>
            Robust and scalable software solutions tailored to client needspment and maintenance of embedded systems
          </li>
          <li>
            Firmware design, integration, and optimization for reliable hardware performancecompetition. We understand
            that organisations we work with may be at different points.
          </li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
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
      {/* <HowWeWorkSection /> */}
      {/* <BusinessNeedsSection slides={slides} /> */}
      {/* <HighlightsSection /> */}
      {/* <SeeAlsoSection cards={cards} /> */}
      {/* <ContactPeople /> */}
    </>
  );
}
