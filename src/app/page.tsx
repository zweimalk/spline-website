import { CompanyStats } from "@/components/company-stats";
import { Hero } from "@/components/hero";
import { WhatWeDoSection } from "@/components/what-we-do-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <CompanyStats />
    </>
  );
}
