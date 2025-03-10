import { Text } from "@/components/text";
import { IsoLogo, TisaxLogo } from "./icons";

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-3 text-zinc-900 dark:text-white">{number}</h2>
      <Text className="text-base md:text-lg">{label}</Text>
    </div>
  );
}

interface CertificationTisaxItemProps {
  title: string;
}

function CertificationTisaxItem({ title }: CertificationTisaxItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-24 mb-6">
        <TisaxLogo />
      </div>
      <Text className="text-base md:text-lg">{title}</Text>
    </div>
  );
}

interface CertificationISOItemProps {
  title: string;
}

function CertificationISOItem({ title }: CertificationISOItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-24 mb-6">
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
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatItem number="15" label="years of expertise" />
          <StatItem number="6" label="years on the market" />
          <StatItem number="6" label="business sectors" />
          <StatItem number="3" label="business sectors" />
          <CertificationTisaxItem title="Tisax certification" />
          <CertificationISOItem title="ISO 13485 & ISO 9001 certification" />
        </div>
      </div>
    </section>
  );
}
