import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { Button } from "./button";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "./icons";
import { Link } from "./link";

export const Hero = () => {
  return (
    <div className="pt-18 md:pt-28 container mx-auto">
      <div className="flex flex-col justify-center px-4 gap-y-6">
        <div>
          <div className="flex">
            <h1 className="text-6xl text-left md:text-8xl">
              connecting <br /> professionals
            </h1>
            <div className="flex-col gap-y-9 ml-auto hidden md:flex">
              <Link href="https://linkedin.com/company/spline" className="flex items-center hover:underline">
                <span className="sr-only">LinkedIn</span>
                <LinkedinLogoIcon className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/spline" className="flex items-center hover:underline">
                <span className="sr-only">Instagram</span>
                <InstagramLogoIcon className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com/spline" className="flex items-center hover:underline">
                <span className="sr-only">Facebook</span>
                <FacebookLogoIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <Image
            src="/images/mobile_hero_cars.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full object-cover md:hidden mt-6"
          />
          <p className="max-w-[408px] mt-9 md:mt-10">
            We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
            them gain an edge over their competition. We understand that organisations we work with may be at different
            points.
          </p>
          <Button color="dark" className="cursor-pointer max-w-[218px] mt-8 md:mt-10">
            Connect right now
            <ArrowRightIcon className="font-bold fill-background dark:fill-white" />
          </Button>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-[200px] rounded-lg mt-8 md:mt-10 object-cover"
          >
            <source src="/video/automotive_promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 md:hidden">
        <ArrowDownIcon className="font-bold fill-foreground size-10 cursor-pointer" />
      </div>
    </div>
  );
};
