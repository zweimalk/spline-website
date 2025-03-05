import { Button } from "@/components/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh">
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
          gain an edge over their competition. We understand that organisations we work with may be at different points.
        </p>
        <Button color="dark">
          Connect right now
          <ArrowRightIcon className="font-bold fill-background dark:fill-white" />
        </Button>
      </div>
    </div>
  );
}
