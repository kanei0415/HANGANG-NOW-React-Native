import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import CHeader from '../CHeader';

type Props = {
  title?: string;
  onBackPressed?: () => void;
};

const CHeaderContainer = ({
  title = 'Test1234',
  onBackPressed: _onBackPressed,
}: Props) => {
  const navigation = useNavigation();

  const onBackPressed = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <CHeader title={title} onBackPressed={_onBackPressed || onBackPressed} />
  );
};

export default CHeaderContainer;
