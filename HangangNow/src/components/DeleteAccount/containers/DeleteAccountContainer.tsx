import useProfile from '@hooks/store/useProfile';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import DeleteAccount from '../DeleteAccount';

const DeleteAccountContainer = () => {
  const { profile } = useProfile();

  const navigation = useNavigation<MainStackNavigationTypes>();

  const [checked, setChecked] = useState(false);

  const onCheckPressed = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const onNextPressed = useCallback(() => {
    navigation.push('deleteAccountStep2');
  }, [navigation]);

  return (
    <DeleteAccount
      profile={profile}
      checked={checked}
      onCheckPressed={onCheckPressed}
      onNextPressed={onNextPressed}
    />
  );
};

export default DeleteAccountContainer;
