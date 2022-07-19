import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamListTypes } from '@typedef/routes/navigation.types';
import HomeContainer from '@components/Home/containers/HomeContainer';
import MyPageContainer from '@components/MyPage/containers/MyPageContainer';

const Tab = createBottomTabNavigator<MainTabParamListTypes>();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name='home' component={HomeContainer} />
      <Tab.Screen name='mypage' component={MyPageContainer} />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
