import { AboutUsSection } from '@/components/about-us-section';
import { CompanyStats } from '@/components/company-stats';
import { ContactPeople } from '@/components/contact-people';
import { GlobeDemo } from '@/components/globe-demo';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import JobsSection from '@/components/jobs-section';
import PartnersLogosSection from '@/components/partners-logos-section';
import { QuotesSection } from '@/components/quotes-section';
import { WhatWeDoSection } from '@/components/what-we-do-section';
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
      <JobsSection />
      <ContactPeople />
    </>
  );
}
