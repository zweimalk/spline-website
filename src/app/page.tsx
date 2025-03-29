import { AboutUsSection } from '@/components/about-us-section';
import { Button } from '@/components/button';
import { CompanyStats } from '@/components/company-stats';
import { ContactPeople } from '@/components/contact-people';
import { GlobeDemo } from '@/components/globe-demo';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import PartnersLogosSection from '@/components/partners-logos-section';
import { QuotesSection } from '@/components/quotes-section';
import { Body1 } from '@/components/Typo/Body1';
import { Title } from '@/components/Typo/Title';
import { WhatWeDoSection } from '@/components/what-we-do-section';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Suspense } from 'react';
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      {/* <WordsSection /> */}
      {/* <ShakyTextSection /> */}
      <HighlightsSection />
      <CompanyStats />
      <GlobeDemo />
      <PartnersLogosSection />
      <AboutUsSection />
      <QuotesSection />
      <Suspense
        fallback={
          <div>
            <Body1 className='text-center'>Loading...</Body1>
          </div>
        }
      >
        <div className='container mx-auto px-4' id='join-us'>
          <Title className='mb-10 mt-12'>join us</Title>
          <div id='traffit-an-list-xtxrxaxfxixtx2x0x1x6x'></div>
          <div className='flex justify-center mt-6'>
            <Button color='dark/white'>
              See all current offers
              <ArrowRightIcon className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </Suspense>
      <ContactPeople />
    </>
  );
}
