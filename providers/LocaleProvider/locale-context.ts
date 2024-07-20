import React from "react";
import { Locale } from "@/providers/LocaleProvider/types";

interface LocaleContextI {
  locale: Locale;
}

export const LocaleContext = React.createContext<LocaleContextI>({
  locale: Locale.de,
});
