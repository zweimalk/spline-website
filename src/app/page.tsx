import { AboutUsSection } from '@/components/about-us-section';
import { CompanyStats } from '@/components/company-stats';
import { ContactPeople } from '@/components/contact-people';
import { GlobeDemo } from '@/components/globe-demo';
import { Hero } from '@/components/hero';
import { HighlightsSection } from '@/components/highlights-section';
import PartnersLogosSection from '@/components/partners-logos-section';
import { QuotesSection } from '@/components/quotes-section';
import { ShakyTextSection } from '@/components/shaky-text-section';
import { WhatWeDoSection } from '@/components/what-we-do-section';
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <ShakyTextSection />
      <HighlightsSection />
      <CompanyStats />
      <GlobeDemo />
      <PartnersLogosSection />
      <QuotesSection />
      <AboutUsSection />
      <ContactPeople />
    </>
  );
}
