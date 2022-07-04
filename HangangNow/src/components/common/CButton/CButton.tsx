import colors from '@assets/colors';
import NotoSans from '@assets/font';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  label?: string;
  disabled?: boolean;
  onPressed?: () => void;
  type?: 'primary' | 'secondary';
};

const CButton = ({
  label = '',
  disabled = false,
  onPressed,
  type = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPressed}
      disabled={disabled}
      style={[
        {
          height: 48,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        },
        type === 'primary' && {
          backgroundColor: disabled ? colors.main.gray : colors.main.primary,
        },
        type === 'secondary' && {
          backgroundColor: disabled ? colors.main.gray : colors.main.secondary,
        },
      ]}>
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.f_15,
          { color: disabled ? colors.typo.gray.middle : colors.typo.white },
          type === 'primary' && {
            color: colors.typo.white,
          },
          type === 'secondary' && {
            color: disabled ? colors.typo.gray.middle : colors.main.primary,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
