import CardImageLeft from "@/components/CardImageLeft";
import React from "react";
import { useTranslations } from "next-intl";

export default function Pilot() {
  const t = useTranslations("Contact");

  return (
    <CardImageLeft title={t("pilot")} src={"/ruben.jpg"}>
      <div>
        <div className={"mb-2"}>{t("trust")}</div>
        <div className={"italic mb-1"}>{t("mission")}</div>
        <div>- Ruben</div>
      </div>
    </CardImageLeft>
  );
}
