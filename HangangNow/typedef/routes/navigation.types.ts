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
  findPWDone: undefined;
  mainTab: undefined;
};

export type MainTabParamListTypes = {
  home: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
