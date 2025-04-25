import { getJobPosts } from '@/data/getJobPosts';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Suspense } from 'react';
import { Body1 } from './Typo/Body1';
import { Title } from './Typo/Title';
import { JobCard } from './job-card';
import { Link } from './link';

interface ParsedJobContent {
  description: string[];
  tags: string[];
}

export function parseJobContent(content: string): ParsedJobContent {
  // Split by double line break to separate list items from tags
  const [listContent, tagsSection = ''] = content.split('<br><br>');

  // Extract description items
  const description = listContent
    .replace(/<\/?ul>/g, '') // Remove ul tags
    .split('</li>')
    .map((item) => item.replace('<li>', '').trim())
    .filter(Boolean); // Remove empty items

  // Extract tags
  const tags =
    tagsSection
      .match(/#[\w-]+/g) // Match hashtags
      ?.map((tag) => tag.replace('#', '')) || [];

  return {
    description,
    tags,
  };
}

export default async function JobsSection() {
  const jobPosts = await getJobPosts();

  const jobsWithParsedContent = jobPosts.map((job) => {
    const { description, tags } = parseJobContent(job.advert.values[4].value);
    return {
      ...job,
      parsedDescription: description,
      parsedTags: tags,
    };
  });

  return (
    <Suspense
      fallback={
        <div>
          <Body1 className='text-center'>Loading...</Body1>
        </div>
      }
    >
      <div className='container mx-auto px-4 mt-20' id='join-us'>
        <Title className='mb-10'>join us</Title>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
          {jobsWithParsedContent.map((job) => (
            <JobCard
              key={job.id}
              title={job.advert.name}
              location='Kraków, Poland / Remote'
              url={job.url}
              description={job.parsedDescription}
              tags={job.parsedTags}
            />
          ))}
        </div>
        <Body1 className='text-center mt-4 text-gray-3 dark:text-gray-7'>& more...</Body1>
        <div className='flex justify-center mt-8'>
          <Link
            href='https://spline.traffit.com/career/'
            target='_blank'
            className='cursor-pointer xl:text-xl flex items-center gap-x-4 justify-center'
          >
            <button
              type='button'
              className='cursor-pointer mt-8 md:mt-10 flex items-center gap-x-4 bg-foreground text-background px-5 py-3 xl:px-4 xl:py-2 rounded-lg tracking-wider leading-[150%] xl:text-[15px] font-semibold'
            >
              See all current offers
              <div className='flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 ml-2'>
                <ArrowRightIcon className='w-8 h-8' />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
