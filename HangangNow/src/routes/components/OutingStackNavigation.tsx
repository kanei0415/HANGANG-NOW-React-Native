import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { OutingParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<OutingParamListTypes>();

const OutingStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='outing'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='outing' component={HomeContainer} />
      <Stack.Screen name='courseRecommendation' component={HomeContainer} />
      <Stack.Screen name='placeRecommendation' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default OutingStackNavigation;
