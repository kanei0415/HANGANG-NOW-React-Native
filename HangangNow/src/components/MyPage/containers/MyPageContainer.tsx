import { getCalendarDateList } from '@libs/calendar';
import { formatDate } from '@libs/factory';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MyPage from '../MyPage';

const MyPageContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [date, setDate] = useState(new Date());

  const [memos, setMemos] = useState<any[]>([]);

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

  const loadMemos = useCallback(() => {}, [date]);

  const onDateItemPressed = useCallback(
    (date: Date) => {
      navigation.navigate('calendarDateDetail', {
        date: date.getTime(),
      });
    },
    [navigation],
  );

  useEffect(() => {
    loadMemos();
  }, [loadMemos]);

  return (
    <MyPage
      date={date}
      calendarList={calendarList}
      onSettingPressed={onSettingPressed}
      onPrevMonthPressed={onPrevMonthPressed}
      onNextMonthPressed={onNextMonthPressed}
      onDateItemPressed={onDateItemPressed}
    />
  );
};

export default MyPageContainer;
