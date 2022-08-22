import { MbtiTypes } from '../Mbti/mbti.types';

export type ProfileTypes = {
  id: string;
  loginId: string;
  email: string;
  name: string;
  provider: 'GENERAL' | 'KAKAO';
  memberMBTI: null | MbtiTypes;
  photoUrl: null | string;
  marketing_agree: null | boolean;
  alarm_agree: null | boolean;
};
