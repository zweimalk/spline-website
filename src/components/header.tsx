"use client";

import { Link } from "@/components/link";
import ThemeToggler from "@/components/theme-toggler";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SplineLogo } from "./icons";
const navigation = [
  { name: "Our Services", href: "#" },
  { name: "Useful Documents", href: "#" },
  { name: "Join Us", href: "#" },
  { name: "Contact", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = useTheme();

  return (
    <header className="fixed top-0 z-50 bg-background w-full">
      <nav
        aria-label="Global"
        className="flex items-center justify-between h-[60px] px-4"
      >
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Spline</span>
          {/* @ts-expect-error this is needed for the logo */}
          <SplineLogo inverted={isDarkMode === "dark"} className="w-18 h-5" />
        </Link>
        <div className="flex lg:hidden">
          <Button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-20 items-center">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 ">
              {item.name}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background pr-4 sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between h-[60px] px-4">
            <Link href="#">
              <span className="sr-only">Spline</span>
              <SplineLogo
                // @ts-expect-error this is needed for the logo
                inverted={isDarkMode === "dark"}
                className="w-18 h-5"
              />
            </Link>
            <Button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </Button>
          </div>
          <div className="mt-8 flow-root px-4">
            <div className="-my-6 divide-y divide-foreground/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-foreground divide-foreground-900 hover:bg-foreground-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
