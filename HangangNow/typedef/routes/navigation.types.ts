import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LogInStackParamListTypes = {
  emailLogIn: undefined;
  emailSignUp: undefined;
  kakaoLogIn: undefined;
  findAccount: undefined;
};

export type KakaoLogInStackParamListTypes = {
  logIn: undefined;
  signUp: undefined;
};

export type EmailSignUpStackParamListTypes = {
  email: undefined;
  password: undefined;
  termsAndConditions: undefined;
};

export type FindAccountStackParamListTypes = {
  findIdByPersonalInfo: undefined;
  findPasswordByEmail: undefined;
};

export type MainTabParamListTypes = {
  surroundingFacility: undefined;
  outing: undefined;
  home: undefined;
  hangangNow: undefined;
  myPage: undefined;
};

export type SurroundingFacilityParamListTypes = {
  surroundingFacility: undefined;
  convenientFacility: undefined;
  foodFacility: undefined;
  sportsFacility: undefined;
};

export type OutingParamListTypes = {
  outing: undefined;
  courseRecommendation: undefined;
  placeRecommendation: undefined;
};

export type HomeParamListTypes = {
  home: undefined;
  eventBanner: undefined;
  flyerBanner: undefined;
  hangangRecommendation: undefined;
};

export type HangangNowParamListTypes = {
  hangangNow: undefined;
  parkInfo: undefined;
  clothesByWeather: undefined;
  hangangMap: undefined;
};

export type MyPageParamListTypes = {
  myPage: undefined;
  hangangTypeCheck: undefined;
  placeScrap: undefined;
  calendar: undefined;
};

export type LogInStackNavigationTypes =
  NativeStackNavigationProp<LogInStackParamListTypes>;

export type KakaoStackNavigationTypes =
  NativeStackNavigationProp<KakaoLogInStackParamListTypes>;

export type EmailSignUpStackNavigationTypes =
  NativeStackNavigationProp<EmailSignUpStackParamListTypes>;

export type FindAccountStackNavigationTypes =
  NativeStackNavigationProp<FindAccountStackParamListTypes>;

export type MainTabNavigationTypes =
  NativeStackNavigationProp<MainTabParamListTypes>;

export type SurroundingFacilityStackNavigationTypes =
  NativeStackNavigationProp<SurroundingFacilityParamListTypes>;

export type OutingStackNavigationTypes =
  NativeStackNavigationProp<OutingParamListTypes>;

export type HomeStackNavigationTypes =
  NativeStackNavigationProp<HomeParamListTypes>;

export type HangangNowStackNavigationTypes =
  NativeStackNavigationProp<HangangNowParamListTypes>;

export type MyPageStackNavigationTypes =
  NativeStackNavigationProp<MyPageParamListTypes>;
