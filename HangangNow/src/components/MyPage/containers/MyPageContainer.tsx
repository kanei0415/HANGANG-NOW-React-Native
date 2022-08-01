import useAuth from '@hooks/store/useAuth';
import useProfile from '@hooks/store/useProfile';
import { apiRoute, requestSecureGet } from '@libs/api';
import { getCalendarDateList } from '@libs/calendar';
import { useNavigation } from '@react-navigation/native';
import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MyPage from '../MyPage';

const MyPageContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const { profile } = useProfile();

  const [date, setDate] = useState(new Date());

  const [memos, setMemos] = useState<MemoTypes[]>([]);

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

    const {} = await requestSecureGet<any>(
      apiRoute.memo.loadMemo,
      {},
      loginResponse.accessToken,
    );
  }, [date]);

  const onDateItemPressed = useCallback(
    (date: Date) => {
      navigation.navigate('calendarDateDetail', {
        date: date.getTime(),
        prev: JSON.stringify(
          memos.filter((item) => new Date(item.memoDate) === date),
        ),
      });
    },
    [navigation, memos],
  );

  useEffect(() => {
    loadMemos();
  }, [loadMemos]);

  return profile ? (
    <MyPage
      date={date}
      calendarList={calendarList}
      onSettingPressed={onSettingPressed}
      onPrevMonthPressed={onPrevMonthPressed}
      onNextMonthPressed={onNextMonthPressed}
      onDateItemPressed={onDateItemPressed}
      profile={profile}
    />
  ) : null;
};

export default MyPageContainer;
