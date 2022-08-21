import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamListTypes } from '@typedef/routes/navigation.types';
import HomeContainer from '@components/Home/containers/HomeContainer';
import MyPageContainer from '@components/MyPage/containers/MyPageContainer';
import HangangNowContainer from '@components/HangangNow/containers/HangangNowContainer';
import { Text } from 'react-native';
import NotoSans from '@assets/font';
import colors from '@assets/colors';
import TripContainer from '@components/Trip/containers/TripContainer';
import FacilityContainer from '@components/Facility/containers/FacilityContainer';

const Tab = createBottomTabNavigator<MainTabParamListTypes>();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_12,
                {
                  color: focused
                    ? colors.main.primary
                    : colors.typo.gray.middle,
                },
              ]}>
              {'한강나우'}
            </Text>
          ),
        }}
        name='hangangNow'
        component={HangangNowContainer}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_12,
                {
                  color: focused
                    ? colors.main.primary
                    : colors.typo.gray.middle,
                },
              ]}>
              {'나들이'}
            </Text>
          ),
        }}
        name='trip'
        component={TripContainer}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_12,
                {
                  color: focused
                    ? colors.main.primary
                    : colors.typo.gray.middle,
                },
              ]}>
              {'홈'}
            </Text>
          ),
        }}
        name='home'
        component={HomeContainer}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_12,
                {
                  color: focused
                    ? colors.main.primary
                    : colors.typo.gray.middle,
                },
              ]}>
              {'주변시설'}
            </Text>
          ),
        }}
        name='facility'
        component={FacilityContainer}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_12,
                {
                  color: focused
                    ? colors.main.primary
                    : colors.typo.gray.middle,
                },
              ]}>
              {'마이페이지'}
            </Text>
          ),
        }}
        name='mypage'
        component={MyPageContainer}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
