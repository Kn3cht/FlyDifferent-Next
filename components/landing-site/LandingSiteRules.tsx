"use client";

import { useTranslations } from "next-intl";
import Card from "@/components/Card";

export default function LandingSiteRules({
  htmlContent,
}: {
  htmlContent: string;
}) {
  const t = useTranslations("LandingSite");

  return (
    <Card title={t("rules.title")}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Card>
  );
}
