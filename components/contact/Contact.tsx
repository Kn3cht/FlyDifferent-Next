import {
  MAIL_ADDRESS,
  PHONE_NUMBER,
  SANITIZED_PHONE_NUMBER,
  TELEGRAM_USERNAME,
} from "@/data/constants";
import Card from "@/components/Card";
import React from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <Card title={t("contact")}>
      <div>
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
              {t("phone", { number: PHONE_NUMBER })}
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
            <a
              key={"telegram"}
              href={`https://t.me/${TELEGRAM_USERNAME}}`}
              target={"_blank"}
            >
              Telegram
            </a>
          </li>
          <li>
            <a key={"mail"} href={`mailto:${MAIL_ADDRESS}`}>
              {t("email", { mail: MAIL_ADDRESS })}
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
}
