import React, { useCallback, useEffect, useState } from 'react';
import CDateInput from '../components/CDateInput';

type Props = {
  onDateChanged: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
};

const CDateInputContainer = ({ onDateChanged, mode = 'time' }: Props) => {
  const [date, setDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const onDatePickPressed = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (date) {
      onDateChanged(date);
    }
  }, [date]);

  return (
    <CDateInput
      onDatePickPressed={onDatePickPressed}
      date={date}
      setDate={setDate}
      open={open}
      setOpen={setOpen}
      mode={mode}
    />
  );
};

export default CDateInputContainer;
