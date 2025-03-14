import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "./button";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "./icons";
import { Link } from "./link";

export const Hero = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col justify-center px-4 gap-y-6">
        <div>
          <div className="flex">
            <h1 className="text-6xl text-left md:text-8xl 2xl:text-[160px]">
              connecting <br /> professionals
            </h1>
            <div className="flex-col ml-auto hidden md:flex md:gap-y-4">
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
          <video autoPlay loop muted playsInline className="w-full object-cover md:hidden mt-6 rounded-lg">
            <source src="/video/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="max-w-[408px] mt-9 md:mt-10 tracking-wider">
            We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help
            them gain an edge over their competition. We understand that organisations we work with may be at different
            points.
          </p>
          {/* TODO: think about bigger right arrow */}
          <Button color="dark" className="cursor-pointer max-w-[214px] mt-8 md:mt-10">
            Connect right now
            <ArrowRightIcon className="font-bold fill-background dark:fill-foreground" />
          </Button>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-[200px] rounded-lg mt-8 md:mt-10 object-cover xl:h-auto xl:max-h-[440px]"
          >
            <source src="/video/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center mt-18 md:hidden">
        <ArrowDownIcon className="font-bold fill-foreground size-10 cursor-pointer" />
      </div>
    </div>
  );
};
