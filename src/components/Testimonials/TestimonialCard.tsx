import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Displays a single testimonial card with client information and quote
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, position, company, content, avatarUrl } = testimonial;

  return (
    <div className="flex flex-col h-full min-h-[400px] p-8 bg-background rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 overflow-hidden rounded-full">
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 64px, 64px"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-foreground/70 text-sm">
            {position}
            {company && ` ${company}`}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="flex-1 text-lg text-foreground/85 leading-snug">{content}</p>
      </div>
    </div>
  );
}
