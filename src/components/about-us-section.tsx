import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 md:mt-60 ">
      <div className="flex flex-col md:grid md:grid-cols-3 md:items-center mb-10 md:mb-20">
        <h1 className="text-7xl xl:text-9xl col-span-2">about us</h1>
      </div>
      <Image
        src="/images/about_us.png"
        alt="about us"
        width={395}
        height={495}
        className="w-full h-96 object-cover rounded-xl"
      />
      <div className="flex flex-col gap-y-6 pt-10 md:grid md:grid-cols-3 md:gap-x-10">
        <p>
          We make the security of entrusted information and data our priority. We make every effort for the IT security
          system to be compliant with the industrial standards and constantly updated. We make the security of entrusted
          information and data our priority.
        </p>
        <p>
          We make the security of entrusted information and data our priority. We make every effort for the IT security
          system to be compliant with the industrial standards and constantly updated.
        </p>
        <p>We make the security of entrusted information and data our priority.</p>
      </div>
    </div>
  );
};
