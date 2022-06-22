import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyPageParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<MyPageParamListTypes>();

const MyPageStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='myPage'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='myPage' component={HomeContainer} />
      <Stack.Screen name='hangangTypeCheck' component={HomeContainer} />
      <Stack.Screen name='placeScrap' component={HomeContainer} />
      <Stack.Screen name='calendar' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default MyPageStackNavigation;
