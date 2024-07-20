"use client";

import { flights } from "@/data/flights";
import FlightCard from "@/components/flight/FlightCard";
import { useTranslations } from "next-intl";
import React from "react";

export function FlightOverview({
  inline,
  titleKey,
}: {
  inline?: boolean;
  titleKey: string;
}) {
  const t = useTranslations("Home");

  return (
    <div>
      <h3 className={"text-4xl text-center mb-8"}>{t(titleKey)}</h3>

      <div
        className={
          "grid" +
          (inline
            ? " grid-cols-2 md:grid-cols-4"
            : " grid-cols-1 md:grid-cols-2")
        }
      >
        {flights.map((flight) => (
          <FlightCard key={flight.key} inline={inline} flight={flight} />
        ))}
      </div>
    </div>
  );
}
