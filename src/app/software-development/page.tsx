import { Accordion } from '@/components/accordion';
import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import { Body1 } from '@/components/Typo/Body1';
import { Header3 } from '@/components/Typo/Header3';
import { Title } from '@/components/Typo/Title';
import Image from 'next/image';

const items = [
  {
    title: 'DevOps',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          <li>Streamlining and automating development workflows</li>
          <li>CI/CD pipeline implementation and infrastructure management</li>
          <li>Containerization, orchestration, and configuration management for efficient deployment</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Architecture',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          <li>Event driven architecture</li>
          <li>Cloud architecture</li>
          <li>Caching</li>
          <li>Pub/Sub</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Data management',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          <li>Data processing and management solutions, including ETL pipelines and data lakes</li>
          <li>Enabling efficient data storage, retrieval, and analysis</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Business analysis',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          <li>Data visualization, predictive modeling, and performance tracking</li>
          <li>End-to-end analytics solutions for actionable insights</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Service Desk',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          <li>Systems engineering</li>
          <li>Design and project planning</li>
          <li>Calculation and simulation</li>
          <li>Programming</li>
        </ul>
        <div className='mt-4'>
          <Body1>Tech Stack</Body1>
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Development',
    content: (
      <>
        <ul className='list-disc list-inside flex flex-col gap-2'>
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
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
          </div>
        </div>
      </>
    ),
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
            className='md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal-responsive'
          />
        }
      />
      <div className='px-4 mt-20'>
        <Header3>automotive & mobility</Header3>
        <Title className='mt-4'>competence</Title>
        <Body1 className='mt-8'>
          We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
          them gain an edge over their competition. We understand that organisations we work with may be at different
          points.
        </Body1>
        <div className='mt-8'>
          <Accordion items={items} />
        </div>
      </div>
      <ContactPeople />
    </>
  );
}
