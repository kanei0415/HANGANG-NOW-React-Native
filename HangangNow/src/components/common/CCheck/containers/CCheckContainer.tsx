import React from 'react';
import CCheck from '@components/common/CCheck/CCheck';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  onPressed?: () => void;
  label?: string;
  checked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconPosition?: 'left' | 'right';
  iconType?: 'round' | 'square';
};

const CCheckContainer = ({
  onPressed = () => {},
  label = 'TestLabel',
  checked = false,
  containerStyle,
  iconPosition = 'left',
  iconType = 'square',
}: Props) => {
  return (
    <CCheck
      onPressed={onPressed}
      label={label}
      checked={checked}
      containerStyle={containerStyle}
      iconPosition={iconPosition}
      iconType={iconType}
    />
  );
};

export default CCheckContainer;
