import { useTranslations } from "next-intl";
import Card from "@/components/Card";

export default function Checklist({ htmlContent }: { htmlContent: string }) {
  const t = useTranslations("LandingSite");

  return (
    <Card title={t("checklist.title")}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Card>
  );
}
