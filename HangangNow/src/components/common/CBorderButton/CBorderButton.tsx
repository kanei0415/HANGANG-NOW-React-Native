import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '@assets/colors';
import NotoSans from '@assets/font';

type Props = {
  active?: boolean;
  label?: string;
  labelColor?: string;
  onPress?: () => void;
  backgroundColor?: string;
};

const CBorderButton = ({
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
        borderWidth: 2,
        borderColor: colors.background.middle,
      }}
      disabled={!active}
      onPress={onPress}>
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.Size[18],
          {
            color: active ? colors.default.black : colors.font.disabled,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CBorderButton;
