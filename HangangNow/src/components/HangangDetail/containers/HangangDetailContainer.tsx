import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ParkTypes,
  PARK_DATA_TABLE,
  PARK_TABLE,
} from '@typedef/components/Home/home.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useState } from 'react';
import HangangDetail from '../HangangDetail';

const HangangDetailContainer = ({
  route: {
    params: { park },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'hangangDetail'>) => {
  const [visible, setVisible] = useState(false);

  return (
    <HangangDetail
      data={PARK_DATA_TABLE[PARK_TABLE[park as ParkTypes]]}
      visible={visible}
      setVisible={setVisible}
    />
  );
};

export default HangangDetailContainer;
