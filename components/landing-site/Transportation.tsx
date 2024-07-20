import { useTranslations } from "next-intl";
import Card from "@/components/Card";

export default function Transportation() {
  const t = useTranslations("LandingSite");

  return <Card title={t("bus.title")}>{t("bus.content")}</Card>;
}
