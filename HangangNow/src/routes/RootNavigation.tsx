import React from 'react';
import { View } from 'react-native';
import MainStackNavigationContainer from '@routes/containers/MainStackNavigationContainer';

type Props = {};

const RootNavigation = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <MainStackNavigationContainer />
    </View>
  );
};

export default RootNavigation;
