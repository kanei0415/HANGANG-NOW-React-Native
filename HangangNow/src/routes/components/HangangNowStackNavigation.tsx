import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HangangNowParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<HangangNowParamListTypes>();

const HangangNowStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='hangangNow'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='hangangNow' component={HomeContainer} />
      <Stack.Screen name='parkInfo' component={HomeContainer} />
      <Stack.Screen name='clothesByWeather' component={HomeContainer} />
      <Stack.Screen name='hangangMap' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default HangangNowStackNavigation;
