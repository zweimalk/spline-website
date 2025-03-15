import { type Highlight } from "@/types/highlight";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../button";

interface HighlightCardProps {
  highlight: Highlight;
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const { year, title, description, imageUrl, ctaLabel, ctaUrl, brandIcon } = highlight;

  const getBrandIcon = () => {
    if (!brandIcon) return null;
    return (
      <Image
        src={`/icons/brand/${brandIcon.toLowerCase()}.svg`}
        alt={`${brandIcon} brand icon`}
        width={40}
        height={40}
        className="object-contain"
      />
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-lg w-full max-w-[600px]">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imageUrl ?? ""}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Year */}
        <p className="text-sm font-medium text-zinc-500">{year}</p>

        {/* Title */}
        <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{title}</h3>

        {/* Description */}
        <p className="mt-3 text-base text-zinc-600 line-clamp-3 tracking-wider">{description}</p>

        {/* CTA Link */}
        <div className="mt-4 flex items-center justify-between">
          {ctaLabel && ctaUrl && (
            <Button
              plain
              color="blue"
              href={ctaUrl}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 -ml-3"
            >
              <span className="text-xl font-bold">{ctaLabel}</span>
              <ArrowRightIcon className="font-bold" />
            </Button>
          )}

          {/* Brand Icon */}
          {getBrandIcon()}
        </div>
      </div>
    </div>
  );
};
