import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React, { RefObject } from 'react';
import {
  Image,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  input: string;
  placeholder: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: RefObject<TextInput>;
  label?: string;
  keyboardType: KeyboardTypeOptions;
  type: 'text' | 'password';
  onPasswordVisiblePressed: () => void;
  passwordVisible: boolean;
  onDeletePressed: () => void;
};

const CInputTopAlign = ({
  input,
  placeholder,
  setInput,
  isFocused,
  setIsFocused,
  inputRef,
  label,
  keyboardType,
  type,
  onPasswordVisiblePressed,
  passwordVisible,
  onDeletePressed,
}: Props) => {
  return (
    <View>
      {label && (
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.Size[12],
            {
              color: colors.font.black,
            },
          ]}>
          {label}
        </Text>
      )}
      <View style={{ marginTop: label ? 8 : 0, position: 'relative' }}>
        <TextInput
          keyboardType={keyboardType}
          ref={inputRef}
          secureTextEntry={type === 'password' && !passwordVisible}
          onChangeText={setInput}
          placeholder={placeholder}
          style={[
            NotoSans.Medium,
            NotoSans.Size[12],
            {
              padding: 0,
              margin: 0,
              height: 48,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor: colors.background.light,
              borderColor: isFocused ? colors.brand.main : colors.line.light,
              paddingLeft: 12,
              paddingRight: 40,
            },
          ]}
          defaultValue={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {/*{isFocused && type === 'text' && (*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      position: 'absolute',*/}
        {/*      right: 9,*/}
        {/*      bottom: 15,*/}
        {/*    }}>*/}
        {/*    <TouchableWithoutFeedback*/}
        {/*      onPress={e => {*/}
        {/*        e.stopPropagation();*/}
        {/*        onDeletePressed();*/}
        {/*      }}>*/}
        {/*      <Image source={images.common.delete} />*/}
        {/*    </TouchableWithoutFeedback>*/}
        {/*  </View>*/}
        {/*)}*/}
        {isFocused && type === 'password' && (
          <View
            style={{
              position: 'absolute',
              right: 8,
              bottom: 6,
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
      </View>
    </View>
  );
};

export default CInputTopAlign;
