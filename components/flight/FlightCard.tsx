"use client";

import { Flight } from "@/data/flights/types";
import LinkButton from "@/components/LinkButton";
import { buildNavigationLink } from "@/routing/localized-routing";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";
import { useTranslations } from "next-intl";
import { FLIGHTS_NAMESPACE } from "@/data/flights";
import Image from "next/image";

export default function FlightCard({
  flight,
  inline,
}: {
  flight: Flight;
  inline?: boolean;
}) {
  const { locale } = useLocale();
  const t = useTranslations(FLIGHTS_NAMESPACE);

  const href = buildNavigationLink(locale, `/${flight.key}`);

  const singleVariation = flight.variations.length === 1;
  const cheapestVariation = Math.min(...flight.variations.map((v) => v.price));

  return (
    <a href={href} className={"hover:scale-105 transition-all"}>
      <div className={"relative rounded-lg shadow"}>
        <div className="">
          <div className={"relative" + (inline ? " h-[250px]" : " h-[200px]")}>
            <Image
              className={inline ? "rounded-lg h-[200px]" : "rounded-t-lg"}
              src={flight.headerImage}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          {!inline && (
            <div className="p-5 hover:border-gray-400  bg-gray-900 rounded-lg">
              <h5 className="mb-1 text-xl text-white font-medium tracking-tight">
                {t(flight.titleKey)}
              </h5>
              <LinkButton href={href}>{t("more")}</LinkButton>
            </div>
          )}
        </div>
        <div
          className={
            "opacity-0 hover:opacity-100 hover:bg-black/60 w-full h-full z-10 top-0 left-0 absolute rounded-t-lg shadow flex flex-col justify-center items-center"
          }
        >
          {inline && (
            <h5 className="mb-1 text-xl text-white font-medium tracking-tight">
              {t(flight.titleKey)}
            </h5>
          )}
          <h5 className={"text-white text-2xl"}>
            {singleVariation
              ? t("price", { price: cheapestVariation })
              : t("price-lowest", { lowestPrice: cheapestVariation })}
          </h5>
        </div>
      </div>
    </a>
  );
}
