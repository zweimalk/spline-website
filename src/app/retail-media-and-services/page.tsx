import { BusinessNeedsSection } from '@/components/BusinessNeeds/BusinessNeedsSection';

import { HowWeWorkSection } from '../software-development/how-we-work-section';

import { SeeAlsoSection } from '@/components/see-also-section';
import { CompetenceAccordion } from '../software-development/competence-accordion';

import { HighlightsSection } from '@/components/highlights-section';

import type { Slide } from '@/components/BusinessNeeds/BusinessNeedsSection';
import { Body1 } from '@/components/Typo/Body1';
import { Cite } from '@/components/Typo/Cite';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import type { Card } from '@/components/infinite-cards-scroll';
import Image from 'next/image';
import type { CompetenceAccordionItem } from '../software-development/competence-accordion';
import type { HowWeWorkItem } from '../software-development/how-we-work-section';

const compoetenceItems: CompetenceAccordionItem[] = [
  {
    title: 'E-Commerce',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Full-stack e-commerce development</li>
          <li>Platform integration (payment gateways, CRM)</li>
          <li>UX/UI design for user-centric shopping experiences</li>
          <li>Mobile-first development and optimization</li>
          <li>Secure and scalable cloud-based platforms</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'AI & Data Analytics',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>AI-driven personalization and recommendation engines</li>
          <li>Data analytics for business intelligence solutions</li>
          <li>Predictive analytics and demand forecasting</li>
          <li>Customer segmentation and targeted marketing</li>
          <li>Real-time data processing and visualization</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Content Management & Distribution',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Multi-channel content management systems (CMS)</li>
          <li>Video streaming and digital asset delivery</li>
          <li>Media asset management and optimization</li>
          <li>Digital rights management (DRM)</li>
          <li>Integration with social and third-party platforms</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Customer Experience & CRM Solutions',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Customer journey mapping and optimization</li>
          <li>CRM system implementation and integration</li>
          <li>Loyalty programs and retention strategies</li>
          <li>Omnichannel support and communication solutions</li>
          <li>Service automation and chatbot integration</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2' />
        </div>
      </>
    ),
  },
  {
    title: 'Visualization',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>High-quality interactive and static visualization for e-commerce and content platforms</li>
          <li>Data-driven insights through graphical reporting and dashboards</li>
          <li>3D and VR/AR experiences for product demos</li>
          <li>Real-time visualization of user interaction and behavior analytics</li>
          <li>Visual content optimization for media and retail platforms</li>
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
    title: 'Discovery',
    content:
      'We begin by understanding your business, customers, and goals to define clear project objectives and align technology with your vision.',
  },
  {
    title: 'Strategy',
    content:
      'We develop a tailored strategy and roadmap, selecting the best technologies and platforms to meet your needs and ensure scalability.',
  },
  {
    title: 'Design',
    content:
      'Our design team creates intuitive, user-friendly interfaces focused on seamless navigation, engagement, and optimized conversion paths.',
  },
  {
    title: 'Development',
    content:
      'Using agile methodologies, we build and integrate systems like CRM, payment solutions, and CMS for a unified, efficient platform.',
  },
  {
    title: 'Data & AI',
    content:
      'We integrate data analytics and AI to deliver insights, personalize experiences, and automate key processes for better business outcomes.',
  },
  {
    title: 'Testing',
    content:
      'We conduct rigorous functional, performance, and security testing, refining the platform based on user feedback to ensure reliability.',
  },
  {
    title: 'Deployment',
    content:
      'We ensure a smooth transition to production, optimizing the platform for launch and addressing any issues promptly during go-live.',
  },
  {
    title: 'Support',
    content:
      'Post-launch, we provide ongoing support, maintenance, and continuous optimization based on performance insights and evolving needs.',
  },
];

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
        technology <br /> & Electronics
      </Cite>
    ),
    imgAlt: 'Technology & Electronics',
    tags: ['IoT', 'embedded', 'firmware'],
    imageUrl: '/images/service-cards/technology_electronics.png',
    link: '/technology-and-electronics',
  },
];

export default function RetailMediaAndServices() {
  return (
    <>
      <Hero
        title={
          <>
            retail media &<br /> services
          </>
        }
        description={
          'We provide end-to-end solutions for retail and media industries, driving digital transformation through innovative technology. From e-commerce platforms and AI-driven analytics to content management and media streaming, our teams help businesses deliver seamless customer experiences and stay ahead in a rapidly evolving market.'
        }
        mediaElement={
          <Image
            src={'/images/retail-media-and-services/Retail-media.webp'}
            alt={'Hero image'}
            objectFit='cover'
            width={3758}
            height={995}
            className='w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl'
          />
        }
      />
      <CompetenceAccordion
        title='retail media & services'
        items={compoetenceItems}
        description={
          "We deliver future-proof, tailor-made solutions that support our clients' day-to-day operations and help them gain an edge over their competition. We understand that organisations we work with may be at different points."
        }
        imageUrl={'/images/retail-media-and-services/retail-media.2.webp'}
        imageAlt={'Retail Media & Services'}
      />

      <HowWeWorkSection howWeWorkItems={howWeWorkItems} />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <SeeAlsoSection cards={cards} />
      <ContactPeople />
    </>
  );
}
