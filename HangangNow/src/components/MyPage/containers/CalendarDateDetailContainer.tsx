import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabTypes } from '@typedef/components/MyPage/mypage.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import CalendarDateDetail from '../components/CalendarDateDetail';

const CalendarDateDetailContainer = ({
  route: {
    params: { date: _date },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'calendarDateDetail'>) => {
  const [tab, setTab] = useState<TabTypes | null>(null);

  const [date, setDate] = useState(new Date(_date));

  const loadMemo = useCallback(() => {}, []);

  return <CalendarDateDetail date={date} tab={tab} />;
};

export default CalendarDateDetailContainer;
