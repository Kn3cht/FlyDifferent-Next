import { Flight, FlightVariation } from "@/data/flights/types";

const variations: FlightVariation[] = [
  {
    key: "short",
    price: 179,
    expectedDuration: 15,
    default: true,
  },
  {
    key: "medium",
    price: 42,
    expectedDuration: 69,
    default: true,
  },
];

export const classicFlight: Flight = {
  key: "classic-flight",
  titleKey: "classic-flight.title",
  alias: "classic-flight.alias",
  subtitleKey: "classic-flight.subtitle",
  descriptionShortKey: "classic-flight.description-short",
  locationKey: "classic-flight.location",
  headerImage: "/flights/classic/classic-header.jpg",
  images: [
    "/flights/classic/classic-header.jpg",
    "/flights/classic/classic-1.jpg",
    "/flights/classic/classic-2.png",
    "/flights/classic/classic-3.png",
    "/flights/classic/classic-4.png",
    "/flights/classic/classic-5.png",
  ],
  youTubeLink: "https://www.youtube.com/embed/7OgRNMtREYk",
  variations,
};
