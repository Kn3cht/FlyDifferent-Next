"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";
import { buildNavigationLink } from "@/routing/localized-routing";
import {
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  MAIL_ADDRESS,
  PHONE_NUMBER,
  SANITIZED_PHONE_NUMBER,
  TELEGRAM_USERNAME,
  YT_USERNAME,
} from "@/data/constants";
import { mainRoutes } from "@/routing/routes";
import InstagramIcon from "@/components/icons/InstragramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";

export default function Footer() {
  const t = useTranslations("Footer");
  const tRoutes = useTranslations("Routes");
  const { locale } = useLocale();

  return (
    <div className={"w-full bg-primary text-white py-8 relative z-10"}>
      <div
        className={
          "flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        }
      >
        <div className={"w-full flex flex-col"}>
          <div className={"w-full flex justify-center my-4 font-bold"}>
            {t("header")}
          </div>
          <div className={"grid gap-y-8 grid-cols-1 md:grid-cols-4 mt-8"}>
            <FooterSection
              title={t("copyright", {
                year: new Date().getFullYear(), // returns the current year
              })}
              items={[
                <a
                  key={"imprint"}
                  href={buildNavigationLink(locale, "imprint")}
                >
                  {tRoutes("imprint")}
                </a>,
                <a
                  key={"privacy"}
                  href={buildNavigationLink(locale, "data-privacy")}
                >
                  {tRoutes("privacy")}
                </a>,
              ]}
            />
            <FooterSection
              title={t("contact")}
              items={[
                <a
                  key={"imprint"}
                  href={buildNavigationLink(locale, "imprint")}
                >
                  Ruben Mahlknecht
                </a>,
                <a
                  key={"address"}
                  href={
                    "https://www.google.it/maps/place/39040+Kastelruth,+Bozen/@46.5660031,11.5571737,16z/data=!3m1!4b1!4m5!3m4!1s0x47780cc3322f4295:0xd3d385fd2771ddfc!8m2!3d46.5681349!4d11.5639653?hl=de"
                  }
                >
                  Kleinmichlstr. Nr. 1 I-39040 Kastelruth
                </a>,
                <a key={"phone"} href={`tel:${SANITIZED_PHONE_NUMBER}`}>
                  {t("phone", { number: PHONE_NUMBER })}
                </a>,
                <a
                  key={"whatsapp"}
                  href={`https://api.whatsapp.com/send?phone=${SANITIZED_PHONE_NUMBER}`}
                  target={"_blank"}
                >
                  WhatsApp
                </a>,
                <a
                  key={"telegram"}
                  href={`https://t.me/${TELEGRAM_USERNAME}}`}
                  target={"_blank"}
                >
                  Telegram
                </a>,
                <a key={"mail"} href={`mailto:${MAIL_ADDRESS}`}>
                  {t("email", { mail: MAIL_ADDRESS })}
                </a>,
              ]}
            />
            <FooterSection
              title={t("navigation")}
              items={mainRoutes.map((route, index) => (
                <a key={index} href={buildNavigationLink(locale, route.path)}>
                  {tRoutes(route.nameKey)}
                </a>
              ))}
            />
            <FooterSection
              inline
              title={t("social")}
              items={[
                <a
                  key={"instagram"}
                  href={`https://www.instagram.com/${INSTAGRAM_USERNAME}`}
                  target={"_blank"}
                >
                  <InstagramIcon />
                </a>,
                <a
                  key={"facebook"}
                  href={`https://www.facebook.com/${FACEBOOK_USERNAME}`}
                  target={"_blank"}
                >
                  <FacebookIcon />
                </a>,
                <a
                  key={"youtube"}
                  href={`https://www.youtube.com/@${YT_USERNAME}`}
                  target={"_blank"}
                >
                  <YouTubeIcon />
                </a>,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSection({
  title,
  items,
  inline,
}: {
  title: string;
  inline?: boolean;
  items: React.ReactNode[];
}) {
  return (
    <div>
      <h5 className={"font-bold mb-4"}>{title}</h5>
      {!inline ? (
        <ul className={"space-y-1"}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={"flex gap-8"}>{items.map((item) => item)}</div>
      )}
    </div>
  );
}
