import colors from '@assets/colors';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Dimensions, Image, ScrollView } from 'react-native';

const { width } = Dimensions.get('screen');

const Preview = () => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='미리보기' />
      <Image
        style={{ width, height: width * 5.3 }}
        source={images.components.Preview.icon}
      />
    </ScrollView>
  );
};

export default Preview;
