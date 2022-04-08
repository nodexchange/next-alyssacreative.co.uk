import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { Logo } from "@/components/Logo";
import { GetStartedButton } from "@/components/GetStartedButton";
import { NavItems } from "@/components/NavItems";
import { NavPopover } from "@/components/NavPopover";
import { Page } from "@/layouts/Page";
// import { Dialog } from '@headlessui/react'
import { useEffect, useState } from "react";
import clsx from "clsx";
import SocialIcons from "./SocialIcons";
// import { ThemeSelect, ThemeToggle } from './ThemeToggle'

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
      <div
        className={clsx(
          "sticky top-0 z-40 w-full backdrop-blur flex-none transition-all duration-500 lg:z-50",
          isOpaque
            ? "bg-ascreative"
            : "bg-ascreative"
        )}
      >
        <Page>
          <div
            className={clsx(
              "transition-all duration-500 border-b border-gray-900/10 lg:border-0 dark:border-gray-300/10",
              hasNav ? "mx-4 lg:mx-0" : "px-3",
              isOpaque ? "py-0" : "py-2"
            )}
          >
            <div className="relative flex items-center">
              <Link href="/">
                <a
                  className="mr-3 flex-none w-[7%] overflow-hidden md:w-auto"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    Router.push("/");
                  }}
                >
                  <span className="sr-only">Alyssa Salazar creatives</span>
                  <Logo className="w-auto h-5" />
                </a>
              </Link>
              <div className="relative w-full hidden lg:flex items-center justify-center">
                <nav className="mr-3 w-auto text-sm leading-6 font-semibold text-white dark:text-gray-900">
                  <ul className="flex space-x-8 w-auto">
                    <NavItems />
                  </ul>
                </nav>
              </div>
              <div className="w-[7%] mr-3">
                  <GetStartedButton />
                  {/* <ThemeToggle panelClassName="mt-8" /> */}
                  {/* <SocialIcons />
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="ml-6 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">AS Creative on social</span>
                  </a> */}
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
        </Page>
      </div>
    </>
  );
}
