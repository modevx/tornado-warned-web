export const NWS_ALERT_TYPES = [
  "911 Telephone Outage Emergency",
  "Administrative Message",
  "Air Quality Alert",
  "Air Stagnation Advisory",
  "Arroyo And Small Stream Flood Advisory",
  "Ashfall Advisory",
  "Ashfall Warning",
  "Avalanche Advisory",
  "Avalanche Warning",
  "Avalanche Watch",
  "Beach Hazards Statement",
  "Blizzard Warning",
  "Blizzard Watch",
  "Blowing Dust Advisory",
  "Blowing Dust Warning",
  "Brisk Wind Advisory",
  "Child Abduction Emergency",
  "Civil Danger Warning",
  "Civil Emergency Message",
  "Coastal Flood Advisory",
  "Coastal Flood Statement",
  "Coastal Flood Warning",
  "Coastal Flood Watch",
  "Dense Fog Advisory",
  "Dense Smoke Advisory",
  "Dust Advisory",
  "Dust Storm Warning",
  "Earthquake Warning",
  "Evacuation - Immediate",
  "Excessive Heat Warning",
  "Excessive Heat Watch",
  "Extreme Cold Warning",
  "Extreme Cold Watch",
  "Extreme Fire Danger",
  "Extreme Wind Warning",
  "Fire Warning",
  "Fire Weather Watch",
  "Flash Flood Statement",
  "Flash Flood Warning",
  "Flash Flood Watch",
  "Flood Advisory",
  "Flood Statement",
  "Flood Warning",
  "Flood Watch",
  "Freeze Warning",
  "Freeze Watch",
  "Freezing Fog Advisory",
  "Freezing Rain Advisory",
  "Freezing Spray Advisory",
  "Frost Advisory",
  "Gale Warning",
  "Gale Watch",
  "Hard Freeze Warning",
  "Hard Freeze Watch",
  "Hazardous Materials Warning",
  "Hazardous Seas Warning",
  "Hazardous Seas Watch",
  "Hazardous Weather Outlook",
  "Heat Advisory",
  "Heavy Freezing Spray Warning",
  "Heavy Freezing Spray Watch",
  "High Surf Advisory",
  "High Surf Warning",
  "High Wind Warning",
  "High Wind Watch",
  "Hurricane Force Wind Warning",
  "Hurricane Force Wind Watch",
  "Hurricane Local Statement",
  "Hurricane Warning",
  "Hurricane Watch",
  "Hydrologic Advisory",
  "Hydrologic Outlook",
  "Ice Storm Warning",
  "Lake Effect Snow Advisory",
  "Lake Effect Snow Warning",
  "Lake Effect Snow Watch",
  "Lake Wind Advisory",
  "Lakeshore Flood Advisory",
  "Lakeshore Flood Statement",
  "Lakeshore Flood Warning",
  "Lakeshore Flood Watch",
  "Law Enforcement Warning",
  "Local Area Emergency",
  "Low Water Advisory",
  "Marine Weather Statement",
  "Nuclear Power Plant Warning",
  "Radiological Hazard Warning",
  "Red Flag Warning",
  "Rip Current Statement",
  "Severe Thunderstorm Warning",
  "Severe Thunderstorm Watch",
  "Severe Weather Statement",
  "Shelter In Place Warning",
  "Short Term Forecast",
  "Small Craft Advisory",
  "Small Craft Advisory For Hazardous Seas",
  "Small Craft Advisory For Rough Bar",
  "Small Craft Advisory For Winds",
  "Small Stream Flood Advisory",
  "Snow Squall Warning",
  "Special Marine Warning",
  "Special Weather Statement",
  "Storm Surge Warning",
  "Storm Surge Watch",
  "Storm Warning",
  "Storm Watch",
  "Test",
  "Tornado Warning",
  "Tornado Watch",
  "Tropical Depression Local Statement",
  "Tropical Storm Local Statement",
  "Tropical Storm Warning",
  "Tropical Storm Watch",
  "Tsunami Advisory",
  "Tsunami Warning",
  "Tsunami Watch",
  "Typhoon Local Statement",
  "Typhoon Warning",
  "Typhoon Watch",
  "Urban And Small Stream Flood Advisory",
  "Volcano Warning",
  "Wind Advisory",
  "Wind Chill Advisory",
  "Wind Chill Warning",
  "Wind Chill Watch",
  "Winter Storm Warning",
  "Winter Storm Watch",
  "Winter Weather Advisory",
];

export const ALERT_TYPES = {
  AIR_QUALITY_ALERT: "Air Quality Alert",
  IMMEDIATE_EVAC: "Evacuation - Immediate",
  EXTREME_FIRE_DANGER: "Extreme Fire Danger",
  SHORT_TERM_FORECAST: "Short Term Forecast",
  TEST: "Test",
  ADVISORY: {
    AIR_STAGNATION: "Air Stagnation Advisory",
    ARROYO_AND_SMALL_STREAM_FLOOD: "Arroyo And Small Stream Flood Advisory",
    ASHFALL: "Ashfall Advisory",
    AVALANCHE: "Avalanche Advisory",
    BLOWING_DUST: "Blowing Dust Advisory",
    BRISK_WIND: "Brisk Wind Advisory",
    COASTAL_FLOOD: "Coastal Flood Advisory",
    DENSE_FOG: "Dense Fog Advisory",
    DENSE_SMOKE: "Dense Smoke Advisory",
    DUST: "Dust Advisory",
    FLOOD: "Flood Advisory",
    FREEZING_FOG: "Freezing Fog Advisory",
    FREEZING_RAIN: "Freezing Rain Advisory",
    FREEZING_SPRAY: "Freezing Spray Advisory",
    FROST: "Frost Advisory",
    HEAT: "Heat Advisory",
    HIGH_SURF: "High Surf Advisory",
    HYDROLOGIC: "Hydrologic Advisory",
    LAKE_EFFECT_SNOW: "Lake Effect Snow Advisory",
    LAKE_WIND: "Lake Wind Advisory",
    LAKESHORE_FLOOD: "Lakeshore Flood Advisory",
    LOW_WATER: "Low Water Advisory",
    SMALL_CRAFT: "Small Craft Advisory",
    SMALL_CRAFT_HAZARDOUD_SEAS: "Small Craft Advisory For Hazardous Seas",
    SMALL_CRAFT_ROUGH_BAR: "Small Craft Advisory For Rough Bar",
    SMALL_CRAFT_WINDS: "Small Craft Advisory For Winds",
    SMALLL_STREAM_FLOOD: "Small Stream Flood Advisory",
    TSUNAMI: "Tsunami Advisory",
    URBAN_SMALL_STREAM: "Urban And Small Stream Flood Advisory",
    WIND: "Wind Advisory",
    WIND_CHILL: "Wind Chill Advisory",
    WINTER_WEATHER: "Winter Weather Advisory",
  },
  EMERGENCY: {
    _911_PHONE_OUTAGE: "911 Telephone Outage Emergency",
    CHILD_ABDUCTION: "Child Abduction Emergency",
    LOCAL_AREA: "Local Area Emergency",
  },
  MESSAGE: {
    ADMIN: "Administrative Message",
    CIVIL_EMERGENCY: "Civil Emergency Message",
  },
  OUTLOOK: {
    HAZARDOUS_WX: "Hazardous Weather Outlook",
    HYDROLOGIC: "Hydrologic Outlook",
  },
  // STATEMENT: {
  // 	"Beach Hazards Statement",
  // "Coastal Flood Statement",
  // "Flash Flood Statement",
  // "Flood Statement",
  // "Hurricane Local Statement",
  // "Lakeshore Flood Statement",
  // "Marine Weather Statement",
  // "Rip Current Statement",
  // "Severe Weather Statement",
  // "Special Weather Statement",
  // "Tropical Depression Local Statement",
  // "Tropical Storm Local Statement",
  // "Typhoon Local Statement",
  // },
  // WARNING: {
  // 	"Ashfall Warning",
  // "Avalanche Warning",
  // "Blizzard Warning",
  // "Blowing Dust Warning",
  // "Civil Danger Warning",
  // "Coastal Flood Warning",
  // "Dust Storm Warning",
  // "Earthquake Warning",
  // "Excessive Heat Warning",
  // "Extreme Cold Warning",
  // "Extreme Wind Warning",
  // "Fire Warning",
  // "Flash Flood Warning",
  // "Flood Warning",
  // "Freeze Warning",
  // "Gale Warning",
  // "Hard Freeze Warning",
  // "Hazardous Materials Warning",
  // "Hazardous Seas Warning",
  // "High Surf Warning",
  // "High Wind Warning",
  // "Heavy Freezing Spray Warning",
  // "Hurricane Warning",
  // "Ice Storm Warning",
  // "Law Enforcement Warning",
  // "Lakeshore Flood Warning",
  // "Lake Effect Snow Warning",
  // "Nuclear Power Plant Warning",
  // "Radiological Hazard Warning",
  // "Severe Thunderstorm Warning",
  // "Hurricane Force Wind Warning",
  // "Red Flag Warning",
  // "Shelter In Place Warning",
  // "Snow Squall Warning",
  // "Special Marine Warning",
  // "Storm Surge Warning",
  // "Storm Warning",
  // "Tornado Warning",
  // "Tropical Storm Warning",
  // "Tsunami Warning",
  // "Typhoon Warning",
  // "Volcano Warning",
  // "Wind Chill Warning",
  // "Winter Storm Warning",
  // },
  // WATCH: {
  // 	"Avalanche Watch",
  // "Blizzard Watch",
  // "Coastal Flood Watch",
  // "Excessive Heat Watch",
  // "Extreme Cold Watch",
  // "Fire Weather Watch",
  // "Flash Flood Watch",
  // "Flood Watch",
  // "Freeze Watch",
  // "Gale Watch",
  // "Hard Freeze Watch",
  // "Hazardous Seas Watch",
  // "Heavy Freezing Spray Watch",
  // "High Wind Watch",
  // "Hurricane Force Wind Watch",
  // "Hurricane Watch",
  // "Lake Effect Snow Watch",
  // "Lakeshore Flood Watch",
  // "Severe Thunderstorm Watch",
  // "Storm Surge Watch",
  // "Storm Watch",
  // "Tornado Watch",
  // "Tropical Storm Watch",
  // "Tsunami Watch",
  // "Typhoon Watch",
  // "Wind Chill Watch",
  // "Winter Storm Watch",
  // },
};
