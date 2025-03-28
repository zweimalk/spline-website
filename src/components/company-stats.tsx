import clsx from "clsx";
import Image from "next/image";
import { TestimonialsSection } from "./Testimonials/TestimonialsSection";
import { Body1 } from "./Typo/Body1";
interface StatItemProps {
  number: string;
  label: string;
  className?: string;
}

function StatItem({ number, label, className }: StatItemProps) {
  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <h2 className="text-8xl md:text-6xl mb-3 text-zinc-900 dark:text-white">
        {number}
      </h2>
      <Body1 className="text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal">
        {label}
      </Body1>
    </div>
  );
}

interface CertificationTisaxItemProps {
  title: string;
  className?: string;
}

function CertificationTisaxItem({
  title,
  className,
}: CertificationTisaxItemProps) {
  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <div className="relative aspect-square">
        <Image
          alt="Tisax"
          key={`logo-tisax-dark`}
          src={"/logos/tisax-dark.svg"}
          className="hidden dark:block transition-all"
          width={100}
          height={100}
          draggable={false}
        />
        <Image
          alt="Tisax"
          key={`logo-tisax`}
          src={"/logos/tisax.svg"}
          className="block dark:hidden transition-all"
          width={100}
          height={100}
          draggable={false}
        />
      </div>
      <Body1 className="text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal">
        {title}
      </Body1>
    </div>
  );
}

interface CertificationISOItemProps {
  title: string;
  className?: string;
}

function CertificationISOItem({ title, className }: CertificationISOItemProps) {
  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <div className="relative aspect-square">
        <Image
          alt="ISO"
          key={`logo-iso-dark`}
          src={"/logos/iso-dark.svg"}
          className="hidden dark:block transition-all"
          width={100}
          height={100}
          draggable={false}
        />
        <Image
          alt="ISO"
          key={`logo-iso`}
          src={"/logos/iso.svg"}
          className="block dark:hidden transition-all"
          width={100}
          height={100}
          draggable={false}
        />
      </div>
      <Body1 className="text-gray-5 dark:text-gray-3 text-[16px] sm:text-normal">
        {title}
      </Body1>
    </div>
  );
}

export function CompanyStats() {
  return (
    <div className="mt-30 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0">
        <StatItem
          number="15"
          label="years of expertise"
          className="md:border-r border-foreground/20 md:border-b md:p-6 flex items-center justify-center"
        />
        <StatItem
          number="6"
          label="years on the market"
          className="md:border-r border-foreground/20 md:border-b md:p-6 flex items-center justify-center"
        />
        <StatItem
          number="6"
          label="business sectors"
          className="md:border-b border-foreground/20 md:p-6 flex items-center justify-center"
        />
        <StatItem
          number="3"
          label="business sectors"
          className="md:border-r border-foreground/20 md:p-6 flex items-center justify-center"
        />
        <CertificationTisaxItem
          title="Tisax certification"
          className="md:border-r border-foreground/20 md:p-6 flex items-center justify-center"
        />
        <CertificationISOItem
          title="ISO 13485 & ISO 9001 certification"
          className="md:p-6 flex items-center justify-center"
        />
      </div>
      <TestimonialsSection />
    </div>
  );
}
