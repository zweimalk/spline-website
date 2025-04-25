import { Header3 } from '@/components/Typo/Header3';

import { Accordion } from '@/components/accordion';

import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';
import {
  AWSLogo,
  AlteryxLogo,
  AzureLogo,
  ConfluenceLogo,
  CosLogo,
  GitLogo,
  JiraLogo,
  PandasLogo,
  PowerBILogo,
  PythonLogo,
  SQLLogo,
  SnowFlakeLogo,
  SparkLogo,
  TableauLogo,
  TeamsLogo,
  ZendeskLogo,
} from '@/components/icons';

const items = [
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
          <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-wrap gap-2'>
            <Body1>Python</Body1>
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

export const CompetenceAccordion = () => {
  return (
    <div className='px-4 mt-20 md:mt-40'>
      <Header3>automotive & mobility</Header3>
      <Title className='mt-4'>competence</Title>
      <Body1 className='mt-8 max-w-3xl'>
        We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
        them gain an edge over their competition. We understand that organisations we work with may be at different
        points.
      </Body1>
      <div className='mt-8'>
        <Accordion items={items} />
      </div>
    </div>
  );
};
