import React, { useCallback, useEffect, useState } from 'react';
import CSelect from '../CSelect';
import { LayoutRectangle } from 'react-native';

type Props<T> = {
  options: T[];
  labelSelector: (item: T) => string;
  onSelected?: (item: T) => void;
  placeholder?: string;
  position?: LayoutRectangle;
};

function CSelectContainer<T>({
  options,
  labelSelector,
  onSelected = () => {},
  placeholder = '',
  position = { x: 0, y: 0, width: 0, height: 0 },
}: Props<T>) {
  const [optionVisible, setOptionVisible] = useState(false);

  const [selected, setSelected] = useState<T | null>(null);

  const onSelectInputClicked = useCallback(() => {
    setOptionVisible(!optionVisible);
  }, []);

  const onBackDropPressed = useCallback(() => setOptionVisible(false), []);

  useEffect(() => {
    if (selected) {
      onSelected(selected);
    }
  }, [selected]);

  return (
    <CSelect
      onSelectInputClicked={onSelectInputClicked}
      selected={selected}
      options={options}
      labelSelector={labelSelector}
      placeholder={placeholder}
      optionVisible={optionVisible}
      onSelected={setSelected}
      onBackDropPressed={onBackDropPressed}
      position={position}
    />
  );
}

export default CSelectContainer;
