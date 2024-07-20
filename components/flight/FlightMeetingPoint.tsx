"use client";

import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import { FLIGHTS_NAMESPACE } from "@/data/flights";
import { buildNavigationLink } from "@/routing/localized-routing";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";
import LinkButton from "@/components/LinkButton";

export default function FlightMeetingPoint({
  instructions,
}: {
  instructions?: string;
}) {
  const { locale } = useLocale();
  const t = useTranslations(FLIGHTS_NAMESPACE);

  const href = buildNavigationLink(locale, "/meeting-points");

  return (
    <a href={href}>
      <Card
        title={t("meeting-point.title")}
        image={
          <div className={"h-[180px] flex justify-center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-full text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
        }
      >
        {instructions && (
          <p className="font-normal text-gray-500">
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </p>
        )}

        <LinkButton href={href}>{t("meeting-point.overview")}</LinkButton>
      </Card>
    </a>
  );
}
