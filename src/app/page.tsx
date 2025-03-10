import { CompanyStats } from "@/components/company-stats";
import { ContactPeople } from "@/components/contact-people";
import { Hero } from "@/components/hero";
import { WhatWeDoSection } from "@/components/what-we-do-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <CompanyStats />
      <ContactPeople />
    </>
  );
}
