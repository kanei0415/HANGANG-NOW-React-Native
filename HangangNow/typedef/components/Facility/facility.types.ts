import images from '@assets/images';
import { ImageSourcePropType } from 'react-native';

export type FacilityCategoryType =
  | 'TOILET'
  | 'SUN_SHADOW'
  | 'BICYCLE'
  | 'VIEW'
  | 'DELIVERY_ZONE'
  | 'CAFE'
  | 'RESTAURANT'
  | 'PARKING'
  | 'STORE'
  | 'LOAD_FOOD'
  | 'BASKETBALL'
  | 'SOCCER'
  | 'BASEBALL'
  | 'TENNIS'
  | 'SWIM';

export type FacilityDataType = {
  address: string;
  name: string;
  x_pos: number;
  y_pos: number;
};

export type FacilityViewDataType = {
  label: string;
  image: ImageSourcePropType;
};

export const FACILITY_TABLE: { [k: string]: FacilityViewDataType } = {
  TOILET: {
    label: '화장실',
    image: images.components.Facility.category1,
  },
  SUN_SHADOW: {
    label: '그늘막',
    image: images.components.Facility.category2,
  },
  BICYCLE: {
    label: '대여소',
    image: images.components.Facility.category3,
  },
  VIEW: {
    label: '전망쉼터',
    image: images.components.Facility.category4,
  },
  DELIVERY_ZONE: {
    label: '배달존',
    image: images.components.Facility.category5,
  },
  CAFE: {
    label: '카페',
    image: images.components.Facility.category6,
  },
  RESTAURANT: {
    label: '맛집',
    image: images.components.Facility.category7,
  },
  PARKING: {
    label: '주차장',
    image: images.components.Facility.category8,
  },
  STORE: {
    label: '편의점',
    image: images.components.Facility.category9,
  },
  LOAD_FOOD: {
    label: '포장마차',
    image: images.components.Facility.category10,
  },
  BASKETBALL: {
    label: '농구장',
    image: images.components.Facility.category11,
  },
  SOCCER: {
    label: '축구장',
    image: images.components.Facility.category12,
  },
  BASEBALL: {
    label: '야구장',
    image: images.components.Facility.category13,
  },
  TENNIS: {
    label: '테니스장',
    image: images.components.Facility.category14,
  },
  SWIM: {
    label: '수영장',
    image: images.components.Facility.category15,
  },
};
