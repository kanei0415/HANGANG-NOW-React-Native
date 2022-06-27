import Login from '@components/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React from 'react';

const Stack = createNativeStackNavigator<MainStackParamListTypes>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='login' component={Login} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
