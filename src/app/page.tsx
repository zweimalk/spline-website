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
            software <br /> development
          </>
        }
        description={
          'We create reliable, scalable, and efficient software solutions tailored to your business needs. From backend systems and cloud platforms to mobile and desktop applications, our development teams bring deep technical knowledge, agile processes, and a strong focus on quality to every project.'
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
            <source src={'/video/hero_video.mp4'} type='video/mp4' />
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
