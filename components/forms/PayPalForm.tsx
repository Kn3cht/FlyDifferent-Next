import { useTranslations } from "next-intl";

export default function PayPalForm() {
  const t = useTranslations("PayPalForm");

  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="A7AJVBPM4JQYC" />
      <table>
        <tbody>
          <tr>
            <td>
              <input type="hidden" name="on0" value="Unkostenbeitrag" />
              {t("contribution-to-expenses")}
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="1 Tag">{t("1-day")}</option>
                <option value="2 Tage">{t("2-days")}</option>
                <option value="3 Tage">{t("3-days")}</option>
                <option value="Ganzes Jahr">{t("entire-year")}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="hidden" name="currency_code" value="EUR" />
              <input
                type="image"
                src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_buynowCC_LG.gif"
                name="submit"
                alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online."
                // style="width: 212px; height: 57px; float: left;"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
