import { flights } from "@/data/flights";
import React, { use } from "react";
import {
  getFlightDescription,
  getFlightMeetingPointInstructions,
} from "@/utils/md-utils";
import FlightDescription from "@/components/flight/FlightDescription";
import FlightDetails from "@/components/flight/FlightDetails";
import FlightSummary from "@/components/flight/FlightSummary";
import BookingSection from "@/components/BookingSection";
import { FlightOverview } from "@/components/flight/FlightOverview";
import PageSection from "@/components/layout/PageSection";

export default function Flight({
  params,
}: {
  params: { flight: string; locale: string };
}) {
  const { htmlContent: descriptionData } = use(
    getFlightDescription(params.locale, params.flight),
  );
  const { htmlContent: flightMeetingPointData } = use(
    getFlightMeetingPointInstructions(params.locale, params.flight),
  );

  const flight = flights.find((flight) => flight.key === params.flight);

  if (!flight) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <FlightSummary flight={flight} />
      <BookingSection flight={flight} />
      <FlightDescription flight={flight} htmlDescription={descriptionData} />
      <FlightDetails
        flight={flight}
        meetingPointInstructions={flightMeetingPointData}
      />
      <PageSection>
        <FlightOverview titleKey={"section-1.our-flights"} inline={true} />
      </PageSection>
    </div>
  );
}
