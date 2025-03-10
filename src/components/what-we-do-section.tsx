import { ServiceCard } from "./service-card";

export const WhatWeDoSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 px-4 mt-20">
      <div className="md:col-span-1 xl:col-span-2 ">
        <div className="md:sticky md:top-30 xl:top-40">
          <h1 className="text-7xl xl:text-9xl text-left">
            what do <br /> we do?
          </h1>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:col-span-1">
        <ServiceCard
          title={
            <>
              technology <br /> & electronics
            </>
          }
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_1.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
        <ServiceCard
          title={<>healthcare solutions</>}
          description="In our consulting department, clients are assigned a dedicated specialist for personalized assistance, with billing based on hourly settlements."
          image="/images/what_we_do_2.png"
          tags={["#medical", "#medicalsolutions", "#c++"]}
        />
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
