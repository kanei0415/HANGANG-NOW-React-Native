import colors from '@assets/colors';
import useLoginResponse from '@hooks/storage/useLoginResponse';
import useAuth from '@hooks/store/useAuth';
import useMemoList from '@hooks/store/useMemoList';
import useProfile from '@hooks/store/useProfile';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestPost, requestSecureGet } from '@libs/api';
import { getCalendarDateList } from '@libs/calendar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import MyPage from '../MyPage';

const MyPageContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse, __updateLoginResponseFromHooks } = useAuth();
  const { __setLoginResponseFromStorage } = useLoginResponse();

  const { profile } = useProfile();

  const { memoList, __updateMemoListFromHooks, __clearMemoListFromHooks } =
    useMemoList();

  const [date, setDate] = useState(new Date());

  const calendarList = useMemo(() => getCalendarDateList(date), [date]);

  const onSettingPressed = useCallback(() => {
    navigation.navigate('setting');
  }, [navigation]);

  const onPrevMonthPressed = useCallback(() => {
    setDate((prev) => {
      const clone = new Date(prev);

      clone.setMonth(prev.getMonth() - 1);

      return clone;
    });
  }, []);

  const onNextMonthPressed = useCallback(() => {
    setDate((prev) => {
      const clone = new Date(prev);

      clone.setMonth(prev.getMonth() + 1);

      return clone;
    });
  }, []);

  const loadMemos = useCallback(async () => {
    if (!loginResponse?.accessToken) {
      return;
    }

    const { data, config } = await requestSecureGet<{
      data: MemoTypes[];
    }>(apiRoute.memo.loadMemo, {}, loginResponse.accessToken);

    if (config.status === 200) {
      __updateMemoListFromHooks(data.data);
    } else if (config.status === 401) {
      const { data, config } = await requestPost<LoginResponseBody>(
        apiRoute.auth.refresh,
        {},
        {
          accessToken: loginResponse.accessToken,
          refreshToken: loginResponse.refreshToken,
          autoLogin: true,
        },
      );

      if (config.status === 200) {
        __updateLoginResponseFromHooks(data);
        __setLoginResponseFromStorage(data);

        const {
          data: { data: memos },
          config,
        } = await requestSecureGet<{
          data: MemoTypes[];
        }>(apiRoute.memo.loadMemo, {}, loginResponse.accessToken);

        if (config.status === 200) {
          __updateMemoListFromHooks(memos);
        } else {
          alertMessage('로그인이 만료되었습니다');
          AsyncStorage.clear();
          navigation.reset({
            routes: [{ name: 'login' }],
          });
        }
      } else {
        alertMessage('로그인이 만료되었습니다');
        AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'login' }],
        });
      }
    } else {
      alertMessage('로그인이 만료되었습니다');
      AsyncStorage.clear();
      navigation.reset({
        routes: [{ name: 'login' }],
      });
    }
  }, [
    loginResponse,
    date,
    __updateLoginResponseFromHooks,
    __setLoginResponseFromStorage,
    navigation,
  ]);

  const onDateItemPressed = useCallback(
    (date: Date) => {
      navigation.navigate('calendarDateDetail', {
        date: date.getTime(),
      });
    },
    [navigation, memoList],
  );

  const onDiaryPressed = useCallback(() => {
    navigation.navigate('diary');
  }, [navigation]);

  useEffect(() => {
    loadMemos();

    return () => {
      __clearMemoListFromHooks();
    };
  }, [loadMemos, __clearMemoListFromHooks]);

  useEffect(() => {
    setDate(new Date('2000-01-01'));

    setTimeout(() => {
      setDate(new Date());
    }, 200);
  }, []);

  const onMbtiPressed = useCallback(() => {
    navigation.navigate('mbti');
  }, [navigation]);

  const onScrapPressed = useCallback(() => {
    navigation.navigate('scrap');
  }, [navigation]);

  return profile ? (
    <MyPage
      memoList={memoList}
      date={date}
      calendarList={calendarList}
      onSettingPressed={onSettingPressed}
      onPrevMonthPressed={onPrevMonthPressed}
      onNextMonthPressed={onNextMonthPressed}
      onDateItemPressed={onDateItemPressed}
      profile={profile}
      onDiaryPressed={onDiaryPressed}
      onMbtiPressed={onMbtiPressed}
      onScrapPressed={onScrapPressed}
    />
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <Text>{'프로필을 불러오지 못했습니다'}</Text>
    </View>
  );
};

export default MyPageContainer;
