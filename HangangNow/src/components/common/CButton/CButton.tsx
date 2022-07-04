import colors from '@assets/colors';
import NotoSans from '@assets/font';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  label?: string;
  disabled?: boolean;
  onPressed?: () => void;
};

const CButton = ({ label = '', disabled = false, onPressed }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPressed}
      disabled={disabled}
      style={{
        height: 48,
        borderRadius: 4,
        backgroundColor: disabled ? colors.main.gray : colors.main.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={[NotoSans.Medium, NotoSans.f_15, { color: colors.typo.white }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
