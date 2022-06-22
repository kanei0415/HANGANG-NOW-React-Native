import React from 'react';
import CButton from '@components/common/CButton/CButton';

type Props = {
  type: 'primary' | 'outline';
  active?: boolean;
  label?: string;
  onPress?: () => void;
};

const CButtonContainer = ({
  type,
  active = true,
  onPress = () => {},
  label = ' Test Label',
}: Props) => {
  return (
    <CButton
      type={type}
      active={type === 'outline' ? true : active}
      label={label}
      onPress={onPress}
    />
  );
};

export default CButtonContainer;
