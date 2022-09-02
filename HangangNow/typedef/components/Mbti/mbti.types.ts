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
  subLabel: string;
  chars: string[];
};

export const MBTI_DATA_TABLE: { [k: string]: MbtiDataTypes } = {
  INFLUENCER: {
    name: '인플루언서 유형',
    label: '내가 주인공이야~ 인플루언서 유형',
    image: images.components.Mbti.icon1,
    parks: ['뚝섬한강공원', '망원한강공원', '잠원한강공원'],
    subLabel: '순간을 기록하고 사진찍는 것을 좋아하는 당신!',
    chars: [
      '1. 내가 주인공이라 하고 싶은 것은 다 하고 살아야 해요.',
      '2. 어딜 가도 기왕이면 예쁜 곳으로 가길 원해요.',
      '3. 단기 암기력이 높아 벼락치기를 꽤나 잘해요.',
      '4. 눈치는 많이 보지만, 눈치 없이 행동해요!',
    ],
  },
  EXCITED: {
    name: '흥부자 유형',
    label: '매일 어깨가 들썩들썩! 흥부자 유형',
    image: images.components.Mbti.icon2,
    parks: ['여의도한강공원', '뚝섬한강공원', '잠실한강공원'],
    subLabel: '톡톡 튀는 매력으로 사람들을 즐겁게 해주는 당신!',
    chars: [
      '1. 다양한 사람들이랑 어울리고 싶고, 뭐든 참여하고 싶어요.',
      '2. 어색한 분위기는 싫어요! 항상 내가 먼저 말을 터요.',
      '3. 할 일을 미루기는 하지만, 대충은 못하는 성격이에요.',
      '4. 가끔 이유 없이 사람들을 만나고 싶을 때가 있어요.',
    ],
  },
  ARTIST: {
    name: '예술가 유형',
    label: '비가 내리고~ 음악이 흐르면~ 예술가 유형',
    image: images.components.Mbti.icon3,
    parks: ['난지한강공원', '반포한강공원', '뚝섬한강공원'],
    subLabel: '감성을 빼면 시체, 아름다운 것들을 사랑하는 당신!',
    chars: [
      '1. 남들을 따라 사는 건 싫어요. 창의적으로 내 삶을 살아요. ',
      '2. 약간의 불평은 있지만, 맡은 일은 책임감 있게 마무리해요.',
      '3. 분위기를 잘 타서, 자리가 재미있으면 끝까지 남아있어요.',
      '4. 테마가 있는 카페나 전시회를 좋아해요. ',
    ],
  },
  SOCIAL_DISTANCING: {
    name: '사회적 거리두기 유형',
    label: '여기는 나만의 공간! 사회적 거리두기 유형',
    image: images.components.Mbti.icon4,
    parks: ['이촌한강공원', '난지한강공원', '광나루한강공원'],
    subLabel: '이 선 넘으면 침범이야 beep! 선이 뚜렷한 당신!',
    chars: [
      '1. 자신이 그어둔 선을 넘는 사람에게는 거리를 둬요.',
      '2. 여가 시간에는 혼자 내버려 뒀으면 좋겠어요.',
      '3. 내 얘기를 하는 것도, 남 얘기 듣는 것도 좋아하지 않아요.',
      '4. 사람이 많은 실내보다 탁 트인 자연이 좋아요.',
    ],
  },
  ACTIVIST: {
    name: '헛!둘!헛!둘! 활동가 유형',
    label: '활동가 유형',
    image: images.components.Mbti.icon5,
    parks: ['잠원한강공원', '반포한강공원', '광나루한강공원'],
    subLabel: '몸도 마음도 튼튼한 인간 비타민인 당신!',
    chars: [
      '1. 예쁜 카페도 좋지만 산들바람 부는 야외가 더 좋아요.',
      '2. 공감 능력이 좋아서 주변 사람들 상담을 잘 해줘요.',
      '3. 이론 수업보다는 직접 체험하고 뛰어노는 수업이 좋아요.',
      '4. 가만히 있는 건 딱 질색! 뭐라도 해야 직성이 풀려요.',
    ],
  },
  PLANNER: {
    name: '하나부터 열까지 꼼꼼한 계획파 유형',
    label: '계획파 유형',
    image: images.components.Mbti.icon6,
    parks: ['여의도한강공원', '잠원한강공원', '반포한강공원'],
    subLabel: '어떤 일이든 시작하기 전 계획부터 세우는 당신!',
    chars: [
      '1. 목표를 이루는 데에 강한 의지가 있어요.',
      '2. 눈치가 빨라서 효율적으로 일해요.',
      '3. 시간 약속 어기고 즉흥적인 건 싫어요.',
      '4. 무능한 꼰대와 함께하면 스트레스 받아요.',
    ],
  },
  EXPLORER: {
    name: '탐구왕 유형',
    label: '호기심 가득한,탐구왕 유형',
    image: images.components.Mbti.icon7,
    parks: ['여의도한강공원', '양화한강공원', '광나루한강공원'],
    subLabel: '이건 뭐지? 저건 뭘까? 세상 모든게 신기한 당신!',
    chars: [
      '1. 끊임없이 새로운 지식에 목말라해요.',
      '2. 관심 분야에 푹 빠지면 잘 헤어나오지 못해요.',
      '3. 사색을 즐기며 지적 호기심이 많아요.',
      '4. 개방적이고 자발적으로 탐구해요.',
    ],
  },
  STARGAZER: {
    name: '몽상가 유형',
    label: '따뜻한 감성의 소유자, 몽상가 유형',
    image: images.components.Mbti.icon8,
    parks: ['잠실한강공원', '뚝섬한강공원', '망원한강공원'],
    subLabel: '쓴 소리는 마음의 상처인 당신!',
    chars: [
      '1. 내 방, 내 침대가 세상에서 제일 포근해요.',
      '2. 의미 있는 날 손편지를 받으면 감동해요.',
      '3. 다른 사람이 나를 어떻게 생각할지 종종 걱정돼요.',
      '4. 선선한 바람과 감성적인 야경을 좋아해요.',
    ],
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
