import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamListTypes = {
  login: undefined;
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
    prevUid: string | null;
    result: string | null;
  };
  setting: undefined;
  calendarDateDetail: {
    date: number;
  };
  deleteAccount: undefined;
  deleteAccountStep2: undefined;
  leaflet: undefined;
  hangangDetail: undefined;
  partnersEnroll: undefined;
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
