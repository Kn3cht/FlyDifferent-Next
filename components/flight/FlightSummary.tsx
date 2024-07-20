"use client";

import { Flight } from "@/data/flights/types";
import PageSection from "@/components/layout/PageSection";
import React from "react";
import FlightImageGallery from "@/components/flight/FlightImageGallery";
import { useTranslations } from "next-intl";
import { FLIGHTS_NAMESPACE } from "@/data/flights";
import LinkButton from "@/components/LinkButton";
import { buildNavigationLink } from "@/routing/localized-routing";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";

export default function FlightSummary({ flight }: { flight: Flight }) {
  const t = useTranslations(FLIGHTS_NAMESPACE);

  const { locale } = useLocale();

  const variations = flight.variations.sort((a, b) => a.price - b.price);

  const cheapestVariation = Math.min(
    ...variations.map((variation) => variation.price),
  );

  return (
    <PageSection title={t("info")}>
      <div className={"flex flex-col gap-8 md:grid md:gap-8 md:grid-cols-2"}>
        <FlightImageGallery flight={flight} />
        <div className={"flex flex-col space-y-5 md:relative"}>
          <div className={"flex flex-col space-y-2"}>
            <h2 className={"text-2xl"}>{t(flight.alias)}</h2>
            <p className={"text-gray-500"}>{t(flight.descriptionShortKey)}</p>
          </div>
          <p className={"text-2xl"}>
            {t("price-lowest", { lowestPrice: cheapestVariation })}
          </p>

          <h4 className={"mb-3 text-gray-600"}>{t("variations")}</h4>
          <div className={"grid grid-cols-3 gap-2"}>
            {variations.map((variation, index) => (
              <div
                key={index}
                className={
                  "flex flex-col text-center justify-center border rounded-lg"
                }
              >
                <div>
                  {t("duration", { duration: variation.expectedDuration })}
                </div>
                <div>{t("price", { price: variation.price })}</div>
              </div>
            ))}
          </div>
          <div className={"md:bottom-0 md:absolute w-full"}>
            <LinkButton block href={buildNavigationLink(locale, "/#request")}>
              {t("request")}
            </LinkButton>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
