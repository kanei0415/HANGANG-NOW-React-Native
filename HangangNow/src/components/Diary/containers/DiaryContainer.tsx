import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet, requestSecurePost } from '@libs/api';
import { formatDate } from '@libs/factory';
import { DiaryType } from '@typedef/components/Diary/diary.types';
import React, { useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import Diary from '../Diary';

const DiaryContainer = () => {
  const { loginResponse } = useAuth();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [visible, setVisible] = useState(false);

  const [selectedDateDiary, setSelectedDateDiary] = useState<DiaryType | null>(
    null,
  );

  const mode = useMemo<'add' | 'show'>(() => {
    return selectedDate && !selectedDateDiary ? 'add' : 'show';
  }, [selectedDate, selectedDateDiary]);

  const [index, setIndex] = useState(0);

  const [allTimeDiaryList, setAllTimeDiaryList] = useState<DiaryType[]>([]);

  const loadSelectedDateDiary = useCallback(async () => {
    if (!loginResponse?.accessToken) {
      return;
    }

    if (selectedDate) {
      const { data, config } = await requestSecurePost<{ data: DiaryType[] }>(
        apiRoute.diary.loadDiaryDate,
        {},
        {
          date: formatDate(selectedDate, 'YYYY-MM-dd'),
        },
        loginResponse.accessToken,
      );

      if (config.status == 200) {
        setSelectedDateDiary(data.data[0]);
        setIndex(0);
      } else {
        alertMessage('일기를 불러오지 못했습니다');
      }
    }
  }, [selectedDate]);

  const loadAllTimeDiary = useCallback(async () => {
    if (!loginResponse?.accessToken) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: DiaryType[] }>(
      apiRoute.diary.loadDiary,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setAllTimeDiaryList(data.data);
    } else {
      alertMessage('일기 목록을 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const onDateSelectPressed = useCallback(() => setVisible(true), []);

  const onDetailPressed = useCallback(
    (date: Date) => setSelectedDate(date),
    [],
  );

  const onDateSelected = useCallback((date: Date) => {
    setSelectedDate(date);
    setVisible(false);
  }, []);

  const onDateCanceled = useCallback(() => {
    setVisible(false);
  }, []);

  const onShowAllPressed = useCallback(() => setSelectedDate(null), []);

  const onPhotoSelectPressed = useCallback(async () => {
    const photos = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      maxFiles: 3,
      multiple: true,
      width: 480,
      height: 240,
    });
  }, []);

  useEffect(() => {
    loadSelectedDateDiary();
  }, [loadSelectedDateDiary]);

  useEffect(() => {
    loadAllTimeDiary();
  }, [loadAllTimeDiary, selectedDate]);

  return (
    <Diary
      selectedDate={selectedDate}
      selectedDateDiary={selectedDateDiary}
      allTimeDiaryList={allTimeDiaryList}
      visible={visible}
      index={index}
      setIndex={setIndex}
      onDetailPressed={onDetailPressed}
      onDateSelectPressed={onDateSelectPressed}
      onDateSelected={onDateSelected}
      onDateCanceled={onDateCanceled}
      onShowAllPressed={onShowAllPressed}
      onPhotoSelectPressed={onPhotoSelectPressed}
      mode={mode}
    />
  );
};

export default DiaryContainer;
