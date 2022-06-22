import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { KakaoLogInStackParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<KakaoLogInStackParamListTypes>();

const KakaoLogInStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='logIn'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='logIn' component={HomeContainer} />
      <Stack.Screen name='signUp' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default KakaoLogInStackNavigation;
