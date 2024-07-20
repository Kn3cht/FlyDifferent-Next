import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import { IBAN } from "@/data/constants";
import PayPalForm from "@/components/forms/PayPalForm";

export default function UsageFee() {
  const t = useTranslations("LandingSite");

  return (
    <Card title={t("usage-fee.title")}>
      <div className={"flex flex-col gap-4"}>
        <p>{t("usage-fee.para-1")}</p>
        <p>{t("usage-fee.para-2")}</p>
        <hr />
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0"
          }
        >
          <div className={"flex flex-col justify-center"}>
            <h3 className={"text-xl mb-4"}>PayPal</h3>
            <div className={"flex gap-8"}>
              <img alt="" src="/paypal.svg" width="85" height="85" />
              <PayPalForm />
            </div>
          </div>
          <div className={"flex flex-col justify-center"}>
            <h3 className={"text-xl mb-4"}>{t("usage-fee.bank-transfer")}</h3>
            <p className={"font-mono text-xs"}>{IBAN}</p>
            <p className={"font-mono text-xs"}>
              {t("usage-fee.purpose-of-use")}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
