import { useCallback } from "react";

export const buildNavigationLink = (locale: string, link: string) =>
  `/${locale}/${link}`;
