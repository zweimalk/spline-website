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
import {
  AWSIoTLogo,
  AltiumLogo,
  AutodeskElectricalLogo,
  CanOpenLogo,
  ConfluenceTechnologyLogo,
  CstLogo,
  EplanElectricLogo,
  GitlabLogo,
  Gns3Logo,
  IoTHubLogo,
  ItsPiceLogo,
  JenkinsLogo,
  JiraTechnologyLogo,
  JuniperLogo,
  KeysightLogo,
  LabViewLogo,
  LorawanLogo,
  LtsPiceLogo,
  MatlabLogo,
  ModbusLogo,
  MqqTLogo,
  PlecsLogo,
  PolarionLogo,
  PsimLogo,
  PythonTechnologyLogo,
  SolarWindsLogo,
  WireSharkLogo,
  ZigbeeLogo,
} from '@/components/icons';
import type { Card } from '@/components/infinite-cards-scroll';
import Image from 'next/image';
import type { CompetenceAccordionItem } from '../software-development/competence-accordion';
import type { HowWeWorkItem } from '../software-development/how-we-work-section';
const compoetenceItems: CompetenceAccordionItem[] = [
  {
    title: 'Electrical Planning & System Design',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Low and high voltage planning</li>
          <li>Grid integration and control system design</li>
          <li>Switchgear and control cabinet design</li>
          <li>Schematic creation and documentation (e.g. EPLAN)</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <AltiumLogo />
            <AutodeskElectricalLogo />
            <EplanElectricLogo />
            <GitlabLogo />
            <JiraTechnologyLogo />
            <LtsPiceLogo />
            <MatlabLogo />
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Telecommunication & Network Engineering',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Network architecture and critical support</li>
          <li>Field network planning and integration</li>
          <li>Mixed network communication interface technologies</li>
          <li>Protocol configuration and diagnostics</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Gns3Logo />
            <JuniperLogo />
            <LorawanLogo />
            <SolarWindsLogo />
            <WireSharkLogo />
            <ZigbeeLogo />
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Energy & Power Systems',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Power electronics and control tech</li>
          <li>System integration and grid integration</li>
          <li>Grid connection and load management</li>
          <li>Renewable energy integration</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <AWSIoTLogo />
            <CanOpenLogo />
            <IoTHubLogo />
            <ItsPiceLogo />
            <MatlabLogo />
            <ModbusLogo />
            <MqqTLogo />
            <PlecsLogo />
            <PsimLogo />
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Testing & Compliance',
    content: (
      <>
        <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
          <li>Functional and environmental testing</li>
          <li>EMC and safety testing</li>
          <li>Certification and documentation support</li>
          <li>End-of-line testing and diagnostics</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <ConfluenceTechnologyLogo />
            <CstLogo />
            <JenkinsLogo />
            <JiraTechnologyLogo />
            <KeysightLogo />
            <LabViewLogo />
            <PolarionLogo />
            <PythonTechnologyLogo />
          </div>
        </div>
      </>
    ),
  },
];

const howWeWorkItems: HowWeWorkItem[] = [
  {
    title: 'Needs Analysis',
    content:
      'We begin by reviewing system requirements, technical constraints, and applicable industry standards (e.g. IEC, ISO), ensuring full alignment from day one.',
  },
  {
    title: 'Feasibility & Concept Design',
    content:
      'Using tools like MATLAB, Simulink, or Altium, we explore design options and evaluate risks to ensure technical feasibility and future scalability.',
  },
  {
    title: 'Team Deployment',
    content:
      'We assign engineers with proven expertise in tools such as EPLAN, AutoCAD Electrical, and specialized telecom or power system platforms — scaling to your needs.',
  },
  {
    title: 'Engineering & Implementation',
    content:
      'Our teams handle circuit design, network configuration, and system development using platforms like Altium, Zuken, ETAP, or proprietary OEM environments.',
  },
  {
    title: 'Testing & Compliance',
    content:
      'We perform functional and environmental testing, EMC validation, and documentation according to IEC, ISO, and CE requirements, preparing your product for market readiness.',
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

export default function TechnologyAndElectronics() {
  return (
    <>
      <Hero
        title={
          <>
            technology <br /> & electronics
          </>
        }
        description={
          'We provide engineering services across telecommunications, electrical planning, and energy technology. From circuit and system design to integration and testing, we support the development of intelligent, connected, and future-ready electronic solutions.'
        }
        mediaElement={
          <Image
            src={'/images/technology-and-electronics/Technology_1440.webp'}
            alt={'Hero image'}
            objectFit='cover'
            width={3758}
            height={995}
            className='w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 clip-diagonal object-cover clip-diagonal-sm md:clip-diagonal-xl'
          />
        }
      />
      <CompetenceAccordion
        title='technology and electronics'
        items={compoetenceItems}
        description={
          'Our teams deliver high-quality engineering services across electronics, telecommunications, energy systems, and digital infrastructure. We support clients in building robust, efficient, and compliant solutions ready for tomorrow`s challenges.'
        }
        imageUrl={'/images/technology-and-electronics/Technology-1440.2.webp'}
        imageAlt={'Technology and Electronics'}
      />

      <HowWeWorkSection howWeWorkItems={howWeWorkItems} />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <SeeAlsoSection cards={cards} />
      <ContactPeople />
    </>
  );
}
