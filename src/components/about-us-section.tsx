import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <div className='container mx-auto px-4 md:mt-60 '>
      <div className='flex flex-col md:grid md:grid-cols-3 md:items-center mb-10 md:mb-20'>
        <h1 className='text-7xl xl:text-9xl col-span-2'>about us</h1>
      </div>
      <Image
        src='/images/about_us.png'
        alt='about us'
        width={395}
        height={495}
        className='w-full h-[495px] object-cover rounded-xl'
      />
      <div className='flex flex-col gap-y-6 pt-10 md:grid md:grid-cols-3 md:gap-x-10'>
        <p>
          At Spline, we believe that great technology starts with great people. Our culture is built on collaboration,
          curiosity, and continuous learning. We foster an environment where engineers, designers, and developers can
          grow and solve complex challenges with creativity and precision. Every idea matters, and innovation thrives
          when people are encouraged to experiment and push boundaries. We embrace teamwork
        </p>
        <p>
          and trust, ensuring that every project benefits from diverse expertise and fresh perspectives. Flexibility and
          open communication are at the core of our approach, allowing us to adapt to challenges and deliver
          high-quality solutions. We value ownership, giving our team the freedom to take initiative and make meaningful
          contributions to every project. Beyond technology, we create a workplace where people feel
        </p>
        <p>
          inspired and supported. Our focus extends beyond delivering solutions—we build lasting relationships, nurture
          talent, and cultivate a company culture where passion and expertise drive success.
        </p>
      </div>
    </div>
  );
};
