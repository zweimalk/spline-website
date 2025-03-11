import { type Highlight } from "@/types/highlight";
import Image from "next/image";

interface HighlightCardProps {
  highlight: Highlight;
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const { year, title, description, imageUrl, ctaLabel, ctaUrl, brandIcon } = highlight;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg w-full">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Year */}
        <p className="text-sm font-medium text-gray-500">{year}</p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="mt-3 text-base text-gray-600 line-clamp-3">{description}</p>

        {/* CTA Link */}
        <div className="mt-4 flex items-center justify-between">
          {ctaLabel && ctaUrl && (
            <a href={ctaUrl} className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <span>{ctaLabel}</span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}

          {/* Brand Icon */}
          {brandIcon && <Image src={brandIcon} alt="Brand icon" width={32} height={32} className="h-8 w-8" />}
        </div>
      </div>
    </div>
  );
};
