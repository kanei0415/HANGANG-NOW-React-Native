import { Platform, StyleProp, TextStyle } from 'react-native';

type FontSizeTypes = StyleProp<
  Pick<TextStyle, 'fontSize' | 'includeFontPadding'>
>[];

type FontStructureType = 'fontFamily' | 'fontWeight';

type FontContainerTypes = {
  Light: StyleProp<Pick<TextStyle, FontStructureType>>;
  Regular: StyleProp<Pick<TextStyle, FontStructureType>>;
  Medium: StyleProp<Pick<TextStyle, FontStructureType>>;
  Bold: StyleProp<Pick<TextStyle, FontStructureType>>;
  f_10: FontSizeTypes;
  f_11: FontSizeTypes;
  f_12: FontSizeTypes;
  f_13: FontSizeTypes;
  f_14: FontSizeTypes;
  f_15: FontSizeTypes;
  f_16: FontSizeTypes;
  f_17: FontSizeTypes;
  f_18: FontSizeTypes;
  f_19: FontSizeTypes;
  f_20: FontSizeTypes;
  f_21: FontSizeTypes;
  f_22: FontSizeTypes;
  f_23: FontSizeTypes;
  f_24: FontSizeTypes;
};

export const Roboto: FontContainerTypes = {
  Light: {
    fontFamily: 'Roboto-Light',
  },
  Regular: {
    fontFamily: 'Roboto-Regular',
  },
  Medium: {
    fontFamily: 'Roboto-Medium',
  },
  Bold: {
    fontFamily: 'Roboto-Bold',
  },
  f_10: [
    { fontSize: 10 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_11: [
    { fontSize: 11 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_12: [
    { fontSize: 12 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_13: [
    { fontSize: 13 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_14: [
    { fontSize: 14 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_15: [
    { fontSize: 15 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_16: [
    { fontSize: 16 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_17: [
    { fontSize: 17 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_18: [
    { fontSize: 18 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_19: [
    { fontSize: 19 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_20: [
    { fontSize: 20 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_21: [
    { fontSize: 21 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_22: [
    { fontSize: 22 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_23: [
    { fontSize: 23 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_24: [
    { fontSize: 24 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
};

const NotoSans: FontContainerTypes = {
  Light: {
    fontFamily: 'NotoSansKR-Light',
  },
  Regular: {
    fontFamily: 'NotoSansKR-Regular',
  },
  Medium: {
    fontFamily: 'NotoSansKR-Medium',
  },
  Bold: {
    fontFamily: 'NotoSansKR-Bold',
  },
  f_10: [
    { fontSize: 10 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_11: [
    { fontSize: 11 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_12: [
    { fontSize: 12 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_13: [
    { fontSize: 13 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_14: [
    { fontSize: 14 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_15: [
    { fontSize: 15 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_16: [
    { fontSize: 16 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_17: [
    { fontSize: 17 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_18: [
    { fontSize: 18 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_19: [
    { fontSize: 19 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_20: [
    { fontSize: 20 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_21: [
    { fontSize: 21 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_22: [
    { fontSize: 22 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_23: [
    { fontSize: 23 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
  f_24: [
    { fontSize: 24 },
    Platform.OS === 'android' && { includeFontPadding: false },
  ],
};

export default NotoSans;
