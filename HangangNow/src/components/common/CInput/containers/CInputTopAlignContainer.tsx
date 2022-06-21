import React, {useCallback, useEffect, useRef, useState} from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
import CInputTopAlign from '../components/CInputTopAlign';

type Props = {
  onInputChange: (newVal: string) => void;
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  type?: 'text' | 'password';
  initialState?: string;
};

const CInputTopAlignContainer = ({
  onInputChange,
  label,
  placeholder = 'Test Placeholder',
  keyboardType = 'default',
  type = 'text',
  initialState = '',
}: Props) => {
  const [input, setInput] = useState(initialState);

  const [isFocused, setIsFocused] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const onPasswordVisiblePressed = useCallback(() => {
    setPasswordVisible(prev => !prev);
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
    <CInputTopAlign
      input={input}
      placeholder={placeholder}
      setInput={setInput}
      setIsFocused={setIsFocused}
      isFocused={isFocused}
      inputRef={inputRef}
      label={label}
      keyboardType={keyboardType}
      type={type}
      onPasswordVisiblePressed={onPasswordVisiblePressed}
      passwordVisible={passwordVisible}
      onDeletePressed={onDeletePressed}
    />
  );
};

export default CInputTopAlignContainer;
