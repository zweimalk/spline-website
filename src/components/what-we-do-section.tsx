import { ServiceCard } from "./service-card";

export const WhatWeDoSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-y-6 pt-30 px-6">
        <h1 className="text-6xl text-left">
          what do <br /> we do?
        </h1>
      </div>

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
    </>
  );
};
