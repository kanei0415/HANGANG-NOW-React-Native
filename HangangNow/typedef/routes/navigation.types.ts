import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamListTypes = {
  login: undefined;
  signup: undefined;
  signupStep2:
    | {
        kakaoEmail: string;
      }
    | undefined;
};

export type MainTabParamListTypes = {
  home: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
