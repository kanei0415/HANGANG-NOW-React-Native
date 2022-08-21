import useAuth from '@hooks/store/useAuth';
import useMemoList from '@hooks/store/useMemoList';
import { apiRoute, requestSecurePost } from '@libs/api';
import { formatDate } from '@libs/factory';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MemoTypes, TabTypes } from '@typedef/components/MyPage/mypage.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useMemo, useState } from 'react';
import CalendarDateDetail from '../components/CalendarDateDetail';

const CalendarDateDetailContainer = ({
  route: {
    params: { date: _date },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'calendarDateDetail'>) => {
  const { loginResponse } = useAuth();

  const [tab, setTab] = useState<TabTypes>('show');

  const [memos, setMemos] = useState<MemoTypes[]>([]);

  const [date, setDate] = useState(new Date(_date));

  const { memoList, __addMemoListFromHooks } = useMemoList();

  const [memoTitle, setMemoTitle] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  const memoAddBtnActive = useMemo(
    () => memoTitle !== null && color != null,
    [memoTitle, color],
  );

  const onMemoAddPressed = useCallback(() => {
    setTab('add');
  }, []);

  const onMemoAddDonePressed = useCallback(async () => {
    if (!loginResponse?.accessToken) {
      return;
    }

    const { data, config } = await requestSecurePost<MemoTypes>(
      apiRoute.memo.addMemo,
      {},
      { color, content: memoTitle, memoDate: formatDate(date, 'YYYY-MM-DD') },
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setMemos((prev) => [...prev, data]);
      __addMemoListFromHooks(data);
      setTab('show');
    }
  }, [loginResponse, color, memoTitle, date, __addMemoListFromHooks]);

  return (
    <CalendarDateDetail
      memos={memoList.filter(
        (val) => val.memoDate === formatDate(date, 'YYYY-MM-dd'),
      )}
      date={date}
      tab={tab}
      onMemoAddPressed={onMemoAddPressed}
      setMemoTitle={setMemoTitle}
      color={color}
      setColor={setColor}
      memoAddBtnActive={memoAddBtnActive}
      onMemoAddDonePressed={onMemoAddDonePressed}
    />
  );
};

export default CalendarDateDetailContainer;
