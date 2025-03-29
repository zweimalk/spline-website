import { Button } from '@/components/button';
import { getJobPosts } from '@/data/getJobPosts';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Suspense } from 'react';
import { Body1 } from './Typo/Body1';
import { Title } from './Typo/Title';
import { Link } from './link';
export default async function JobsSection() {
  const jobPosts = await getJobPosts();

  console.log(jobPosts);
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
        <div id='traffit-an-list-xtxrxaxfxixtx2x0x1x6x'></div>
        <div className='flex justify-center mt-6'>
          <Button color='dark/white'>
            <Link
              href='https://spline.traffit.com/career/'
              target='_blank'
              className='cursor-pointer xl:text-2xl flex items-center gap-x-4'
            >
              See all current offers
              <div className='flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10 ml-2'>
                <ArrowRightIcon className='font-bold' />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
