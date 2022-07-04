import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamListTypes } from '@typedef/routes/navigation.types';
import HomeContainer from '@components/Home/containers/HomeContainer';

const Tab = createBottomTabNavigator<MainTabParamListTypes>();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name='home' component={HomeContainer} />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
