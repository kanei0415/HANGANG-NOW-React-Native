import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SurroundingFacilityParamListTypes } from '@typedef/routes/navigation.types';

const Stack = createNativeStackNavigator<SurroundingFacilityParamListTypes>();

const SurroundingFacilityStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='surroundingFacility'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='surroundingFacility' component={HomeContainer} />
      <Stack.Screen name='convenientFacility' component={HomeContainer} />
      <Stack.Screen name='foodFacility' component={HomeContainer} />
      <Stack.Screen name='sportsFacility' component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default SurroundingFacilityStackNavigation;
