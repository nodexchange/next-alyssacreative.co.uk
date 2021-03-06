import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { Logo } from "@/components/Logo";
// import { Dialog } from '@headlessui/react'
import { useEffect, useState } from "react";
import clsx from "clsx";
import SocialIcons from "./SocialIcons";
// import { ThemeSelect, ThemeToggle } from './ThemeToggle'

export function NavPopover({ display = "md:hidden", className, ...props }) {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    function handleRouteChange() {
      setIsOpen(false);
    }
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isOpen]);

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
            <li>
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-200/10">
            <ThemeSelect />
          </div>
        </div>
      </Dialog> */}
    </div>
  );
}
/*
HOME ABOUT US SERVICES
DIGITAL MARKETING
 
WEBSITE MANAGEMENT
 
DIGITAL & GRAPHIC DESIGN
 CLIENTS CONTACT US
*/
export function NavItems() {
  return (
    <>
      <li>
        <Link href="/about">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">About us</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Services</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">
            Contact us
          </a>
        </Link>
      </li>
    </>
  );
}

export function Header({
  hasNav = false,
  navIsOpen,
  onNavToggle,
  title,
  section,
}) {
  let [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [isOpaque]);

  return (
    <>
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            {/* <source srcSet={require('@/img/beams/docs@30.avif').default} type="image/avif" /> */}
            <Image
              src="/logo-1.jpeg"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              width={72}
              height={16}
            />
          </picture>
          <picture>
            {/* <source srcSet={require('@/img/beams/docs-dark@30.avif').default} type="image/avif" /> */}
            <Image
              src="/logo-1.jpeg"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              width={72}
              height={16}
            />
          </picture>
        </div>
      </div>
      <div
        className={clsx(
          "sticky top-0 z-40 w-full backdrop-blur flex-none transition-all duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06]",
          isOpaque
            ? "bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-900/75"
            : "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
        )}
      >
        <div className="max-w-8xl mx-auto">
          <div
            className={clsx(
              "transition-all duration-500 border-b border-gray-900/10 lg:px-8 lg:border-0 dark:border-gray-300/10",
              hasNav ? "mx-4 lg:mx-0" : "px-4",
              isOpaque ? "py-0" : "py-2"
            )}
          >
            <div className="relative flex items-center">
              <Link href="/">
                <a
                  className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    Router.push("/brand");
                  }}
                >
                  <span className="sr-only">Alyssa Salazar creatives</span>
                  <Logo className="w-auto h-5" />
                </a>
              </Link>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200">
                  <ul className="flex space-x-8">
                    <NavItems />
                  </ul>
                </nav>
                <div className="flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800">
                  {/* <ThemeToggle panelClassName="mt-8" /> */}
                  <SocialIcons />
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="ml-6 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">AS Creative on social</span>
                  </a>
                </div>
              </div>
              <NavPopover
                className="flex items-center ml-auto"
                display="lg:hidden"
              />
            </div>
          </div>
          {hasNav && (
            <div className="flex items-center p-4 border-b border-gray-900/10 lg:hidden dark:border-gray-50/[0.06]">
              <button
                type="button"
                onClick={() => onNavToggle(!navIsOpen)}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24">
                  <path
                    d="M5 6h14M5 12h14M5 18h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {title && (
                <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                  {section && (
                    <li className="flex items-center">
                      {section}
                      <svg
                        width="3"
                        height="6"
                        aria-hidden="true"
                        className="mx-3 overflow-visible text-gray-400"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </li>
                  )}
                  <li className="font-semibold text-gray-900 truncate dark:text-gray-200">
                    {title}
                  </li>
                </ol>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
