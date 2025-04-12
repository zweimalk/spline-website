import { ContactPeople } from '@/components/contact-people';
import { Hero } from '@/components/hero';
import Image from 'next/image';

export default function SoftwareDevelopment() {
  return (
    <>
      <Hero
        title={
          <>
            software <br /> development
          </>
        }
        description={
          'We deliver future-proof, tailor-made solutions that support our clients&apos; day-to-day operations and help them gain an edge over their competition.'
        }
        mediaElement={
          <Image
            src={'/images/software-development/hero.png'}
            alt={'Hero image'}
            width={509}
            height={300}
            className='md:block w-full landscape:h-[400px] rounded-lg mt-8 md:mt-10 object-cover clip-diagonal-responsive'
          />
        }
      />
      <ContactPeople />
    </>
  );
}
