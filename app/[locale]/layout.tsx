import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/providers/LocaleProvider/LocaleProvider";
import TitleImage from "@/components/TitleImage";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LocaleProvider>
            <Header />
            <div className={"mt-16"}>{children}</div>
            <Footer />
          </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return ["de", "en"].map((locale) => ({ locale }));
}
