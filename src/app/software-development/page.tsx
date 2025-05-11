import { BusinessNeedsSection, type Slide } from '@/components/BusinessNeeds/BusinessNeedsSection';
import { Body1 } from '@/components/Typo/Body1';
import { Cite } from '@/components/Typo/Cite';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import {
  AWSLogo,
  AlteryxLogo,
  AzureLogo,
  ConfluenceLogo,
  CosLogo,
  DockerLogo,
  GitLogo,
  JiraLogo,
  KubernetesLogo,
  PandasLogo,
  PowerBILogo,
  PythonLogo,
  PythonTechnologyLogo,
  ReactLogo,
  SQLLogo,
  SnowFlakeLogo,
  SparkLogo,
  TableauLogo,
  TeamsLogo,
  ZendeskLogo,
} from '@/components/icons';
import type { Card } from '@/components/infinite-cards-scroll';
import { SeeAlsoSection } from '@/components/see-also-section';
import Image from 'next/image';
import { CompetenceAccordion, type CompetenceAccordionItem } from './competence-accordion';
import { type HowWeWorkItem, HowWeWorkSection } from './how-we-work-section';

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
          <div className='flex flex-wrap'>
            <AWSLogo />
            <AzureLogo />
          </div>
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
          <div className='flex flex-wrap'>
            <AWSLogo />
            <AzureLogo />
          </div>
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
          <div className='flex flex-wrap'>
            <AzureLogo />
            <GitLogo />
            <PandasLogo />
            <PythonLogo />
            <SparkLogo />
            <SQLLogo />
          </div>
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
          <div className='flex flex-wrap'>
            <AlteryxLogo />
            <ConfluenceLogo />
            <CosLogo />
            <JiraLogo />
            <PowerBILogo />
            <SnowFlakeLogo />
          </div>
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
          <div className='flex flex-wrap'>
            <PowerBILogo />
            <TableauLogo />
            <TeamsLogo />
            <ZendeskLogo />
          </div>
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
          <div className='flex flex-wrap gap-2 items-center'>
            <PythonTechnologyLogo />
            <AWSLogo className='size-10' />
            <AzureLogo className='size-10' />
            <DockerLogo className='size-10' />
            <KubernetesLogo className='size-10' />
            <ReactLogo className='size-10' />
          </div>
        </div>
      </>
    ),
  },
  // {
  //   title: 'Testing and QC',
  //   content: (
  //     <>
  //       <ul className='list-disc list-outside flex flex-col gap-2 pl-4'>
  //         <li>Automated testing</li>
  //         <li>Manual testing</li>
  //         <li>Code reviews</li>
  //         <li>UAT</li>
  //       </ul>
  //       <div className='mt-4'>
  //         <Body1>Tech Stack</Body1>
  //         <div className='flex flex-wrap gap-2'>
  //           <MavenLogo />
  //           <PytestLogo />
  //           <SeleniumLogo />
  //         </div>
  //       </div>
  //     </>
  //   ),
  // },
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

const howWeWorkItems: HowWeWorkItem[] = [
  {
    title: 'Discovery',
    content:
      'We begin by understanding your goals, challenges, and requirements to ensure every solution is aligned with your business needs.',
  },
  {
    title: 'Planning',
    content:
      'Our team defines the architecture, selects the right technologies, and outlines a scalable roadmap tailored to your project.',
  },
  {
    title: 'Team Assembly',
    content:
      'We build a dedicated team of specialists, matching skills and experience to your domain, goals, and timeline.',
  },
  {
    title: 'Solution Design',
    content:
      'We define the system structure, workflows, and technical approach —balancing performance, scalability, and maintainability based on project size and complexity.',
  },
  {
    title: 'Development & Integration',
    content:
      'Using agile methodologies, we deliver clean, high-quality code with frequent iterations, seamless integration, and continuous stakeholder feedback.',
  },
  {
    title: 'Testing & Quality Assurance',
    content:
      'Our rigorous QA processes—including automated and manual testing —ensure functionality, performance, and security at every stage.',
  },
  {
    title: 'Deployment & Monitoring',
    content:
      'We handle smooth releases, infrastructure setup, and post-launch monitoring to ensure system stability and performance from day one.',
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
      <CompetenceAccordion
        title='software development'
        items={compoetenceItems}
        description={
          'We deliver future-proof, tailor-made solutions that support our client`s day-to-day operations and help them gain an edge over their competition. We understand that organisations we work with may be at different points.'
        }
        imageUrl={'/images/software-development/shape.webp'}
        imageAlt={'Software Development'}
      />
      <HowWeWorkSection howWeWorkItems={howWeWorkItems} />
      <BusinessNeedsSection slides={slides} />
      <HighlightsSection />
      <SeeAlsoSection cards={cards} />
      <ContactPeople />
    </>
  );
}
