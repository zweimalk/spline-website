import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: ReactNode;
  description: string;
  image: string;
  tags: string[];
}

export const ServiceCard = ({ title, description, image, tags }: ServiceCardProps) => {
  return (
    <div className="group transition-colors duration-300 lg:hover:bg-foreground p-4 rounded-lg cursor-pointer">
      <div className="flex gap-4 items-center justify-center md:justify-start py-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-foreground/5 lg:group-hover:bg-background/5 text-foreground/75 lg:group-hover:text-background/75 transition-colors duration-300 rounded-full  font-medium text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2">
        <h2 className="text-5xl text-center uppercase tracking-tighter md:text-left lg:group-hover:text-background transition-colors duration-300">
          {title}
        </h2>
      </div>
      <div className="mt-8">
        <Image src={image} alt="hero" width={1000} height={1000} className="w-full object-cover" />
      </div>
      <div className="mt-7">
        <p className="text-center md:text-left lg:group-hover:text-background/85 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="flex justify-center md:justify-start items-center my-6">
        <div className="flex items-center gap-2 w-[145px] text-lg text-blue-700 lg:group-hover:text-background transition-all duration-300">
          See more
          <ArrowRightIcon className="font-bold w-4 h-4 md:w-8 md:h-8 text-blue-700 lg:group-hover:text-background transition-all duration-300 lg:group-hover:translate-x-4" />
        </div>
      </div>
    </div>
  );
};
