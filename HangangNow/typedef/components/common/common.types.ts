export type ProfileTypes = {
  id: string;
  loginId: string;
  email: string;
  name: string;
  provider: 'GENERAL' | 'KAKAO';
  memberMBTI: null | string;
  photoUrl: null | string;
  marketing_agree: null | boolean;
  alarm_agree: null | boolean;
};

export type MBTITypes =
  | 'INFLUENCER'
  | 'INSIDER'
  | 'ARTIST'
  | 'SOCIAL_DISTANCING'
  | 'ACTIVIST';
