"use client";

import { Flight } from "@/data/flights/types";
import { FLIGHTS_NAMESPACE } from "@/data/flights";
import { useTranslations } from "next-intl";
import PageSection from "@/components/layout/PageSection";
import React from "react";

export default function FlightDescription({
  flight,
  htmlDescription,
}: {
  flight: Flight;
  htmlDescription: string;
}) {
  const t = useTranslations(FLIGHTS_NAMESPACE);

  return (
    <PageSection title={t(flight.titleKey)}>
      <div className={" bg-[#e9ecef] rounded py-12 px-4"}>
        <h5 className={"text-2xl mb-6"}>{t(flight.subtitleKey)}</h5>
        <div dangerouslySetInnerHTML={{ __html: htmlDescription }} />
      </div>
    </PageSection>
  );
}
