import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useMemo, useState } from 'react';
import Signup from '../Signup';

const SignupContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const nextBtnActive = useMemo(
    () => check1 && check2 && check5,
    [check1, check2, check5],
  );

  const allCheckActive = useMemo(
    () => check1 && check2 && check3 && check4 && check5,
    [check1, check2, check3, check4, check5],
  );

  const onDetailPressed = useCallback(() => {
    navigation.navigate('termDetail');
  }, [navigation]);

  const onAllCheckPressed = useCallback(() => {
    setCheck1(true);
    setCheck2(true);
    setCheck3(true);
    setCheck4(true);
    setCheck5(true);
  }, []);

  const onNextBtnPressed = useCallback(
    () => navigation.navigate('signupStep2'),
    [navigation],
  );

  return (
    <Signup
      check1={check1}
      setCheck1={setCheck1}
      check2={check2}
      setCheck2={setCheck2}
      check3={check3}
      setCheck3={setCheck3}
      check4={check4}
      setCheck4={setCheck4}
      check5={check5}
      setCheck5={setCheck5}
      allCheckActive={allCheckActive}
      nextBtnActive={nextBtnActive}
      onNextBtnPressed={onNextBtnPressed}
      onAllCheckPressed={onAllCheckPressed}
      onDetailPressed={onDetailPressed}
    />
  );
};

export default SignupContainer;
