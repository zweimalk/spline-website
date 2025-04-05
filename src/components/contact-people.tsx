import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from './contact-form';

interface ContactPersonProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  imageSrc: string;
  imageAlt?: string;
}

/**
 * ContactCard - Displays a single contact person's information
 */
const ContactCard = ({
  name,
  title,
  email,
  phone,
  imageSrc,
  imageAlt = `${name} profile picture`,
}: ContactPersonProps) => {
  return (
    <div className='flex items-center gap-6 rounded-xl'>
      <div className='h-36 w-24 shrink-0 overflow-hidden rounded-md clip-diagonal-contact-us'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={96}
          height={133}
          className='h-full w-full object-cover clip-diagonal clip-diagonal-sm'
        />
      </div>

      <div className='flex flex-col space-y-2'>
        <h4 className='text-xl font-semibold'>{name}</h4>
        <p className='tracking-wide'>{title}</p>

        <div className='space-y-2'>
          <div className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center '>
              <EnvelopeIcon className='w-6 h-6' />
            </div>
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center '>
              <PhoneIcon className='w-6 h-6' />
            </div>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ContactPeople - Displays a grid of contact persons
 */
export const ContactPeople = () => {
  const contactPersons: ContactPersonProps[] = [
    {
      name: 'Anna Owsińska',
      title: 'HR Senior Recruiter',
      email: 'anna.owsinska@spline.pl',
      phone: '+48 789 115 181',
      imageSrc: '/images/ania_owsinska.png',
    },
    {
      name: 'Sylwia Gajewska',
      title: 'Sales & Operations Director',
      email: 'sylwia.gajewska@spline.pl',
      phone: '+48 451 599 338',
      imageSrc: '/images/sylwia_gajewska.png',
    },
  ];

  return (
    <div className='py-20 md:py-40 container mx-auto px-4' id='contact-card'>
      <h1 className='text-7xl xl:text-9xl col-span-2'>contact us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:pt-20'>
        <div className='grid gap-6 grid-cols-1 mt-10 md:mt-0 order-2 md:order-1'>
          {contactPersons.map((person) => (
            <ContactCard key={person.email} {...person} />
          ))}
          <div className='flex flex-col gap-2 mt-4'>
            <h2 className='text-xl font-semibold'>General Information</h2>
            <div className='flex flex-col gap-2'>
              <p>+48 513 727 619</p>
              <p>+48 661 318 693</p>
              <p>info@spline.pl</p>
            </div>
          </div>
        </div>
        <div className='rounded-xl order-1 md:order-2'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
