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
  Size: FontSizeTypes;
};

const fontSize: FontSizeTypes = [...new Array(30).keys()].map((i) => [
  {
    fontSize: i + 1,
  },
  Platform.OS === 'android' && {
    includeFontPadding: false,
  },
]);

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
  Size: fontSize,
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
  Size: fontSize,
};

export default NotoSans;
