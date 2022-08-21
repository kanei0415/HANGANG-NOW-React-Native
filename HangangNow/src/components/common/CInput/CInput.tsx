import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import React from 'react';
import {
  Image,
  KeyboardType,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
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
  passwordVisible: boolean;
  onPasswordIconPressed: () => void;
  success: InputResultTypes;
  error: InputResultTypes;
  disabled: InputResultTypes;
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
  inputType,
  passwordVisible,
  onPasswordIconPressed,
  success,
  error,
  disabled,
}: Props) => {
  return (
    <View style={[{}, containerStyle]}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        }}>
        <TextInput
          value={disabled.on ? disabled.msg : input}
          editable={!disabled.on}
          selectTextOnFocus={!disabled.on}
          autoCapitalize='none'
          secureTextEntry={inputType === 'password' && !passwordVisible}
          onChangeText={setInput}
          onFocus={onFocused}
          onBlur={onBlured}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          placeholderTextColor={colors.typo.gray.light}
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
              borderRadius: 4,
              paddingLeft: 12,
            },
            input !== '' && { borderColor: colors.main.gray },
            focused && { borderColor: colors.typo.gray.dark },
            error.on && { borderColor: colors.main.error },
            success.on && { borderColor: colors.main.primary },
          ]}
        />
        {inputType === 'password' && input !== '' && (
          <TouchableOpacity
            onPress={onPasswordIconPressed}
            style={{ position: 'absolute', right: 8 }}>
            <Image
              source={
                images.components.common[
                  passwordVisible ? 'passwordHide' : 'passwordShow'
                ]
              }
            />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          NotoSans.Regular,
          NotoSans.f_12,
          {
            color: success.on ? colors.main.primary : colors.main.error,
            marginTop: 6,
            display: success.on || error.on ? 'flex' : 'none',
          },
        ]}>
        {success.msg || error.msg}
      </Text>
    </View>
  );
};

export default CInput;
