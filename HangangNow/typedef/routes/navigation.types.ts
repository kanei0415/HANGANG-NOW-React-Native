import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamListTypes = {
  // account
  emailLogIn: undefined;
  emailSignUp: undefined;
  kakaoLogIn: undefined;
  findAccount: undefined;

  // emailSignUp
  email: undefined;
  password: undefined;
  termsAndConditions: undefined;

  // FindAccount
  findIdByPersonalInfo: undefined;
  findPasswordByEmail: undefined;

  // mainTab
  mainTab: undefined;

  // surroundingFacility
  surroundingFacility: undefined;
  convenientFacility: undefined;
  foodFacility: undefined;
  sportsFacility: undefined;

  // outing
  outing: undefined;
  courseRecommendation: undefined;
  placeRecommendation: undefined;

  // home
  home: undefined;
  eventBanner: undefined;
  flyerBanner: undefined;
  hangangRecommendation: undefined;

  // hangangNow
  hangangNow: undefined;
  parkInfo: undefined;
  clothesByWeather: undefined;
  hangangMap: undefined;

  // myPage
  myPage: undefined;
  hangangTypeCheck: undefined;
  placeScrap: undefined;
  calendar: undefined;
};

export type MainTabParamListTypes = {
  surroundingFacility: undefined;
  outing: undefined;
  home: undefined;
  hangangNow: undefined;
  myPage: undefined;
};

export type MainStackNavigationTypes =
  NativeStackNavigationProp<MainStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;
