"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";
import { buildNavigationLink } from "@/routing/localized-routing";
import { mainRoutes } from "@/routing/routes";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const { locale } = useLocale();

  const t = useTranslations("Routes");

  return (
    <div className="fixed top-0 w-full z-30 transition duration-300 ease-in-out bg-primary text-white">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <div className={"w-[100px] h-[60px] relative"}>
              <Image
                src={"/logo-nav.jpg"}
                alt={"FlyDifferent Logo"}
                layout="fill"
                priority={true}
              />
            </div>
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex h-screen flex-col" : " hidden")
          }
        >
          <nav
            className={
              "flex-col flex-grow" + (navbarOpen ? " w-full pt-8" : "")
            }
          >
            <ul
              className={
                "flex flex-grow justify-end flex-wrap" +
                (navbarOpen ? " flex-col items-end" : " items-center")
              }
            >
              {mainRoutes
                .filter((route) => route.visibleInHeader)
                .map((route) => (
                  <li key={route.path}>
                    <a
                      href={buildNavigationLink(locale, route.path)}
                      className={
                        " px-5 py-3 flex items-center transition duration-150 ease-in-out hover:text-orange-500" +
                        (route.primary
                          ? " text-accentOrange font-bold"
                          : " font-medium")
                      }
                    >
                      {t(route.nameKey)}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
