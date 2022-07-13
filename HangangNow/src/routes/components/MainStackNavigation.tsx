import FindIDContainer from '@components/FindID/containers/FindIDContainer';
import FindIDStep2Container from '@components/FindID/containers/FindIDStep2Container';
import FindPWContainer from '@components/FindPW/containers/FindPWContainer';
import FindPWDoneContainer from '@components/FindPW/containers/FindPWDoneContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import SignupContainer from '@components/Signup/containers/SignupContainer';
import SignupStep2Container from '@components/Signup/containers/SignupStep2Container';
import SignupStep3Container from '@components/Signup/containers/SignupStep3Container';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigationContainer from '@routes/containers/MainTabNavigationContainer';
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
      <Stack.Screen name='login' component={LoginContainer} />
      <Stack.Screen name='signup' component={SignupContainer} />
      <Stack.Screen name='signupStep2' component={SignupStep2Container} />
      <Stack.Screen name='signupStep3' component={SignupStep3Container} />
      <Stack.Screen name='findID' component={FindIDContainer} />
      <Stack.Screen name='findIDStep2' component={FindIDStep2Container} />
      <Stack.Screen name='findPW' component={FindPWContainer} />
      <Stack.Screen name='findPWDone' component={FindPWDoneContainer} />
      <Stack.Screen name='mainTab' component={MainTabNavigationContainer} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
