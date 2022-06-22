import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FindAccountStackParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<FindAccountStackParamListTypes>();

const FindAccountStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='findIdByPersonalInfo'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='findIdByPersonalInfo' component={HomeContainer} />
      <Stack.Screen name='findPasswordByEmail' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default FindAccountStackNavigation;
