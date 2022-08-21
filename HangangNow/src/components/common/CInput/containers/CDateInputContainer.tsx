import React, { useCallback, useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import CDateInput from '../components/CDateInput';

type Props = {
  defaultValue?: Date | null;
  onDateSelected?: (date: Date) => void;
  format?: string;
  containerStyle?: StyleProp<ViewStyle>;
  placeHolder?: string;
  label?: string;
};

const CDateInputContainer = ({
  defaultValue = null,
  onDateSelected = () => {},
  format = 'YYYY년 MM월 dd일',
  containerStyle,
  placeHolder = '',
  label,
}: Props) => {
  const [input, setInput] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const onDateInputPressed = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (input) {
      onDateSelected(input);
    }
  }, [input]);

  return (
    <>
      <CDateInput
        input={input}
        format={format}
        containerStyle={containerStyle}
        placeHolder={placeHolder}
        label={label}
        onDateInputPressed={onDateInputPressed}
      />
      <DateTimePicker
        isVisible={open}
        mode='date'
        date={input ?? new Date()}
        onConfirm={(date) => {
          setInput(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default CDateInputContainer;
