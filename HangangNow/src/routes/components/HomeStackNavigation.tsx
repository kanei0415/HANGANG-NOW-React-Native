import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<HomeParamListTypes>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='home' component={HomeContainer} />
      <Stack.Screen name='eventBanner' component={HomeContainer} />
      <Stack.Screen name='flyerBanner' component={HomeContainer} />
      <Stack.Screen name='hangangRecommendation' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
