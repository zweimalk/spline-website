import { ServiceCard } from './service-card';

export const WhatWeDoSection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-6 px-4 mt-24 md:mt-40'>
      <div>
        <div className='md:mb-40 lg:sticky lg:top-30 xl:top-40'>
          <h1 className='text-[90px] leading-[81px] xl:text-9xl xl:leading-[7rem]'>
            what we
            <br className='lg:hidden 3xl:inline' /> do?
          </h1>
        </div>
      </div>

      <div className='mt-16 md:mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 ml-auto 3xl:grid-cols-2 gap-10 xl:gap-10'>
        <ServiceCard
          title={
            <>
              technology <br /> & electronics
            </>
          }
          description='Cutting-edge engineering solutions drive innovation in embedded systems, IoT, and consumer electronics. From hardware-software integration to firmware development and advanced testing, we ensure high-performance, scalable, and secure technology tailored to industry needs.'
          image='https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tags={['#IoT', '#embedded', '#firmware', '#E&E', '#PCB']}
        />
        <div className='border-t border-foreground/20 md:hidden'></div>
        <ServiceCard
          title={<>healthcare solutions</>}
          description='Technology reshapes healthcare with secure and high-performance digital solutions. From medical imaging and telehealth platforms to AI-driven diagnostics, we ensure seamless integration of innovation into healthcare services while maintaining compliance and security.'
          image='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tags={['#medtech', '#AI', '#imaging', '#IoMT']}
        />
        <div className='border-t border-foreground/20 md:hidden'></div>
        <ServiceCard
          title={
            <>
              automotive <br /> & mobility
            </>
          }
          description='We provide comprehensive engineering services for the automotive industry, covering software development, UX/UI design, engineering, and surface modeling. Our expertise spans in-vehicle systems, HMI, ADAS, and mobility solutions, ensuring seamless integration of technology, functionality, and design in next-generation vehicles.'
          image='/images/what_we_do_3.png'
          tags={['#surfacing', '#engineering', '#hmi', '#alias', '#icem']}
        />
        <div className='border-t border-foreground/20 md:hidden'></div>
        <ServiceCard
          title={
            <>
              retail media <br /> & services
            </>
          }
          description='Digital transformation enhances customer experiences and operational efficiency. We deliver advanced e-commerce platforms, AI-driven analytics, and automation solutions, helping businesses in media, fintech, and service industries scale and innovate.'
          image='https://plus.unsplash.com/premium_photo-1732096682381-b580213f885f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tags={['#ecommerce', '#fintech', '#automation', '#digital', '#visualization']}
        />
        <div className='border-t border-foreground/20 md:hidden'></div>
        <ServiceCard
          title={<>software development</>}
          description='Robust, scalable, and high-performing software solutions power businesses across industries. Our expertise spans cloud integration, AI-driven applications, backend systems, and mobile development—ensuring tailored solutions that meet evolving digital demands.'
          image='/images/what_we_do_5.png'
          tags={['#cloud', '#AI', '#backend', '#mobile', '#devops']}
        />
      </div>
    </div>
  );
};
