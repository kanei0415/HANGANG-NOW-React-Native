import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '@assets/colors';
import NotoSans from '@assets/font';

type Props = {
  type: 'primary' | 'outline';
  active: boolean;
  label: string;
  onPress: () => void;
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
};

const CButton = ({
  type,
  active,
  label,
  onPress,
  backgroundColor,
  borderWidth,
  borderColor,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: active ? backgroundColor : colors.system.disabled,
        borderWidth: borderWidth,
        borderColor: borderColor,
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

export default CButton;
