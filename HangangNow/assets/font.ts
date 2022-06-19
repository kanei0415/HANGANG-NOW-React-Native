import {Platform, StyleProp, TextStyle} from 'react-native';

type FontStructureType = 'fontFamily' | 'fontWeight';

type FontContainerTypes = {
  Light: StyleProp<Pick<TextStyle, FontStructureType>>;
  Regular: StyleProp<Pick<TextStyle, FontStructureType>>;
  Medium: StyleProp<Pick<TextStyle, FontStructureType>>;
  Bold: StyleProp<Pick<TextStyle, FontStructureType>>;
  f_10: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_11: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_12: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_13: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_14: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_15: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_16: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_17: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_18: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_19: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
  f_20: StyleProp<Pick<TextStyle, 'fontSize' | 'includeFontPadding'>>;
};

export const Roboto: FontContainerTypes = {
  Light: {
    fontFamily: 'Roboto-Light',
  },
  Regular: {fontFamily: 'Roboto-Regular'},
  Medium: {
    fontFamily: 'Roboto-Medium',
  },
  Bold: {
    fontFamily: 'Roboto-Bold',
  },
  f_10: [
    {
      fontSize: 10,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_11: [
    {
      fontSize: 11,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_12: [
    {
      fontSize: 12,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_13: [
    {
      fontSize: 13,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_14: [
    {
      fontSize: 14,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_15: [
    {
      fontSize: 15,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_16: [
    {
      fontSize: 16,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_17: [
    {
      fontSize: 17,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_18: [
    {
      fontSize: 18,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_19: [
    {
      fontSize: 19,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_20: [
    {
      fontSize: 20,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
};

const NotoSans: FontContainerTypes = {
  Light: {
    fontFamily: 'NotoSansKR-Light',
  },
  Regular: {fontFamily: 'NotoSansKR-Regular'},
  Medium: {
    fontFamily: 'NotoSansKR-Medium',
  },
  Bold: {
    fontFamily: 'NotoSansKR-Bold',
  },
  f_10: [
    {
      fontSize: 10,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_11: [
    {
      fontSize: 11,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_12: [
    {
      fontSize: 12,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_13: [
    {
      fontSize: 13,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_14: [
    {
      fontSize: 14,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_15: [
    {
      fontSize: 15,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_16: [
    {
      fontSize: 16,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_17: [
    {
      fontSize: 17,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_18: [
    {
      fontSize: 18,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_19: [
    {
      fontSize: 19,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
  f_20: [
    {
      fontSize: 20,
    },
    Platform.OS === 'android' && {
      includeFontPadding: false,
    },
  ],
};

export default NotoSans;
