"use client";

import { LocaleContext } from "@/providers/LocaleProvider/locale-context";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Locale } from "@/providers/LocaleProvider/types";

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const pathnameLocale = pathname
    .split("/")
    .filter((component) => !!component.length)[0];
  let locale: Locale = Locale.de;

  switch (pathnameLocale) {
    case "de":
      locale = Locale.de;
      break;
    case "en":
      locale = Locale.en;
      break;
    default:
      locale = Locale.de;
      break;
  }

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
