import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  onBackPressed: () => void;
  showBackPress: boolean;
};

const CHeader = ({ title, onBackPressed, showBackPress }: Props) => {
  return (
    <View
      style={{
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: colors.main.gray,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {showBackPress && (
        <TouchableOpacity
          onPress={onBackPressed}
          style={{
            position: 'absolute',
            left: 20,
            top: 14,
          }}>
          <Image source={images.components.common.back} />
        </TouchableOpacity>
      )}
      <Text
        style={[NotoSans.Medium, NotoSans.f_18, { color: colors.typo.black }]}>
        {title}
      </Text>
    </View>
  );
};

export default CHeader;
