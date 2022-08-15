import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Setting from '../Setting';
import ImageCropPicker, { Image } from 'react-native-image-crop-picker';
import useProfile from '@hooks/store/useProfile';
import {
  apiRoute,
  requestSecureGet,
  requestSecurePost,
  requestSecurePut,
} from '@libs/api';
import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { ProfileTypes } from '@typedef/components/common/common.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const { profile, __updateProfileFromHooks } = useProfile();

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const [password, setPassword] = useState<string | null>(null);
  const [passwordInputError, setPasswordInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordInputSuccess, setPasswordInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>(null);
  const [passwordConfirmInputError, setPasswordConfirmInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirmInputSuccess, setPasswordConfirmInputSuccess] =
    useState<InputResultTypes | null>(null);

  const passwordValid = useMemo(
    () =>
      password !== null && password !== '' && check(password, REGEX.password),
    [password],
  );

  const passwordMatched = useMemo(
    () => password === passwordConfirm,
    [password, passwordConfirm],
  );

  const activePasswordChangeBtn = useMemo(() => {
    return password !== null && passwordValid && passwordMatched;
  }, [password, passwordValid, passwordMatched]);

  const onProfileImageSelectPressed = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const image = await ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      maxFiles: 1,
      mediaType: 'photo',
      cropping: true,
    });

    if (image) {
      const formData = new FormData();

      formData.append('multipartData', {
        ...image,
        uri: image.path,
        mime: 'image/jpeg',
        type: 'image/jpeg',
        name: `${new Date().getTime()}.jpeg`,
      });

      const { config, data } = await requestSecurePut<{ result: string }>(
        apiRoute.member.updateProfil,
        { 'Content-Type': 'multipart/form-data' },
        formData,
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);

        setSelectedImage(image);
      } else {
        alertMessage('프로필 사진 변경에 실패 했습니다');
      }
    }
  }, [loginResponse, __updateProfileFromHooks]);

  const onMarketingPressed = useCallback(
    async (checked: boolean) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.member.updateMarketing + `?flag=${checked}`,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);
      }
    },
    [loginResponse, __updateProfileFromHooks],
  );

  const onAlarmPressed = useCallback(
    async (checked: boolean) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.member.updateAlarm + `?flag=${checked}`,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);
      }
    },
    [loginResponse, __updateProfileFromHooks],
  );

  const onPasswordChangePressed = useCallback(async () => {
    if (!loginResponse || !profile) {
      return;
    }

    const { config } = await requestSecurePut(
      apiRoute.member.updatePassword,
      {},
      {
        email: profile.email,
        password1: password,
        password2: password,
      },
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      alertMessage('비밀번호가 변경되었습니다');
      navigation.goBack();
    } else if (config.status === 400) {
      alertMessage('기존 비밀번호와 일치합니다');
      navigation.goBack();
    } else {
      alertMessage('비밀번호 변경에 실패 했습니다');
    }
  }, [loginResponse, navigation]);

  const onDeleteAccountPressed = useCallback(() => {
    navigation.push('deleteAccount');
  }, [navigation]);

  const onLogoutPressed = useCallback(() => {
    AsyncStorage.clear();
    navigation.reset({
      routes: [{ name: 'login' }],
    });
  }, [navigation]);

  useEffect(() => {
    setPasswordInputError(null);
    setPasswordInputSuccess(null);

    if (password) {
      if (passwordValid) {
        setPasswordInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordInputError({
          on: true,
          msg: VALIDATION_FAILURE_MESSAGE,
        });
      }
    }
  }, [passwordValid, password]);

  useEffect(() => {
    setPasswordConfirmInputError(null);
    setPasswordConfirmInputSuccess(null);

    if (passwordConfirm) {
      if (passwordMatched) {
        setPasswordConfirmInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordConfirmInputError({
          on: true,
          msg: '비밀번호가 일치하지 않습니다',
        });
      }
    }
  }, [passwordMatched, passwordConfirm]);

  return profile ? (
    <Setting
      profileImage={selectedImage || profile.photoUrl}
      name={profile.name}
      email={profile.email}
      marketing={profile.marketing_agree}
      alarm={profile.alarm_agree}
      onProfileImageSelectPressed={onProfileImageSelectPressed}
      onMarketingPressed={onMarketingPressed}
      onAlarmPressed={onAlarmPressed}
      setPassword={setPassword}
      passwordInputError={passwordInputError}
      passwordInputSuccess={passwordInputSuccess}
      setPasswordConfirm={setPasswordConfirm}
      passwordConfirmInputError={passwordConfirmInputError}
      passwordConfirmInputSuccess={passwordConfirmInputSuccess}
      activePasswordChangeBtn={activePasswordChangeBtn}
      onPasswordChangePressed={onPasswordChangePressed}
      onDeleteAccountPressed={onDeleteAccountPressed}
      onLogoutPressed={onLogoutPressed}
    />
  ) : null;
};
export default SettingContainer;
