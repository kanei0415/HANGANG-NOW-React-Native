import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import { formatDate } from '@libs/factory';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';

type Props = {
  onDatePickPressed: () => void;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mode: 'date' | 'time' | 'datetime';
  format: string;
};

const CDateInput = ({
  onDatePickPressed,
  date,
  setDate,
  open,
  setOpen,
  mode,
  format,
}: Props) => {
  return (
    <>
      <TouchableOpacity
        onPress={onDatePickPressed}
        style={{
          flexDirection: 'row',
          height: 48,
          backgroundColor: colors.background.light,
          borderWidth: 1,
          borderColor: colors.line.light,
          borderRadius: 8,
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.Size[15],
            {
              color: date ? colors.font.black : colors.font.disabled,
            },
          ]}>
          {date ? formatDate(date, format) : format}
        </Text>
        <Image source={images.common.time} style={{ width: 18, height: 18 }} />
      </TouchableOpacity>
      <DatePicker
        modal
        mode={mode}
        date={date || new Date()}
        open={open}
        onConfirm={(date) => {
          setDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default CDateInput;
