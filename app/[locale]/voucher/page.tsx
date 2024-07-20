"use client";

import PageTitle from "@/components/layout/PageTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Card from "@/components/Card";
import PageSection from "@/components/layout/PageSection";
import LinkButton from "@/components/LinkButton";
import { buildNavigationLink } from "@/routing/localized-routing";
import BookingForm from "@/components/forms/BookingForm";

export default function Voucher() {
  const t = useTranslations("Voucher");
  return (
    <div>
      <div className="w-screen max-w-6xl pt-4 px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 pb-4">
        <PageTitle
          title={t("title")}
          subtitle={t("subtitle")}
          bgColor={"darkred"}
          color={"white"}
        />
      </div>
      <PageSection>
        <Card title={t("card-2.title")}>
          <p className={"text-gray-600"}>{t("card-2.description-1")}</p>
          <h3 className={"text-black text-xl mt-6 mb-2"}>
            {t("card-2.subtitle")}
          </h3>
          <p className={"text-gray-600"}>{t("card-2.description-2")}</p>

          <LinkButton href={"#request"}>{t("request")}</LinkButton>
        </Card>
      </PageSection>
      <PageSection
        title={t("how-it-works")}
        bgColor={"#07427d"}
        color={"white"}
      >
        <BookingForm isVoucher={true} />

        <div className={"flex flex-col md:flex-row gap-8 mt-8"}>
          <div
            className={
              "md:flex-shrink w-full h-[226px] relative bg-gray-200 rounded"
            }
          >
            <Image
              src={"/voucher-sample.png"}
              alt={"FlyDifferent Voucher"}
              layout="fill"
              objectFit={"contain"}
              priority={true}
            />
          </div>
          <div className={"md:flex-4 h-full"}>
            <Card title={t("card-1.title")}>
              <p className={"text-gray-600 mb-4"}>{t("card-1.content")}</p>
              <p className={"text-gray-600"}>{t("card-1.content-2")}</p>
            </Card>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
