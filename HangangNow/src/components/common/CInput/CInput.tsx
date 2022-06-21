import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React, { RefObject } from 'react';
import {
  Image,
  KeyboardTypeOptions,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onRootPressed: () => void;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: RefObject<TextInput>;
  label: string;
  keyboardType: KeyboardTypeOptions;
  type: 'text' | 'password';
  onPasswordVisiblePressed: () => void;
  passwordVisible: boolean;
  onDeletePressed: () => void;
  isCheckValid: boolean;
  onCheckValid: (input: string) => boolean;
};

const CInput = ({
  input,
  setInput,
  onRootPressed,
  isFocused,
  setIsFocused,
  inputRef,
  label,
  keyboardType,
  type,
  onPasswordVisiblePressed,
  passwordVisible,
  onDeletePressed,
  isCheckValid,
  onCheckValid,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onRootPressed}>
      <View
        style={{
          height: 48,
          borderRadius: 8,
          backgroundColor: colors.background.light,
          flexDirection: 'row',
          paddingLeft: 8,
          paddingRight: 12,
          paddingVertical: 8,
          borderColor: colors.line.light,
        }}>
        <TextInput
          keyboardType={keyboardType}
          ref={inputRef}
          secureTextEntry={type === 'password' && !passwordVisible}
          style={[
            NotoSans.Medium,
            NotoSans.Size[15],
            { flex: 1, color: colors.font.black, padding: 0, marginLeft: 8 },
          ]}
          defaultValue={input}
          onChangeText={setInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && type === 'password' && (
          <View
            style={{
              position: 'absolute',
              right: 16,
              bottom: 12,
            }}>
            <TouchableWithoutFeedback
              onPress={(e) => {
                e.stopPropagation();
                onPasswordVisiblePressed();
              }}>
              <Image
                source={
                  passwordVisible
                    ? images.common.passwordShow
                    : images.common.passwordHide
                }
              />
            </TouchableWithoutFeedback>
          </View>
        )}
        {isCheckValid &&
          onCheckValid(input) &&
          (type === 'password' ? !isFocused : true) && (
            <Image
              source={images.components.common.squareCheck}
              style={{
                position: 'absolute',
                right: 16,
                bottom: 12,
              }}
            />
          )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CInput;
