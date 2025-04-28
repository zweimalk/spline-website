import { AboutUsSection } from '@/components/about-us-section';
import { CompanyStats } from '@/components/company-stats';
import { ContactPeople } from '@/components/contact-people';
import { GlobeDemo } from '@/components/globe-demo';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import PartnersLogosSection from '@/components/partners-logos-section';
import { QuotesSection } from '@/components/quotes-section';
import { WhatWeDoSection } from '@/components/what-we-do-section';

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            connecting <br /> professionals
          </>
        }
        description={
          'We deliver future-proof, tailor-made solutions that support our clients day-to-day operations and help them gain an edge over their competition. We understand that organisations we work with may be at different points in their digital journey.'
        }
        mediaElement={
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className='w-full object-cover mt-6 rounded-lg clip-diagonal clip-diagonal-sm md:clip-diagonal-responsive landscape:h-[400px] md:mt-10'
          >
            <source
              src={
                'https://bt3glinid3nkn8mh.public.blob.vercel-storage.com/hero_video-RyywD8hCBI1jv6ZxuIM3MOcaBWgGGw.mp4'
              }
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        }
      />
      <WhatWeDoSection />
      {/* <WordsSection /> */}
      {/* <ShakyTextSection /> */}
      <HighlightsSection />
      <CompanyStats />
      <GlobeDemo />
      <PartnersLogosSection />
      <AboutUsSection />
      <QuotesSection />
      {/* <JobsSection /> */}
      <ContactPeople />
    </>
  );
}
