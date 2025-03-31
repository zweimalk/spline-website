import Link from 'next/link';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, SplineLogo } from './icons';
export const Footer = () => {
  return (
    <footer className='fill-background w-full'>
      <div className='container mx-auto'>
        <div className='flex justify-start items-center pt-20 px-6 xl:hidden'>
          <SplineLogo className='w-53' />
        </div>
        <div className='px-6 py-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
          <div className='hidden xl:flex justify-start items-start px-6'>
            <SplineLogo />
          </div>
          {/* Address Column */}
          <div>
            <h2 className='text-lg font-medium mb-6'>Address</h2>
            <address className='not-italic text-sm'>
              <p className='mb-2'>Spline sp.z.o.o.</p>
              <p className='mb-2'>ul. Ceglana 7</p>
              <p className='mb-2'>40-514 Katowice</p>
              <p className='mb-2'>Poland</p>
            </address>
          </div>

          {/* Social Media Column */}
          <div>
            <h2 className='text-lg font-medium mb-6'>Find us on</h2>
            <div className='flex flex-col space-y-3 text-sm'>
              <Link href='https://www.linkedin.com/company/spline-polska' className='flex items-center hover:underline'>
                <LinkedinLogoIcon className='w-5 h-5 mr-3 fill-background' />
                <span>LinkedIn</span>
              </Link>
              <Link
                href='https://www.instagram.com/spline_design_?igsh=dnUzaGl3M3gza25p'
                className='flex items-center hover:underline'
              >
                <InstagramLogoIcon className='w-5 h-5 mr-3 fill-background' />
                <span>Instagram</span>
              </Link>
              <Link
                href='https://www.facebook.com/share/12LutkKFykh/?mibextid=wwXIfr'
                className='flex items-center hover:underline'
              >
                <FacebookLogoIcon className='w-5 h-5 mr-3 fill-background' />
                <span>Facebook</span>
              </Link>
            </div>
          </div>
          {/* Navigation Links */}

          <div className='flex flex-col md:grid md:grid-cols-2 md:justify-between col-span-2'>
            <div className='flex flex-col space-y-2 pb-6'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <Link href='/technology-electronics' className='hover:underline'>
                Technology & Electronics
              </Link>
              <Link href='/healthcare-solutions' className='hover:underline'>
                Healthcare Solutions
              </Link>
              <Link href='/automotive-mobility' className='hover:underline'>
                Automotive and Mobility
              </Link>
              <Link href='/retail-services-media' className='hover:underline'>
                Retail, services and media
              </Link>
              <Link href='/documents' className='hover:underline'>
                Useful Documents
              </Link>
              <Link href='/job-search' className='hover:underline'>
                Job Search Panel
              </Link>
              <Link href='/contact' className='hover:underline'>
                Contact
              </Link>
            </div>
            {/* Legal Section */}

            <div className='pb-8 pt-4 md:pt-0'>
              <div className='flex flex-col mb-4 md:mb-0 gap-1 md:gap-4 text-sm '>
                <Link
                  href='/docs/spline_rodo.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline mb-2 md:mb-0'
                >
                  Privacy Policy
                </Link>
                <Link href='/gdpr' className='hover:underline mb-2 md:mb-0'>
                  GDPR Clauses
                </Link>
                <Link href='/gdpr' className='hover:underline mb-2 md:mb-0'>
                  Protected by Recaptcha
                </Link>
                <Link href='/gdpr' className='hover:underline mb-2 md:mb-0'>
                  Copyright© Spline 2025
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
