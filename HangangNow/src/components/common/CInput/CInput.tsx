import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import {
  Image,
  KeyboardType,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  defaultValue: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  focused: boolean;
  onFocused: () => void;
  onBlured: () => void;
  containerStyle: StyleProp<ViewStyle>;
  placeHolder: string;
  label: string;
  keyboardType: KeyboardType;
  inputType: 'default' | 'password' | 'datetime';
  success: boolean;
  error: {
    occured: boolean;
    msg: string;
  };
};

const CInput = ({
  defaultValue,
  input,
  setInput,
  focused,
  onFocused,
  onBlured,
  containerStyle,
  placeHolder,
  label,
  keyboardType,
  success,
  error: { occured, msg },
}: Props) => {
  return (
    <View style={[{}, containerStyle]}>
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.f_12,
          {
            color: colors.typo.black,
            marginBottom: 8,
            display: label ? 'flex' : 'none',
          },
        ]}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        }}>
        <TextInput
          onChangeText={setInput}
          onFocus={onFocused}
          onBlur={onBlured}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            {
              flex: 1,
              height: 48,
              color: colors.typo.black,
              borderWidth: 1,
              borderColor: colors.typo.gray.light,
              paddingLeft: 12,
            },
            input !== '' && { borderColor: colors.main.gray },
            focused && { borderColor: colors.typo.gray.dark },
            occured && { borderColor: colors.main.error },
            success && { borderColor: colors.main.primary, paddingRight: 28 },
          ]}
        />
        {success && (
          <Image
            source={images.components.common.checked}
            style={{ position: 'absolute', right: 8, height: 15 }}
          />
        )}
      </View>
      <Text
        style={[
          NotoSans.Regular,
          NotoSans.f_12,
          {
            color: colors.main.error,
            marginTop: 6,
            display: occured ? 'flex' : 'none',
          },
        ]}>
        {msg}
      </Text>
    </View>
  );
};

export default CInput;
