import colors from '@assets/colors';
import NotoSans from '@assets/font';
import { formatDate } from '@libs/factory';
import React from 'react';
import {
  KeyboardType,
  StyleProp,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  input: Date | null;
  format: string;
  containerStyle?: StyleProp<ViewStyle>;
  placeHolder: string;
  label?: string;
  onDateInputPressed: () => void;
};

const CDateInput = ({
  input,
  format,
  containerStyle,
  placeHolder,
  label,
  onDateInputPressed,
}: Props) => {
  return (
    <View style={[{}, containerStyle]}>
      {label && (
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.black,
              marginBottom: 8,
              display: label ? 'flex' : 'none',
            },
          ]}>
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={onDateInputPressed}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          height: 48,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: input ? colors.typo.gray.light : colors.main.gray,
          paddingHorizontal: 12,
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: input ? colors.typo.black : colors.typo.gray.light },
          ]}>
          {input ? formatDate(input, format) : placeHolder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CDateInput;
