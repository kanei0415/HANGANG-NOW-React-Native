import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='home' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
