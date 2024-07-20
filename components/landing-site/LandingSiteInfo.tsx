import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import CardImageLeft from "@/components/CardImageLeft";
import LinkButton from "@/components/LinkButton";

export default function LandingSiteInfo({
  htmlContent,
}: {
  htmlContent: string;
}) {
  const t = useTranslations("LandingSite");

  const landingSitePlan = "/landing-site.jpg";

  return (
    <CardImageLeft src={landingSitePlan} title={t("info.title")}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <LinkButton target={"_blank"} href={landingSitePlan}>
        {t("info.download-plan")}
      </LinkButton>
    </CardImageLeft>
  );
}
