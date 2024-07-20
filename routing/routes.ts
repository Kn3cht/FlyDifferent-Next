interface Route {
  nameKey: string;
  path: string;
  visibleInHeader?: boolean;
  primary?: boolean;
}

export const additionalRoutes: Route[] = [
  {
    nameKey: "imprint",
    path: "/imprint",
  },
  {
    nameKey: "privacy",
    path: "/data-privacy",
  },
];

export const mainRoutes: Route[] = [
  {
    nameKey: "home",
    path: "/",
  },
  {
    nameKey: "flights",
    path: "/#index",
    visibleInHeader: true,
  },
  {
    nameKey: "request",
    path: "/#booking-form",
    visibleInHeader: true,
    primary: true,
  },
  {
    nameKey: "voucher",
    path: "/voucher",
    visibleInHeader: true,
  },
  {
    nameKey: "gallery",
    path: "/gallery",
    visibleInHeader: true,
  },
  {
    nameKey: "contact",
    path: "/contact",
    visibleInHeader: true,
  },
  /*  {
    nameKey: "landing-site",
    path: "/landing-site",
    visibleInHeader: true,
  },*/
];
