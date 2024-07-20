import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import TitleImage from "@/components/TitleImage";
import React from "react";
import PageSection from "@/components/layout/PageSection";
import BookingForm from "@/components/forms/BookingForm";
import { FlightOverview } from "@/components/flight/FlightOverview";
import CookieBot from "react-cookiebot";
import { COOKIEBOT_DOMAIN_GROUP_ID, COOKIEBOT_ID } from "@/data/constants";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home");

  return (
    <div>
      <TitleImage
        titleKey={"title"}
        subtitleKey={"subtitle"}
        imageUrl={"main-header.jpg"}
        videoUrl={"main-header.mp4"}
        namespace={"Home"}
      />
      <div className={"relative z-10"}>
        <PageSection bgColor={"#07427d"} color={"white"}>
          <div className={"flex flex-col"}>
            <div className={"mb-10"}>
              <FlightOverview
                titleKey={"section-1.our-flights"}
                inline={false}
              />
            </div>
            <h3 className={"text-4xl text-center mb-8"}>
              {t("section-1.request")}
            </h3>
            <BookingForm />
          </div>
        </PageSection>
      </div>
      <CookieBot domainGroupId={COOKIEBOT_DOMAIN_GROUP_ID} />
    </div>
  );
}
