import React, { useCallback, useEffect, useState } from 'react';
import CToggle from '../CToggle';

type Props = {
  initialState?: boolean;
  onCheckedChange?: (check: boolean) => void;
};

const CToggleContainer = ({
  initialState,
  onCheckedChange = () => {},
}: Props) => {
  const [check, setCheck] = useState(initialState ?? false);

  const onCheckPressed = useCallback(() => setCheck((prev) => !prev), []);

  useEffect(() => {
    onCheckedChange(check);
  }, [onCheckedChange, check]);

  return <CToggle check={check} onCheckPressed={onCheckPressed} />;
};

export default CToggleContainer;
