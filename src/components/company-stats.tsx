import { Text } from "@/components/text";
import clsx from "clsx";
import { IsoLogo, TisaxLogo } from "./icons";

interface StatItemProps {
  number: string;
  label: string;
  className?: string;
}

function StatItem({ number, label, className }: StatItemProps) {
  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <h2 className="text-5xl md:text-6xl font-bold mb-3 text-zinc-900 dark:text-white">{number}</h2>
      <Text className="text-base md:text-lg">{label}</Text>
    </div>
  );
}

interface CertificationTisaxItemProps {
  title: string;
  className?: string;
}

function CertificationTisaxItem({ title, className }: CertificationTisaxItemProps) {
  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <div className="relative w-32 h-24">
        <TisaxLogo />
      </div>
      <Text className="text-base md:text-lg">{title}</Text>
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
      <div className="relative w-32 h-24">
        <IsoLogo />
      </div>
      <Text className="text-base md:text-lg">{title}</Text>
    </div>
  );
}

// TODO: fix dark styles
export function CompanyStats() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0">
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
      </div>
    </section>
  );
}
