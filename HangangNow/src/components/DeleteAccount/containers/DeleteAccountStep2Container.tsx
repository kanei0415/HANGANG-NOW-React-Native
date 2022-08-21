import useAuth from '@hooks/store/useAuth';
import useProfile from '@hooks/store/useProfile';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureDelete } from '@libs/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import DeleteAccountStep2 from '../components/DeleteAccountStep2';

const DeleteAccountStep2Container = () => {
  const { profile } = useProfile();

  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [checkList, setCheckList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onCheckPressed = useCallback((idx: number) => {
    setCheckList((prev) => {
      const clone = [...prev];

      clone[idx] = !prev[idx];

      return clone;
    });
  }, []);

  const onDonePressed = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { config } = await requestSecureDelete(
      apiRoute.member.deleteMember,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      AsyncStorage.clear();

      navigation.reset({
        routes: [{ name: 'login' }],
      });
    } else {
      alertMessage('계정삭제에 실패했습니다');
    }
  }, [loginResponse, navigation]);

  return (
    <DeleteAccountStep2
      profile={profile}
      onDonePressed={onDonePressed}
      checkList={checkList}
      onCheckPressed={onCheckPressed}
    />
  );
};

export default DeleteAccountStep2Container;
