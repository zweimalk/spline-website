import { Button } from "@/components/button";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen md:h-auto pt-18 lg:pt-24">
        <div className="flex flex-col justify-center px-6 gap-y-6">
          <h1 className="text-6xl text-left">automotive & mobility</h1>
          <Image
            src="/images/mobile_hero_cars.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <p>
            We deliver future-proof, tailor-made solutions that support our clients’ day-to-day operations and help them
            gain an edge over their competition. We understand that organisations we work with may be at different
            points.
          </p>
          <Button color="dark" className="cursor-pointer">
            Connect right now
            <ArrowRightIcon className="font-bold fill-background dark:fill-white" />
          </Button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <ArrowDownIcon className="font-bold fill-foreground size-10 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-6 pt-30">
        <h1 className="text-6xl text-left">what do we do?</h1>
      </div>
      <div className="mt-10 px-6">
        <div className="flex gap-4 items-center justify-center py-4">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700 font-medium text-xs">#medical</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700 font-medium text-xs">
            #medicalsolutions
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700 font-medium text-xs">#c++</span>
        </div>
        <div className="mt-2">
          <h2 className="text-5xl text-center uppercase tracking-tighter">
            technology <br /> & electronics
          </h2>
        </div>
        <div className="mt-8">
          <Image src="/images/what_we_do_1.png" alt="hero" width={1000} height={1000} className="w-full object-cover" />
        </div>
        <div className="mt-7">
          <p>
            In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with
            billing based on hourly settlements. In our consulting department, clients are assigned a dedicated
            specialist for personalized assistance, with billing based on hourly settlements.
          </p>
        </div>
        <Button plain color="blue" className="cursor-pointer">
          Connect right now
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  );
}
