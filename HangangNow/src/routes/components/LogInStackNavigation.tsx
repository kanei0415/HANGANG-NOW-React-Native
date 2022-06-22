import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LogInStackParamListTypes } from '@typedef/routes/navigation.types';
import KakaoLogInStackNavigationContainer from '@routes/containers/KakaoLogInStackNavigationContainer';
import EmailSignUpStackNavigationContainer from '@routes/containers/EmailSignUpStackNavigationContainer';
import FindAccountStackNavigationContainer from '@routes/containers/FindAccountStackNavigationContainer';

const Stack = createNativeStackNavigator<LogInStackParamListTypes>();

const LogInStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='emailLogIn'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='emailLogIn' component={HomeContainer} />
      <Stack.Screen
        name='emailSignUp'
        component={EmailSignUpStackNavigationContainer}
      />
      <Stack.Screen
        name='kakaoLogIn'
        component={KakaoLogInStackNavigationContainer}
      />
      <Stack.Screen
        name='findAccount'
        component={FindAccountStackNavigationContainer}
      />
    </Stack.Navigator>
  );
};

export default LogInStackNavigation;
