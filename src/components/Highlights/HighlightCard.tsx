import { type Highlight } from "@/types/highlight";
import Image from "next/image";
import { Body1 } from "../Typo/Body1";
import { Header3 } from "../Typo/Header3";
interface HighlightCardProps {
  highlight: Highlight;
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const { year, title, description, imageUrl, ctaUrl, brandIcon } = highlight;

  const getBrandIcon = () => {
    if (!brandIcon) return null;
    return (
      <Image
        src={`/icons/brand/${brandIcon.toLowerCase()}.svg`}
        alt={`${brandIcon} brand icon`}
        width={40}
        height={40}
        className="object-cover fill-foreground w-10 h-10"
      />
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-lg  dark:bg-light-black cursor-pointer w-full max-w-[340px] h-[488px]">
      {/* Image Container */}
      <div className="relative h-[197px] w-full overflow-hidden">
        <Image
          src={imageUrl ?? ""}
          alt={title}
          fill
          className="object-cover "
          priority
        />
      </div>

      {/* Content Container */}
      <div className="p-6 grid grid-rows-[auto_auto_1fr_auto] h-[288px]">
        {/* Year */}
        <div>
          <p className="text-sm font-medium text-gray-4">{year}</p>
        </div>

        {/* Title */}
        <div>
          <Header3 className="mt-2">{title}</Header3>
        </div>

        {/* Description */}
        <div>
          <Body1 className="text-gray-5 dark:text-dark-text mt-5 line-clamp-3">
            {description}
          </Body1>
        </div>

        {/* CTA Link */}
        <div className="flex items-center justify-between">
          {ctaUrl && (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-spline-blue dark:text-white group-hover:tracking-wide transition-all duration-300">
                See more
              </span>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-2 transition-all duration-300 ml-4"
              >
                <path
                  className="stroke-[#1C5BFF] transition-all duration-300 dark:stroke-white"
                  d="M13.0833 2.18262L21 10.6826M21 10.6826L13.0833 19.1826M21 10.6826L2 10.6826"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* Brand Icon */}
          {getBrandIcon()}
        </div>
      </div>
    </div>
  );
};
