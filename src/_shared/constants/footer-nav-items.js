import {
  NOAA,
  NATIONAL_WEATHER_SERVICE,
  STORM_PREDICTION_CENTER,
} from "_shared/constants/urls";

export const FOOTER_NAV_ITEMS = [
  { title: "BE PREPARED", links: [{ label: "", href: "" }] },
  { title: "STORM CHASING", links: [{ label: "", href: "" }] },
  {
    title: "DEVELOPERS",
    links: [
      {
        label: "National Weather Service API",
        href: NATIONAL_WEATHER_SERVICE.Api_Web_Service,
      },
      {
        label: "National Weather Service Cloud Services",
        href: NATIONAL_WEATHER_SERVICE.Gis_Cloud_Web_Services,
      },
      {
        label: "NOAA Data Access",
        href: NOAA.Data_Access,
      },
      {
        label: "Storm Prediction Center Forecast Products",
        href: STORM_PREDICTION_CENTER.Forecast_Products,
      },
    ],
  },
];
