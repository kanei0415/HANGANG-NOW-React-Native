import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import CInput from '../CInput';

type Props = {
  onInputChange: (newVal: string) => void;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  type?: 'text' | 'password';
  initialState?: string;
  isCheckValid?: boolean;
  valid?: boolean;
  errorText?: string;
};

const CInputContainer = ({
  onInputChange,
  label = 'Test Label',
  keyboardType = 'default',
  type = 'text',
  initialState = '',
  isCheckValid = false,
  valid = false,
  errorText = '',
}: Props) => {
  const [input, setInput] = useState(initialState);

  const [isFocused, setIsFocused] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const onRootPressed = useCallback(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onPasswordVisiblePressed = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const onDeletePressed = useCallback(() => {
    if (inputRef?.current) {
      inputRef.current.clear();
    }
  }, [inputRef]);

  useEffect(() => {
    onInputChange(input);
  }, [onInputChange, input]);

  return (
    <CInput
      input={input}
      setInput={setInput}
      onRootPressed={onRootPressed}
      setIsFocused={setIsFocused}
      isFocused={isFocused}
      inputRef={inputRef}
      label={label}
      keyboardType={keyboardType}
      type={type}
      onPasswordVisiblePressed={onPasswordVisiblePressed}
      passwordVisible={passwordVisible}
      onDeletePressed={onDeletePressed}
      isCheckValid={isCheckValid}
      valid={valid}
      errorText={errorText}
    />
  );
};

export default CInputContainer;
