import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import FindIDStep2 from '../components/FindIDStep2';

const FindIDStep2Container = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onFindPasswordPressed = useCallback(
    () =>
      navigation.reset({
        routes: [{ name: 'login' }, { name: 'findPW' }],
      }),
    [navigation],
  );

  const onLoginPressed = useCallback(
    () =>
      navigation.reset({
        routes: [{ name: 'login' }],
      }),
    [navigation],
  );

  return (
    <FindIDStep2
      onFindPasswordPressed={onFindPasswordPressed}
      onLoginPressed={onLoginPressed}
    />
  );
};

export default FindIDStep2Container;
