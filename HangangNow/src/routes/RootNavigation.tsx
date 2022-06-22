import React from 'react';
import { View } from 'react-native';
import LogInStackNavigationContainer from '@routes/containers/LogInStackNavigationContainer';
import MainTabNavigationContainer from '@routes/containers/MainTabNavigationContainer';

type Props = {
  loggedIn: boolean;
};

const RootNavigation = ({ loggedIn }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      {loggedIn ? (
        <LogInStackNavigationContainer />
      ) : (
        <MainTabNavigationContainer />
      )}
    </View>
  );
};

export default RootNavigation;
