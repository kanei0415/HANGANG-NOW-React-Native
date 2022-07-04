import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamListTypes = {
  login: undefined;
  signup: undefined;
  signupStep2: undefined;
  signupStep3: undefined;
  findID: undefined;
  findIDStep2: undefined;
  findIDStep3: undefined;
};

export type MainTabParamListTypes = {
  home: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
