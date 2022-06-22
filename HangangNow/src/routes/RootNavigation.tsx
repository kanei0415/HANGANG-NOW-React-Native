import React from 'react';
import { View } from 'react-native';
import MainStackNavigationContainer from '@routes/containers/MainStackNavigationContainer';

type Props = {
  loggedIn: boolean;
};

const RootNavigation = ({ loggedIn }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <MainStackNavigationContainer />
    </View>
  );
};

export default RootNavigation;
