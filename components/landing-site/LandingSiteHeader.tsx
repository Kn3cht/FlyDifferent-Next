import { useTranslations } from "next-intl";
import PageTitle from "@/components/layout/PageTitle";

export default function LandingSiteHeader() {
  const t = useTranslations("LandingSite");

  return (
    <PageTitle
      title={t("title")}
      subtitle={t("subtitle")}
      bgColor={"#343a40"}
      color={"white"}
    />
  );
}
