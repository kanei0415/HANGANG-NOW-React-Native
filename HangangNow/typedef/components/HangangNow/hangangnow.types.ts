export type HangangNowDataTypes = {
  dust: {
    badderDustGrade: number;
    dust10Grade: number;
    dust25Grade: number;
  };
  id: number;
  lastModifiedTime: string;
  sunMoonRiseSet: {
    moonRise: string;
    sunRise: string;
    sunSet: string;
  };
  temperature: number;
  weather: {
    maxRainPercent: number;
    skyMode: number;
  };
};
