import Card from "@/components/Card";
import React from "react";
import { useTranslations } from "next-intl";

export default function Qualifications() {
  const t = useTranslations("Contact");

  return (
    <Card title={t("qualifications.title")}>
      <h4 className={"text-gray-600 font-bold mb-4"}>
        {t("qualifications.subtitle")}
      </h4>

      <p className={"text-gray-800"}>{t("qualifications.content")}</p>
    </Card>
  );
}
