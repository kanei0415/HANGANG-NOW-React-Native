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
  success?: boolean;
  error?: {
    occured: boolean;
    msg: string;
  };
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
  success = false,
  error = {
    occured: false,
    msg: '',
  },
}: Props) => {
  const [input, setInput] = useState('');

  const [focused, setFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const onFocused = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlured = useCallback(() => {
    setFocused(false);
  }, []);

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
      success={success}
      error={error}
    />
  );
};

export default CInputContainer;
