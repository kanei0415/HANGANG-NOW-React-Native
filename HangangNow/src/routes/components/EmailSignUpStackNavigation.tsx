import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { EmailSignUpStackParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<EmailSignUpStackParamListTypes>();

const EmailSignUpStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='email'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='email' component={HomeContainer} />
      <Stack.Screen name='password' component={HomeContainer} />
      <Stack.Screen name='termsAndConditions' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default EmailSignUpStackNavigation;
