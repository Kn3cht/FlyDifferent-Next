"use client";

import { Flight } from "@/data/flights/types";
import PageSection from "@/components/layout/PageSection";
import FlightMeetingPoint from "@/components/flight/FlightMeetingPoint";
import FlightVideo from "@/components/flight/FlightVideo";

// TODO: implement
export default function FlightDetails({
  flight,
  meetingPointInstructions,
}: {
  flight: Flight;
  meetingPointInstructions?: string;
}) {
  // TODO: Check if flight has video

  return (
    <PageSection bgColor={"#07427d"}>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 text-white"}>
        <FlightVideo />
        <FlightMeetingPoint instructions={meetingPointInstructions} />
      </div>
    </PageSection>
  );
}
