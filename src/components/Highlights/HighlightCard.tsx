import { type Highlight } from "@/types/highlight";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../button";
import { BehanceLogoIcon } from "../icons";

interface HighlightCardProps {
  highlight: Highlight;
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const { year, title, description, imageUrl, ctaLabel, ctaUrl } = highlight;

  return (
    <div className="group relative overflow-hidden rounded-2xl  shadow-md transition-all hover:shadow-lg w-full">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden">
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
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <span className="text-xl font-bold">{ctaLabel}</span>
              <ArrowRightIcon className="font-bold" />
            </Button>
          )}

          {/* Brand Icon */}
          {/* TODO: add confition and use prop brandIcon */}
          <BehanceLogoIcon className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};
