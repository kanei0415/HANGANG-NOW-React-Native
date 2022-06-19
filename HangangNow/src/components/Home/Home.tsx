import colors from '@assets/colors';
import React from 'react';
import { View } from 'react-native';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}></View>
  );
};

export default Home;
