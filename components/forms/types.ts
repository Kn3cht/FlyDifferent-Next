export interface Passenger {
  age?: number;
  weight?: number;
}

export interface BookingFormI {
  isVoucher: boolean;
  voucherRecipient?: string;
  flightKey?: string;
  flightVariationKey?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  arrivalDate?: Date;
  departureDate?: Date;
  furtherDetails?: string;
  passengers: Passenger[];
  privacyChecked: boolean;
}
