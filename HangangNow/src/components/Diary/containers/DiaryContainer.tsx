import { DiaryType } from '@typedef/components/Diary/diary.types';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import Diary from '../Diary';

const dummyDiary: DiaryType = {};

const DiaryContainer = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [visible, setVisible] = useState(false);

  const [selectedDateDiary, setSelectedDateDiary] = useState<DiaryType | null>(
    null,
  );

  const [index, setIndex] = useState(0);

  const [allTimeDiaryList, setAllTimeDiaryList] = useState<DiaryType[]>([]);

  const loadSelectedDateDiary = useCallback(async () => {
    if (selectedDate) {
      setSelectedDateDiary(dummyDiary);
      setIndex(0);
    }
  }, [selectedDate]);

  const loadAllTimeDiary = useCallback(async () => {
    setAllTimeDiaryList([
      dummyDiary,
      dummyDiary,
      dummyDiary,
      dummyDiary,
      dummyDiary,
    ]);
  }, []);

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
    />
  );
};

export default DiaryContainer;
