import { ServiceCard } from "./service-card";

export const WhatWeDoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_minmax(300px,580px)] gap-x-6 px-4 mt-40">
      <div>
        <div className="md:sticky md:top-30 xl:top-40">
          <h1 className="text-[5.5rem] leading-[5.5rem] xl:text-9xl">
            what do <br className="lg:hidden" /> we do?
          </h1>
        </div>
      </div>

      <div className="mt-16 md:mt-0 flex flex-col gap-10 xl:gap-10">
        <ServiceCard
          title={
            <>
              technology <br /> <span className="text-[2.8rem] lg:text-5xl"> & electronics</span>
            </>
          }
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_1.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
        <div className="border-t border-foreground/20 md:hidden"></div>
        <ServiceCard
          title={<>healthcare solutions</>}
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_2.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
        <div className="border-t border-foreground/20 md:hidden"></div>
        <ServiceCard
          title={
            <>
              automotive <br /> & mobility
            </>
          }
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_3.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
        <div className="border-t border-foreground/20 md:hidden"></div>
        <ServiceCard
          title={
            <>
              retail media <br /> & services
            </>
          }
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_4.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
        <div className="border-t border-foreground/20 md:hidden"></div>
        <ServiceCard
          title={<>software development</>}
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_5.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
      </div>
    </div>
  );
};
