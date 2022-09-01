import images from '@assets/images';
import { ImageSourcePropType } from 'react-native';
import { ParkTypes } from '../Home/home.types';

export type MbtiTypes =
  | 'INFLUENCER'
  | 'EXCITED'
  | 'ARTIST'
  | 'SOCIAL_DISTANCING'
  | 'ACTIVIST'
  | 'PLANNER'
  | 'EXPLORER'
  | 'STARGAZER';

export type MbtiDataTypes = {
  name: string;
  label: string;
  image: ImageSourcePropType;
  parks: ParkTypes[];
};

export const MBTI_DATA_TABLE: { [k: string]: MbtiDataTypes } = {
  INFLUENCER: {
    name: '인플루언서 유형',
    label: '내가 주인공이야~ 인플루언서 유형',
    image: images.components.Mbti.icon1,
    parks: ['뚝섬한강공원', '망원한강공원', '잠원한강공원'],
  },
  EXCITED: {
    name: '흥부자 유형',
    label: '매일 어깨가 들썩들썩! 흥부자 유형',
    image: images.components.Mbti.icon2,
    parks: ['여의도한강공원', '뚝섬한강공원', '잠실한강공원'],
  },
  ARTIST: {
    name: '예술가 유형',
    label: '비가 내리고~ 음악이 흐르면~ 예술가 유형',
    image: images.components.Mbti.icon3,
    parks: ['난지한강공원', '반포한강공원', '뚝섬한강공원'],
  },
  SOCIAL_DISTANCING: {
    name: '사회적 거리두기 유형',
    label: '여기는 나만의 공간! 사회적 거리두기 유형',
    image: images.components.Mbti.icon4,
    parks: ['이촌한강공원', '난지한강공원', '광나루한강공원'],
  },
  ACTIVIST: {
    name: '헛!둘!헛!둘! 활동가 유형',
    label: '활동가 유형',
    image: images.components.Mbti.icon5,
    parks: ['잠원한강공원', '반포한강공원', '광나루한강공원'],
  },
  PLANNER: {
    name: '하나부터 열까지 꼼꼼한 계획파 유형',
    label: '계획파 유형',
    image: images.components.Mbti.icon6,
    parks: ['여의도한강공원', '잠원한강공원', '반포한강공원'],
  },
  EXPLORER: {
    name: '탐구왕 유형',
    label: '호기심 가득한,탐구왕 유형',
    image: images.components.Mbti.icon7,
    parks: ['여의도한강공원', '양화한강공원', '광나루한강공원'],
  },
  STARGAZER: {
    name: '몽상가 유형',
    label: '따뜻한 감성의 소유자, 몽상가 유형',
    image: images.components.Mbti.icon8,
    parks: ['잠실한강공원', '뚝섬한강공원', '망원한강공원'],
  },
};

export const MBTI_LABEL_TABLE = {
  INFLUENCER: '내가 주인공이야~ 인플루언서 유형',
  EXCITED: '매일 어깨가 들썩들썩! 흥부자 유형',
  ARTIST: '비가 내리고~ 음악이 흐르면~ 예술가 유형',
  SOCIAL_DISTANCING: '여기는 나만의 공간! 사회적 거리두기 유형',
  ACTIVIST: '헛!둘!헛!둘! 활동가 유형',
  PLANNER: '하나부터 열까지 꼼꼼한 계획파 유형',
  EXPLORER: '호기심 가득한,탐구왕 유형',
  STARGAZER: '따뜻한 감성의 소유자, 몽상가 유형',
};

export const MBTI_INSPECT_TO_MBTI: { [k: string]: MbtiTypes } = {
  ACFH: 'INFLUENCER',
  ADEG: 'INFLUENCER',
  ADEH: 'EXCITED',
  ADFH: 'EXCITED',
  BCFH: 'ARTIST',
  BDEH: 'ARTIST',
  BDEG: 'SOCIAL_DISTANCING',
  BDFG: 'SOCIAL_DISTANCING',
  ACEG: 'ACTIVIST',
  BCEG: 'ACTIVIST',
  ACEH: 'PLANNER',
  BCEH: 'PLANNER',
  ACFG: 'EXPLORER',
  ADFG: 'EXPLORER',
  BCFG: 'STARGAZER',
  BDFH: 'STARGAZER',
};

export const calcMbti = (answer: number[]): MbtiTypes => {
  return (
    MBTI_INSPECT_TO_MBTI[
      `${
        ['A', 'B'][
          Math.floor(answer.slice(0, 3).reduce((a, b) => a + b) / 3 + 0.5)
        ]
      }${
        ['C', 'D'][
          Math.floor(answer.slice(3, 6).reduce((a, b) => a + b) / 3 + 0.5)
        ]
      }${
        ['E', 'F'][
          Math.floor(answer.slice(6, 9).reduce((a, b) => a + b) / 3 + 0.5)
        ]
      }${
        ['G', 'H'][
          Math.floor(answer.slice(9, 12).reduce((a, b) => a + b) / 3 + 0.5)
        ]
      }`
    ] || 'ACTIVIST'
  );
};
