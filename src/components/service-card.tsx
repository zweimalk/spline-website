import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./button";

interface ServiceCardProps {
  title: ReactNode;
  description: string;
  image: string;
  tags: string[];
}

export const ServiceCard = ({ title, description, image, tags }: ServiceCardProps) => {
  return (
    <div className="mt-10 px-6">
      <div className="flex gap-4 items-center justify-center py-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-gray-700 font-medium text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2">
        <h2 className="text-5xl text-center uppercase tracking-tighter">{title}</h2>
      </div>
      <div className="mt-8">
        <Image src={image} alt="hero" width={1000} height={1000} className="w-full object-cover" />
      </div>
      <div className="mt-7">
        <p className="text-center">{description}</p>
      </div>
      <div className="flex justify-center items-center my-6">
        <Button plain color="blue" className="cursor-pointer text-sm">
          See more
          <ArrowRightIcon className="font-bold text-sm" />
        </Button>
      </div>
    </div>
  );
};
