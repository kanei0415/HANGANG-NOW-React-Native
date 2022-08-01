import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MbtiResultTypes } from '@typedef/components/Mbti/mbti.types';

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
    prev: string;
  };
};

export type MainTabParamListTypes = {
  home: undefined;
  mypage: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
