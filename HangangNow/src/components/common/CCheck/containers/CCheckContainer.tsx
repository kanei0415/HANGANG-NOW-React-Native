import React from 'react';
import CCheck from '@components/common/CCheck/CCheck';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  onPressed?: () => void;
  label?: string;
  checked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const CCheckContainer = ({
  onPressed = () => {},
  label = 'TestLabel',
  checked = false,
  containerStyle,
}: Props) => {
  return (
    <CCheck
      onPressed={onPressed}
      label={label}
      checked={checked}
      containerStyle={containerStyle}
    />
  );
};

export default CCheckContainer;
