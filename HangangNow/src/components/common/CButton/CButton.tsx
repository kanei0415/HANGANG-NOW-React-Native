import React from 'react';
import { Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import colors from '@assets/colors';
import NotoSans from '@assets/font';

type Props = {
  active?: boolean;
  label?: string;
  onPress?: () => void;
  backgroundColor?: string;
  icon?: ImageSourcePropType;
};

const CButton = ({
  active = false,
  label = ' Test Label',
  onPress = () => {},
  backgroundColor = colors.brand.main,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: active ? backgroundColor : colors.system.disabled,
      }}
      disabled={!active}
      onPress={onPress}>
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.Size[20],
          {
            color: active ? colors.default.white : colors.font.light,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
