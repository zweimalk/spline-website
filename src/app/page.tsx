import { CompanyStats } from "@/components/company-stats";
import { ContactPeople } from "@/components/contact-people";
import { Hero } from "@/components/hero";
import { HighlightsSection } from "@/components/highlights-section";
import { ShakyTextSection } from "@/components/shaky-text-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <ShakyTextSection />
      <HighlightsSection />
      <CompanyStats />
      <ContactPeople />
    </>
  );
}
