import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainTabParamListTypes } from '@typedef/routes/navigation.types';
import SurroundingFacilityStackNavigationContainer from '@routes/containers/SurroundingFacilityStackNavigationContainer';
import OutingStackNavigationContainer from '@routes/containers/OutingStackNavigationContainer';
import HangangNowStackNavigationContainer from '@routes/containers/HangangNowStackNavigationContainer';
import HomeStackNavigationContainer from '@routes/containers/HomeStackNavigationContainer';
import MyPageStackNavigationContainer from '@routes/containers/MyPageStackNavigationContainer';

const Stack = createNativeStackNavigator<MainTabParamListTypes>();

const MainTabNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name='surroundingFacility'
        component={SurroundingFacilityStackNavigationContainer}
      />
      <Stack.Screen name='outing' component={OutingStackNavigationContainer} />
      <Stack.Screen name='home' component={HomeStackNavigationContainer} />
      <Stack.Screen
        name='hangangNow'
        component={HangangNowStackNavigationContainer}
      />
      <Stack.Screen name='myPage' component={MyPageStackNavigationContainer} />
    </Stack.Navigator>
  );
};

export default MainTabNavigation;
