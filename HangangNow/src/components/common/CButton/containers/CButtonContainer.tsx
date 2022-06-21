import React from 'react';
import CButton from '@components/common/CButton/CButton';
import colors from '@assets/colors';

type Props = {
  type: 'primary' | 'outline';
  active?: boolean;
  label?: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
};

const CButtonContainer = ({
  type,
  active = true,
  onPress = () => {},
  label = ' Test Label',
  backgroundColor = colors.brand.main,
  borderWidth = 0,
  borderColor = colors.background.middle,
}: Props) => {
  return (
    <CButton
      type={type}
      active={type === 'outline' ? true : active}
      label={label}
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
    />
  );
};

export default CButtonContainer;
