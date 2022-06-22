import HomeContainer from '@components/Home/containers/HomeContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import MainTabNavigationContainer from '@routes/containers/MainTabNavigationContainer';
import MainTabNavigation from '@routes/components/MainTabNavigation';

const Stack = createNativeStackNavigator<MainStackParamListTypes>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='emailLogIn'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='emailLogIn' component={HomeContainer} />
      <Stack.Screen name='emailSignUp' component={HomeContainer} />
      {/* web view kakaoLogIn */}
      <Stack.Screen name='findAccount' component={HomeContainer} />

      <Stack.Group key='surroundingFacility'>
        <Stack.Screen name='email' component={HomeContainer} />
        <Stack.Screen name='password' component={HomeContainer} />
        <Stack.Screen name='termsAndConditions' component={HomeContainer} />
      </Stack.Group>

      <Stack.Group key='surroundingFacility'>
        <Stack.Screen name='findIdByPersonalInfo' component={HomeContainer} />
        <Stack.Screen name='findPasswordByEmail' component={HomeContainer} />
      </Stack.Group>

      <Stack.Screen name='mainTab' component={MainTabNavigationContainer} />

      <Stack.Group key='surroundingFacility'>
        <Stack.Screen name='surroundingFacility' component={HomeContainer} />
        <Stack.Screen name='convenientFacility' component={HomeContainer} />
        <Stack.Screen name='foodFacility' component={HomeContainer} />
        <Stack.Screen name='sportsFacility' component={HomeContainer} />
      </Stack.Group>

      <Stack.Group key='outing'>
        <Stack.Screen name='outing' component={HomeContainer} />
        <Stack.Screen name='courseRecommendation' component={HomeContainer} />
        <Stack.Screen name='placeRecommendation' component={HomeContainer} />
      </Stack.Group>

      <Stack.Group key='home'>
        <Stack.Screen name='home' component={HomeContainer} />
        <Stack.Screen name='eventBanner' component={HomeContainer} />
        <Stack.Screen name='flyerBanner' component={HomeContainer} />
        <Stack.Screen name='hangangRecommendation' component={HomeContainer} />
      </Stack.Group>

      <Stack.Group key='hangangNow'>
        <Stack.Screen name='hangangNow' component={HomeContainer} />
        <Stack.Screen name='parkInfo' component={HomeContainer} />
        <Stack.Screen name='clothesByWeather' component={HomeContainer} />
        <Stack.Screen name='hangangMap' component={HomeContainer} />
      </Stack.Group>

      <Stack.Group key='myPage'>
        <Stack.Screen name='myPage' component={HomeContainer} />
        <Stack.Screen name='hangangTypeCheck' component={HomeContainer} />
        <Stack.Screen name='placeScrap' component={HomeContainer} />
        <Stack.Screen name='calendar' component={HomeContainer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
