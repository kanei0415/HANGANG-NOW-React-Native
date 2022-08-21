export const TRIP_COMPANION_OPTIONS: TripFindCompanionType[] = [
  '가족',
  '친구',
  '연인',
  '혼자',
];

export type TripFindCompanionType = '가족' | '친구' | '연인' | '혼자';

export const TRIP_PLACE_OPTIONS: TripFindplaceType[] = [
  '강서',
  '마포',
  '영등포',
  '동작',
  '용산',
  '서초',
  '성동구',
  '송파',
  '강동',
];

export type TripFindplaceType =
  | '강서'
  | '마포'
  | '영등포'
  | '동작'
  | '용산'
  | '서초'
  | '성동구'
  | '송파'
  | '강동';

export const TRIP_THEME_OPTIONS: TripThemeType[] = [
  '산책',
  '자전거',
  '예술',
  '생태 체험',
  '역사',
];

export type TripThemeType = '산책' | '자전거' | '예술' | '생태 체험' | '역사';

export type TripFindRequestBodyType = {
  companion: TripFindCompanionType | null;
  places: TripFindplaceType[];
  themes: TripThemeType[];
  x_pos: number | null;
  y_pos: number | null;
};

export type TripFindResultTypes = {
  courses: {
    course: string[];
    id: number;
    length: number;
    name: string;
    startPlaceName: string;
  }[];
  matchingSuccess: true;
  places: {
    address: {
      detail: string;
      gu: string;
      sido: string;
    };
    id: number;
    local: {
      localname: string;
      x_pos: number;
      y_pos: number;
    };
    name: string;
  }[];
};

export type TripFindDetailTypes = {
  course: string[];
  id: number;
  length: number;
  name: string;
  startPlaceName: string;
};