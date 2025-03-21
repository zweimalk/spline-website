'use client';

import { Link } from '@/components/link';
import ThemeToggler from '@/components/theme-toggler';
import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { ArrowRightSvgIcon, FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, SplineLogo } from './icons';

const mobileNavigation = [
  { name: 'technology & electronics', href: '#' },
  { name: 'healthcare solutions', href: '#' },
  { name: 'automotive & mobility', href: '#' },
  { name: 'retail media & services', href: '#' },
  { name: 'software development', href: '#' },
];

const navigation = [
  { name: 'Our Services', href: '#' },
  { name: 'Useful Documents', href: '#' },
  { name: 'Join Us', href: '#' },
  { name: 'Contact', href: '#' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = useTheme();

  return (
    <header className='fixed top-0 z-50 bg-background w-full'>
      <nav aria-label='Global' className='flex items-center justify-between h-[60px] px-4'>
        <Link href='#' className='-m-1.5 p-1.5'>
          <span className='sr-only'>Spline</span>
          {/* @ts-expect-error this is needed for the logo */}
          <SplineLogo inverted={isDarkMode === 'dark'} className='w-18 h-5' />
        </Link>
        <div className='flex lg:hidden'>
          <Button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </Button>
        </div>
        <div className='hidden lg:flex lg:gap-x-20 items-center'>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className='text-sm/6 '>
              {item.name}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4sm:ring-1 sm:ring-zinc-900/10'>
          <div className='flex items-center justify-end h-[60px] px-4'>
            <Button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </Button>
          </div>
          <div className='mt-8 flow-root px-8'>
            <div className='flex flex-col gap-8'>
              <div>
                <p>Our services</p>
                <div className='space-y-5 py-6 pl-12'>
                  {mobileNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='-mx-3 flex items-center justify-between max-w-[220px]'
                    >
                      {item.name}
                      <ArrowRightSvgIcon className='w-6 h-6' />
                    </Link>
                  ))}
                </div>
              </div>
              <p>Useful documents</p>
              <p>Join Us</p>
              <p>Contact</p>
            </div>
          </div>
          <div className='mt-8 flow-root px-8'>
            <ThemeToggler />
          </div>
          <div className='flex ml-auto px-9 gap-4 mt-4'>
            <Link href='https://www.linkedin.com/company/spline-polska'>
              <span className='sr-only'>LinkedIn</span>
              <LinkedinLogoIcon className='w-5 h-5' />
            </Link>
            <Link href='https://instagram.com/spline'>
              <span className='sr-only'>Instagram</span>
              <InstagramLogoIcon className='w-5 h-5' />
            </Link>
            <Link href='https://facebook.com/spline'>
              <span className='sr-only'>Facebook</span>
              <FacebookLogoIcon className='w-5 h-5' />
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
