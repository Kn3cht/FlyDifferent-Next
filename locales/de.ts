import flights from "./flights/de";
import bookingForm from "./booking-form/de";
import footer from "./footer/de";
import routes from "./routes/de";
import voucher from "./voucher/de";
import gallery from "./gallery/de";
import home from "./home/de";
import contact from "./contact/de";
import imprintPrivacy from "./imprint-privacy/de";
import landingSite from "./landing-site/de";
import payPalForm from "./pay-pal-form/de";

export default {
  welcome: "Willkommen",
  "booking-form": "Anfrageformular für Ihren Tandemflug",
  ...flights,
  ...bookingForm,
  ...footer,
  ...routes,
  ...voucher,
  ...gallery,
  ...home,
  ...contact,
  ...imprintPrivacy,
  ...landingSite,
  ...payPalForm,
};
