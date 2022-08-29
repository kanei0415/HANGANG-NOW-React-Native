import images from '@assets/images';
import { ImageSourcePropType } from 'react-native';

export type HangangNowDataTypes = {
  dust: {
    badderDustGrade: 1 | 2 | 3 | 4;
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
    skyMode: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  };
};

export type WeatherType = 'sun' | 'rain' | 'snow';

export type TemperatureType = 'hot' | 'normal' | 'cold';

export const skymodeToWeather = (skyMode: number): WeatherType => {
  switch (skyMode) {
    case 1:
    case 2:
      return 'sun';

    case 3:
    case 4:
    case 5:
    case 6:
      return 'rain';

    default:
      return 'snow';
  }
};

export const temperatureToTemperature = (
  temperature: number,
): TemperatureType => {
  if (temperature >= 29) {
    return 'hot';
  }

  if (temperature >= 11) {
    return 'normal';
  }

  return 'cold';
};

export const weatherTemperatureToLabelImage = (
  skyMode: WeatherType,
  temperature: TemperatureType,
): [string, ImageSourcePropType] => {
  if (temperature === 'hot') {
    if (skyMode === 'sun') {
      return [SKY_MODE_LABEL[0], SKY_MODE_IMAGE[0]];
    } else {
      return [SKY_MODE_LABEL[1], SKY_MODE_IMAGE[0]];
    }
  }

  if (temperature === 'normal') {
    if (skyMode === 'sun') {
      return [SKY_MODE_LABEL[1], SKY_MODE_IMAGE[1]];
    } else {
      return [SKY_MODE_LABEL[2], SKY_MODE_IMAGE[1]];
    }
  }

  if (skyMode === 'sun') {
    return [SKY_MODE_LABEL[3], SKY_MODE_IMAGE[2]];
  } else {
    return [SKY_MODE_LABEL[4], SKY_MODE_IMAGE[2]];
  }
};

export const SKY_MODE_LABEL = [
  '선크림은 챙기셨나요? 한강의 그늘을 사수하세요',
  '후덥지근한 날! 한강 카페로 가요',
  '한강피크닉하기 너무 좋은 날이에요',
  '날씨만 좋아지면, 바로 돗자리 챙기고 피크닉가요',
  '핫팩은 챙기셨나요? 한강의 칼바람에 대비해요',
  '흰 눈이 내리는 한강으로 가요',
];

export const SKY_MODE_IMAGE = [
  images.components.HangangNow.char1,
  images.components.HangangNow.char2,
  images.components.HangangNow.char3,
];

export type ParkingTypes = {
  address: { sido: string; gu: string; detail: string };
  available_count: number;
  basicCharge: number | null;
  fulldayCharge: string;
  id: number;
  intervalCharge: string;
  local: { localname: string; x_pos: number; y_pos: number };
  name: string;
  total_count: number;
};

export type ParkingMarkerTypes = {
  id: number;
  local: {
    localname: string;
    x_pos: number;
    y_pos: number;
  };
};
