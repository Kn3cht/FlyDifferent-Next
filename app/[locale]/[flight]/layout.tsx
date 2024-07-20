import React from "react";

import { flights, FLIGHTS_NAMESPACE } from "@/data/flights";
import TitleImage from "@/components/TitleImage";

export default async function FlightLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { flight: string };
}) {
  const flight = flights.find((flight) => flight.key === params.flight);

  if (!flight) {
    return null;
  }

  return (
    <div>
      <TitleImage
        titleKey={flight.titleKey}
        subtitleKey={flight.locationKey}
        imageUrl={flight.headerImage}
        namespace={FLIGHTS_NAMESPACE}
      />

      <div className={"relative z-10"}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return flights.map((flight) => {
    return {
      flight: flight.key,
    };
  });
}
