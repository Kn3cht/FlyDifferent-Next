"use client";

import BookingForm from "@/components/forms/BookingForm";
import React from "react";
import { useTranslations } from "next-intl";
import { Flight } from "@/data/flights/types";

export default function BookingSection({ flight }: { flight?: Flight }) {
  const t = useTranslations();

  return (
    <div className={"bg-primary py-6"}>
      <div
        className={
          "w-screen max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        }
      >
        <div className={" flex flex-col gap-8"}>
          <div className={"w-full text-center"}>
            <h2 className={"text-2xl text-white"}>{t("booking-form")}</h2>
          </div>
          <BookingForm flightKey={flight?.key} />
        </div>
      </div>
    </div>
  );
}
