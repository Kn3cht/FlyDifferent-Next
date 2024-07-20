import Card from "@/components/Card";
import React from "react";
import { useTranslations } from "next-intl";

export default function Gear() {
  const t = useTranslations("Contact");

  return (
    <Card title={t("gear.title")}>
      <h4 className={"text-gray-600 font-bold mb-4"}>{t("gear.subtitle")}</h4>

      <p className={"text-gray-800"}>{t("gear.content")}</p>
    </Card>
  );
}
