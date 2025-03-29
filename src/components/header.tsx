'use client';

import { Link } from '@/components/link';
import ThemeToggler from '@/components/theme-toggler';
import { Button, Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { Fragment, useState } from 'react';
import { ArrowRightSvgIcon, FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, SplineLogo } from './icons';

const mobileNavigation = [
  { name: 'technology & electronics', href: '#what-we-do' },
  { name: 'healthcare solutions', href: '#what-we-do' },
  { name: 'automotive & mobility', href: '#what-we-do' },
  { name: 'retail media & services', href: '#what-we-do' },
  { name: 'software development', href: '#what-we-do' },
];

const navigation = [
  { name: 'Our Services', href: '#what-we-do' },
  // { name: 'Useful Documents', href: '#' },
  { name: 'Join Us', href: '#join-us' },
  { name: 'Contact', href: '#contact-card' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = useTheme();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Wait for dialog close animation to complete
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 300);
  };

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
            <Link
              key={item.name}
              href={item.href}
              className='text-sm/6'
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/50' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-end text-center'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-300'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-300'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <DialogPanel className='w-full max-w-[400px] h-full fixed right-0 top-0 overflow-y-auto bg-background px-4 text-left align-middle shadow-xl'>
                  <div className='flex items-center justify-end h-[60px]'>
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
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                              }}
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
                      <Link
                        href='#contact-card'
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('#contact-card');
                        }}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div className='mt-8 flow-root px-8'>
                    <ThemeToggler />
                  </div>
                  <div className='flex ml-auto px-9 gap-6 mt-6'>
                    <Link href='https://www.linkedin.com/company/spline-polska'>
                      <span className='sr-only'>LinkedIn</span>
                      <LinkedinLogoIcon className='w-5 h-5' />
                    </Link>
                    <Link href='https://www.facebook.com/share/12LutkKFykh/?mibextid=wwXIfr'>
                      <span className='sr-only'>Facebook</span>
                      <FacebookLogoIcon className='w-5 h-5' />
                    </Link>
                    <Link href='https://www.instagram.com/spline_design_?igsh=dnUzaGl3M3gza25p'>
                      <span className='sr-only'>Instagram</span>
                      <InstagramLogoIcon className='w-5 h-5' />
                    </Link>
                  </div>
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};
