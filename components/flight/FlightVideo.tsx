import Image from "next/image";
import { buildNavigationLink } from "@/routing/localized-routing";
import Card from "@/components/Card";
import { useLocale } from "@/providers/LocaleProvider/LocaleProvider";
import { useTranslations } from "next-intl";
import { FLIGHTS_NAMESPACE } from "@/data/flights";
import LinkButton from "@/components/LinkButton";

export default function FlightVideo() {
  const { locale } = useLocale();

  const t = useTranslations(FLIGHTS_NAMESPACE);

  const href = buildNavigationLink(locale, "/gallery");

  return (
    <a href={href}>
      <Card
        title={t("foto-and-video.title")}
        image={
          <div className={"w-full h-[180px] relative"}>
            <Image
              className="rounded-t-lg"
              layout="fill"
              objectFit="contain"
              src="/gopro.png"
              alt="gopro"
            />
          </div>
        }
      >
        <p className="font-normal text-gray-500">
          {t("foto-and-video.description")}
        </p>
        <LinkButton href={href}>{t("foto-and-video.gallery")}</LinkButton>
      </Card>
    </a>
  );
}
