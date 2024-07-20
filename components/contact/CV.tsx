import Card from "@/components/Card";
import React from "react";
import { useTranslations } from "next-intl";

export default function CV({ content }: { content: string }) {
  const t = useTranslations("Contact");

  return (
    <Card title={t("cv")}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  );
}
