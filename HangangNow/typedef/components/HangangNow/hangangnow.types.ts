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

export type ParkingStateType = 'full' | 'normal' | 'empty';

export type WeatherType = 'sun' | 'rain' | 'snow';

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

export const getLabelImage = (temp: number): [string, ImageSourcePropType] => {
  if (temp < 5) {
    return [
      '핫팩은 챙기셨나요? 한강의 칼바람에 대비해요!',
      images.components.HangangNow.char1,
    ];
  }

  if (temp < 15) {
    return [
      '한강에서 야외운동하기 좋은 날이에요.',
      images.components.HangangNow.char2,
    ];
  }

  if (temp < 20) {
    return [
      '시원한 바람과 함께 한강 산책 어때요?',
      images.components.HangangNow.char3,
    ];
  }

  if (temp < 25) {
    return [
      '한강 피크닉하기 너무 좋은 날이에요!',
      images.components.HangangNow.char4,
    ];
  }

  if (temp < 30) {
    return [
      '한강을 바라보며 시원한 음료 한 잔하기 좋은 날이에요',
      images.components.HangangNow.char5,
    ];
  }

  return [
    '선크림은 챙기셨나요? 한강의 그늘을 사수하세요!',
    images.components.HangangNow.char6,
  ];
};

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
