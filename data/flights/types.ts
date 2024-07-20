export interface FlightVariation {
  key: string;
  price: number;
  default?: boolean;
  // duration in minutes
  expectedDuration: number;
}

export interface Flight {
  key: string;
  titleKey: string;
  alias: string;
  descriptionShortKey: string;
  subtitleKey: string;
  locationKey: string;
  headerImage: string;
  images: string[];
  youTubeLink: string;
  variations: FlightVariation[];
}
