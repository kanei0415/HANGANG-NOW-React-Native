import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import CHeader from '../CHeader';

type Props = {
  title?: string;
  onBackPressed?: () => void;
  showBackPress?: boolean;
};

const CHeaderContainer = ({
  title = 'Test1234',
  onBackPressed: _onBackPressed,
  showBackPress = true,
}: Props) => {
  const navigation = useNavigation();

  const onBackPressed = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <CHeader
      title={title}
      onBackPressed={_onBackPressed || onBackPressed}
      showBackPress={showBackPress}
    />
  );
};

export default CHeaderContainer;
