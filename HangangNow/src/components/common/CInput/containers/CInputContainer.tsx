import { InputResultTypes } from '@typedef/components/common/cinput.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardType, StyleProp, TextInput, ViewStyle } from 'react-native';
import CInput from '../CInput';

type Props = {
  forceFocused?: boolean;
  forceInput?: string;
  onChange?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  placeHolder?: string;
  label?: string;
  keyboardType?: KeyboardType;
  inputType?: 'default' | 'password' | 'datetime';
  success?: InputResultTypes | null;
  error?: InputResultTypes | null;
  disabled?: InputResultTypes | null;
};

const CInputContainer = ({
  forceFocused = false,
  forceInput = '',
  onChange = () => {},
  containerStyle = {},
  placeHolder = '',
  label = '',
  keyboardType = 'default',
  inputType = 'default',
  success,
  error,
  disabled,
}: Props) => {
  const [input, setInput] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [focused, setFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const onFocused = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlured = useCallback(() => {
    setFocused(false);
  }, []);

  const onPasswordIconPressed = useCallback(
    () => setPasswordVisible((prev) => !prev),
    [],
  );

  useEffect(() => {
    if (forceFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [forceFocused, inputRef]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.clear();
      setInput(forceInput);
    }
  }, [inputRef, forceInput]);

  useEffect(() => {
    onChange(input);
  }, [onChange, input]);

  useEffect(() => {
    if (disabled && disabled.on) {
      setInput(disabled?.msg);
    }
  }, [disabled]);

  return (
    <CInput
      defaultValue={forceInput}
      input={input}
      setInput={setInput}
      focused={focused}
      onFocused={onFocused}
      onBlured={onBlured}
      containerStyle={containerStyle}
      placeHolder={placeHolder}
      label={label}
      keyboardType={keyboardType}
      inputType={inputType}
      passwordVisible={passwordVisible}
      onPasswordIconPressed={onPasswordIconPressed}
      success={
        success || {
          on: false,
          msg: '',
        }
      }
      error={
        error || {
          on: false,
          msg: '',
        }
      }
      disabled={
        disabled || {
          on: false,
          msg: '',
        }
      }
    />
  );
};

export default CInputContainer;
