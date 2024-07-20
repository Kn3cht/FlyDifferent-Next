import { Flight } from "@/data/flights/types";
import { classicFlight } from "@/data/flights/classic-flight";

export const FLIGHTS_NAMESPACE = "Flights";

export const flights: Flight[] = [classicFlight];
