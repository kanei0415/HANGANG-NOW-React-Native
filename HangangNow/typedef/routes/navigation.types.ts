import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MbtiTypes } from '@typedef/components/Mbti/mbti.types';
import { TripFindRequestBodyType } from '@typedef/components/Trip/trip.types';

export type MainStackParamListTypes = {
  login: undefined;
  termDetail: undefined;
  signup: undefined;
  signupStep2: undefined;
  signupStep3: undefined;
  signupDone: {
    name: string;
  };
  findID: undefined;
  findIDStep2: undefined;
  findPW: undefined;
  findPWDone: {
    email: string;
  };
  mainTab: undefined;
  diary: undefined;
  mbti: undefined;
  mbtiInspect: undefined;
  mbtiResult: {
    result: MbtiTypes;
    type: 'result' | 'shared';
  };
  setting: undefined;
  calendarDateDetail: {
    date: number;
  };
  deleteAccount: undefined;
  deleteAccountStep2: undefined;
  leaflet: undefined;
  hangangDetail: {
    park: string;
  };
  partnersEnroll: undefined;
  mapfind: undefined;
  parkfind: undefined;
  tripFind: undefined;
  tripFindResult: {
    body: TripFindRequestBodyType;
  };
  tripFindDetail: {
    id: number;
  };
  event: undefined;
  eventDetail: {
    id: number;
  };
  scrap: undefined;
  facilityMap: {
    name: string;
    id: number;
  };
  term: {
    title: string;
    content: string;
  };
};

export type MainTabParamListTypes = {
  hangangNow: undefined;
  trip: undefined;
  home: undefined;
  facility: undefined;
  mypage: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
