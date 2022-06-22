import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainTabParamListTypes } from '@typedef/routes/navigation.types';
import HomeContainer from '@components/Home/containers/HomeContainer';

const Stack = createNativeStackNavigator<MainTabParamListTypes>();

const MainTabNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='surroundingFacility' component={HomeContainer} />
      <Stack.Screen name='outing' component={HomeContainer} />
      <Stack.Screen name='home' component={HomeContainer} />
      <Stack.Screen name='hangangNow' component={HomeContainer} />
      <Stack.Screen name='myPage' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default MainTabNavigation;
