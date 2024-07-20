"use client";

import { serialize } from "object-to-formdata";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { flights } from "@/data/flights";
import DividerWithText from "@/components/DividerWithText";
import Button from "../Button";
import { BookingFormI } from "@/components/forms/types";

const MAX_AGE = 80;
const MIN_AGE = 14;

const MAX_WEIGHT = 100;
const MIN_WEIGHT = 30;

export default function BookingForm({
  isVoucher = false,
  flightKey,
}: {
  isVoucher?: boolean;
  flightKey?: string;
}) {
  const defaultFlightKey = flightKey ?? flights[0].key;

  const [formState, setFormState] = useState<BookingFormI>(() => ({
    isVoucher: isVoucher,
    passengers: [{}],
    flightKey: defaultFlightKey,
    privacyChecked: false,
  }));

  const emailValid = useMemo(
    () => !formState.email?.length || formState.email.includes("@"),
    [formState.email],
  );
  const phoneValid = useMemo(
    () => validatePhoneNumber(formState.phoneNumber),
    [formState.phoneNumber],
  );

  const agesValid = formState.passengers.some(
    (passenger) =>
      !!passenger.age && passenger.age <= MAX_AGE && passenger.age >= MIN_AGE,
  );
  const weightsValid = formState.passengers.some(
    (passenger) =>
      !!passenger.weight &&
      passenger.weight <= MAX_WEIGHT &&
      passenger.weight >= MIN_WEIGHT,
  );

  const passengersValid = agesValid && weightsValid;

  const formValid =
    !!formState.flightKey &&
    !!formState.flightVariationKey &&
    !!formState.email &&
    !!formState.phoneNumber &&
    !!formState.firstName &&
    !!formState.lastName &&
    emailValid &&
    phoneValid &&
    passengersValid &&
    (!formState.isVoucher || !!formState.voucherRecipient) &&
    formState.privacyChecked;

  const t = useTranslations("BookingForm");
  const tFlights = useTranslations("Flights");

  const selectedFlight = useMemo(
    () => flights.find((flight) => flight.key === formState.flightKey),
    [formState.flightKey],
  );

  useEffect(() => {
    if (selectedFlight) {
      setFormState((old) => ({
        ...old,
        flightVariationKey: (
          selectedFlight.variations.find((variation) => variation.default) ??
          selectedFlight.variations[0]
        )?.key,
      }));
    }
  }, [selectedFlight]);

  const handlePassengersChanged = (numberPassengers: number) => {
    const diff = numberPassengers - formState.passengers.length;
    if (diff < 0) {
      setFormState((old) => ({
        ...old,
        passengers: old.passengers.slice(0, diff),
      }));
    } else {
      setFormState((old) => ({
        ...old,
        passengers: [
          ...old.passengers,
          ...Array.from(Array(diff).keys()).map(() => ({})),
        ],
      }));
    }
  };

  const preventSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (!selectedFlight) {
      console.error("No selected flight");
    }

    const bookingRequest = {
      ...formState,
      flightTitle: selectedFlight
        ? tFlights(selectedFlight.titleKey)
        : undefined,
      flightVariation: selectedFlight?.variations.find(
        (variation) => variation.key === formState.flightVariationKey,
      ),
      type: "booking-request",
    };

    const requestBody = serialize(bookingRequest, { indices: true });

    console.log("handle submddit", formState);

    fetch("http://localhost:9000/api/php-mailer.php", {
      method: "POST",
      body: requestBody,
    })
      .then((response) => {
        console.log(response);
        // TODO: Update loading
      })
      .catch((error) => {
        // TODO: Update loading
        console.error("failed to submit form", error);
      });
  };

  return (
    <div
      id={"request"}
      className={
        "scroll-mt-[115px] p-5 rounded-lg" +
        (formState.isVoucher ? " bg-[#8b0000]" : " bg-[#9696dc1a]")
      }
    >
      <div className={"text-white"}>{t("headline")}</div>
      <form onSubmit={preventSubmit}>
        <div className={"mb-2"}>
          <label className="inline-flex items-center cursor-pointer my-3">
            <span className="mr-3 text-sm font-medium text-white ">
              {t("voucher.no")}
            </span>
            <input
              type="checkbox"
              checked={formState.isVoucher}
              className="sr-only peer"
              onChange={(e) =>
                setFormState((old) => ({
                  ...old,
                  isVoucher: e.target.checked,
                  voucherRecipient: undefined,
                }))
              }
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white ">
              {t("voucher.yes")}
            </span>
          </label>
        </div>

        {formState.isVoucher && (
          <div className={"mb-6"}>
            <div>
              <label className="block mb-2 text-sm font-medium text-white  required">
                {t("voucher-recipient")}
              </label>
              <input
                type="text"
                value={formState.voucherRecipient}
                onChange={(e) =>
                  setFormState((old) => ({
                    ...old,
                    voucherRecipient: e.target.value,
                  }))
                }
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Erika Musterfrau"
                required
              />
            </div>
          </div>
        )}

        <div className={"mb-6"}>
          <label
            htmlFor="flight"
            className="block mb-2 text-sm font-medium text-white "
          >
            {t("select-flight")}
          </label>
          <select
            id="flight"
            value={formState.flightKey}
            onChange={(e) =>
              setFormState((old) => ({ ...old, flightKey: e.target.value }))
            }
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
          >
            {flights.map((flight) => (
              <option key={flight.key} value={flight.key}>
                {tFlights(flight.titleKey)}
              </option>
            ))}
          </select>
        </div>

        {selectedFlight && !!selectedFlight.variations.length && (
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"}>
            {selectedFlight.variations.map((variation) => {
              const selected = variation.key === formState.flightVariationKey;
              return (
                <div
                  key={variation.key}
                  className={
                    "text-black cursor-pointer rounded-lg p-3 flex justify-between items-center" +
                    (selected
                      ? " bg-orange-200 border border-accentOrange"
                      : " bg-white border border-gray-500")
                  }
                  onClick={() =>
                    setFormState((old) => ({
                      ...old,
                      flightVariationKey: variation.key,
                    }))
                  }
                >
                  <div>
                    <div className={"font-medium"}>
                      {t("expected-duration", {
                        duration: variation.expectedDuration,
                      })}
                    </div>
                    <div
                      className={"font-light"}
                    >{`${variation.price},-€`}</div>
                  </div>
                  {selected && <div className={"text-xl"}>✓</div>}
                </div>
              );
            })}
          </div>
        )}

        <DividerWithText text={t("passenger-details")} />

        <div className={"mb-6"}>
          <label
            htmlFor="flight"
            className="block mb-2 text-sm font-medium text-white "
          >
            {t("number-passengers")}
          </label>
          <select
            value={formState.passengers.length}
            onChange={(e) => handlePassengersChanged(Number(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {Array.from(Array(5).keys()).map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className={"w-28"}></th>
              <th className={"text-left"}>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-white required"
                >
                  {t("age")}
                </label>
              </th>
              <th className={"text-left"}>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-white  required"
                >
                  {t("weight")}
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {formState.passengers.map((passenger, index) => (
              <tr key={index}>
                <td className={"text-white"}>
                  {t("passenger")} {index + 1}
                </td>
                <td className={"p-2"}>
                  <input
                    min={MIN_AGE}
                    max={MAX_AGE}
                    type="number"
                    value={formState.passengers[index].age}
                    className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5      "
                    placeholder="35"
                    onChange={(e) =>
                      setFormState((old) => {
                        let passengers = old.passengers;
                        passengers[index].age = e.target.value
                          ? Number(e.target.value)
                          : undefined;
                        return { ...old, passengers };
                      })
                    }
                    required
                  />
                  {formState.passengers[index].age &&
                    (formState.passengers[index].age < MIN_AGE ||
                      formState.passengers[index].age > MAX_AGE) && (
                      <p className={"text-orange-500 text-xs mt-1"}>
                        {t("validation.age-invalid", {
                          minAge: MIN_AGE,
                          maxAge: MAX_AGE,
                        })}
                      </p>
                    )}
                </td>
                <td className={"px-2"}>
                  <input
                    min={MIN_WEIGHT}
                    max={MAX_WEIGHT}
                    type="number"
                    value={formState.passengers[index].weight}
                    onChange={(e) =>
                      setFormState((old) => {
                        let passengers = old.passengers;
                        passengers[index].weight = e.target.value
                          ? Number(e.target.value)
                          : undefined;

                        return { ...old, passengers };
                      })
                    }
                    className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5      "
                    placeholder="80"
                    required
                  />
                  {formState.passengers[index].weight &&
                    (formState.passengers[index].weight < MIN_WEIGHT ||
                      formState.passengers[index].weight > MAX_WEIGHT) && (
                      <p className={"text-orange-500 text-xs mt-1"}>
                        {t("validation.weight-invalid", {
                          minWeight: MIN_WEIGHT,
                          maxWeight: MAX_WEIGHT,
                        })}
                      </p>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={"text-white text-xs mt-2"}>
          {t("passengers-data-collection")}
        </p>

        <DividerWithText text={t("contact-details")} />

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-white  required">
              {t("first-name")}
            </label>
            <input
              type="text"
              value={formState.firstName}
              onChange={(e) =>
                setFormState((old) => ({ ...old, firstName: e.target.value }))
              }
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              placeholder="Erika"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white  required">
              Last name
            </label>
            <input
              type="text"
              value={formState.lastName}
              onChange={(e) =>
                setFormState((old) => ({ ...old, lastName: e.target.value }))
              }
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              placeholder="Musterfrau"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white  required">
              {t("phone")}
            </label>
            <input
              type="tel"
              value={
                formState.phoneNumber !== undefined
                  ? `+${formState.phoneNumber}`
                  : undefined
              }
              onChange={(e) =>
                setFormState((old) => ({
                  ...old,
                  phoneNumber: e.target.value.replaceAll("+", ""),
                }))
              }
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              placeholder="+49 123 456 6789"
              required
            />
            {!phoneValid && (
              <p className={"text-orange-500 text-xs mt-1"}>
                {t("validation.phone-invalid")}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white  required">
              {t("email")}
            </label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState((old) => ({ ...old, email: e.target.value }))
              }
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              placeholder="erika.musterfrau@muster.com"
              required
            />
            {!emailValid && (
              <p className={"text-orange-500 text-xs mt-1"}>
                {t("validation.email-invalid")}
              </p>
            )}
          </div>

          {/*          <div>
            <label className="block mb-2 text-sm font-medium text-white ">
              {t("arrival-date")}
            </label>
            <input
              className={
                "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              }
              value={
                formState.arrivalDate
                  ? `${formState.arrivalDate.getFullYear()}-${(formState.arrivalDate.getMonth() + 1).toString().padStart(2, "0")}-${formState.arrivalDate.getDate().toString().padStart(2, "0")}`
                  : undefined
              }
              onChange={(e) =>
                setFormState((old) => ({
                  ...old,
                  arrivalDate: new Date(e.target.value),
                }))
              }
              autoComplete="off"
              type="date"
              name="arrival_date"
              required
            />
          </div>*/}
          {/*          <div>
            <label className="block mb-2 text-sm font-medium text-white ">
              {t("departure-date")}
            </label>
            <date-input
              className={
                "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              }
              value={
                formState.departureDate
                  ? `${formState.departureDate.getFullYear()}-${(formState.departureDate.getMonth() + 1).toString().padStart(2, "0")}-${formState.departureDate.getDate().toString().padStart(2, "0")}`
                  : undefined
              }
              autoComplete="off"
              onChange={(e) =>
                setFormState((old) => ({
                  ...old,
                  departureDate: new Date(e.target.value),
                }))
              }
              type="date"
              name="departure_date"
              required
            />
          </div>*/}
        </div>

        <div className={"mb-6"}>
          <label className="block mb-2 text-sm font-medium text-white ">
            {t("further-details")}
          </label>
          <textarea
            rows={4}
            value={formState.furtherDetails}
            onChange={(e) =>
              setFormState((old) => ({
                ...old,
                furtherDetails: e.target.value,
              }))
            }
            className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder={t("further-details-placeholder")}
          ></textarea>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              checked={formState.privacyChecked}
              onChange={(e) =>
                setFormState((old) => ({
                  ...old,
                  privacyChecked: e.target.checked,
                }))
              }
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-white "
          >
            {t.rich("read-confirmation", {
              link: (chunks) => (
                <a
                  href={"/"}
                  className={"font-bold text-blue-400 hover:text-accentOrange"}
                >
                  {chunks}
                </a>
              ),
            })}
          </label>
        </div>
        <Button
          disabled={!formValid}
          onClick={() => handleSubmit()}
          bgColor={"#ed8005"}
        >
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}

function validatePhoneNumber(phoneNumber: string | undefined) {
  const regexp =
    /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

  if (!phoneNumber?.length) {
    return true;
  }

  return !!`+${phoneNumber}`.match(regexp);
}
