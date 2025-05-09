import Image from 'next/image';
import { Body1 } from './Typo/Body1';
import { Header1 } from './Typo/Header1';

export const AboutUsSection = () => {
  return (
    <div className='mx-auto md:mt-30 lg:mt-40 px-4'>
      <div className='flex flex-col md:grid md:grid-cols-3 md:items-center mb-10 md:mb-20'>
        <Header1 className='col-span-2'>about us</Header1>
      </div>
      <Image
        src='/images/about_us.png'
        alt='about us'
        width={395}
        height={495}
        className='w-full h-[167px] md:h-[495px] object-cover rounded-xl clip-diagonal-60 clip-diagonal mb-6'
      />
      <div className='flex flex-col gap-y-6 pt-10 md:grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-3'>
        <Body1>
          At Spline, we believe that great technology starts with great people. Our culture is built on collaboration,
          curiosity, and continuous learning. We foster an environment where engineers, designers, and developers can
          grow and solve complex challenges with creativity and precision. Every idea matters, and innovation thrives
          when people are encouraged to experiment and push boundaries.
        </Body1>
        <Body1>
          We embrace teamwork and trust, ensuring that every project benefits from diverse expertise and fresh
          perspectives. Flexibility and open communication are at the core of our approach, allowing us to adapt to
          challenges and deliver high-quality solutions. We value ownership, giving our team the freedom to take
          initiative and make meaningful contributions to every project.
        </Body1>
        <Body1 className='md:col-start-2 lg:col-start-3'>
          Beyond technology, we create a workplace where people feel inspired and supported. Our focus extends beyond
          delivering solutions—we build lasting relationships, nurture talent, and cultivate a company culture where
          passion and expertise drive success.
        </Body1>
      </div>
    </div>
  );
};
