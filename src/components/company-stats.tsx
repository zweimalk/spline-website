import { Text } from "@/components/text";
import Image from "next/image";

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-6xl font-bold mb-2">{number}</h2>
      <Text className="text-lg">{label}</Text>
    </div>
  );
}

interface CertificationItemProps {
  logo: string;
  alt: string;
  title: string;
}

function CertificationItem({ logo, alt, title }: CertificationItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-24 mb-4">
        <Image src={logo} alt={alt} fill className="object-contain" />
      </div>
      <Text className="text-lg">{title}</Text>
    </div>
  );
}

export function CompanyStats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem number="15" label="years of expertise" />
          <StatItem number="6" label="years on the market" />
          <StatItem number="6" label="business sectors" />
          <StatItem number="3" label="business sectors" />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <CertificationItem logo="/images/tisax-logo.svg" alt="Tisax certification" title="Tisax certification" />
          <CertificationItem
            logo="/images/iso-logo.svg"
            alt="ISO certification"
            title="ISO 13485 & ISO 9001 certification"
          />
        </div>
      </div>
    </section>
  );
}
