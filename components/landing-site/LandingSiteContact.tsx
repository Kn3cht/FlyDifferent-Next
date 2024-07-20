import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import {
  MAIL_ADDRESS,
  PHONE_NUMBER,
  SANITIZED_PHONE_NUMBER,
} from "@/data/constants";

export default function LandingSiteContact() {
  const t = useTranslations("LandingSite");

  return (
    <Card title={t("contact.title")}>
      <ul>
        <li>
          <a
            key={"address"}
            href={
              "https://www.google.it/maps/place/39040+Kastelruth,+Bozen/@46.5660031,11.5571737,16z/data=!3m1!4b1!4m5!3m4!1s0x47780cc3322f4295:0xd3d385fd2771ddfc!8m2!3d46.5681349!4d11.5639653?hl=de"
            }
          >
            Kleinmichlstr. Nr. 1 I-39040 Kastelruth
          </a>
        </li>
        <li>
          <a key={"phone"} href={`tel:${SANITIZED_PHONE_NUMBER}`}>
            {t("contact.phone", { number: PHONE_NUMBER })}
          </a>
        </li>
        <li>
          <a
            key={"whatsapp"}
            href={`https://api.whatsapp.com/send?phone=${SANITIZED_PHONE_NUMBER}`}
            target={"_blank"}
          >
            WhatsApp
          </a>
        </li>
        <li>
          <a key={"mail"} href={`mailto:${MAIL_ADDRESS}`}>
            {t("contact.email", { mail: MAIL_ADDRESS })}
          </a>
        </li>
      </ul>
    </Card>
  );
}
