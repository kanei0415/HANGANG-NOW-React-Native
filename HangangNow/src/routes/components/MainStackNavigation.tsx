import DeleteAccountContainer from '@components/DeleteAccount/containers/DeleteAccountContainer';
import DeleteAccountStep2Container from '@components/DeleteAccount/containers/DeleteAccountStep2Container';
import DiaryContainer from '@components/Diary/containers/DiaryContainer';
import EventContainer from '@components/Event/containers/EventContainer';
import EventDetailContainer from '@components/Event/containers/EventDetailContainer';
import FacilityMapContainer from '@components/Facility/containers/FacilityMapContainer';
import FindIDContainer from '@components/FindID/containers/FindIDContainer';
import FindIDStep2Container from '@components/FindID/containers/FindIDStep2Container';
import FindPWContainer from '@components/FindPW/containers/FindPWContainer';
import FindPWDoneContainer from '@components/FindPW/containers/FindPWDoneContainer';
import HangangDetailContainer from '@components/HangangDetail/containers/HangangDetailContainer';
import MapFindContainer from '@components/HangangNow/containers/MapFindContainer';
import ParkFindContainer from '@components/HangangNow/containers/ParkFindContainer';
import LeafletContainer from '@components/Leaflet/containers/LeafletContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import MbtiContainer from '@components/Mbti/containers/MbtiContainer';
import MbtiInspectContaienr from '@components/Mbti/containers/MbtiInspectContainer';
import MbtiResultCotainer from '@components/Mbti/containers/MbtiResultContainer';
import CalendarDateDetailContainer from '@components/MyPage/containers/CalendarDateDetailContainer';
import PartnersEnrollContainer from '@components/PartnersEnroll/containers/PartnersEnrollContainer';
import PreviewContainer from '@components/Preview/containers/PreviewContainer';
import ScrapContainer from '@components/Scrap/containers/ScrapContainer';
import SettingContainer from '@components/Setting/containers/SettingContainer';
import TermContainer from '@components/Setting/containers/TermContainer';
import SignupContainer from '@components/Signup/containers/SignupContainer';
import SignupDoneContainer from '@components/Signup/containers/SignupDoneContainer';
import SignupStep2Container from '@components/Signup/containers/SignupStep2Container';
import SignupStep3Container from '@components/Signup/containers/SignupStep3Container';
import TermDetailContainer from '@components/TermDetail/containers/TermDetailContainer';
import TripFindContainer from '@components/Trip/containers/TripFindContainer';
import TripFindDetailContainer from '@components/Trip/containers/TripFindDetailContainer';
import TripFindResultContainer from '@components/Trip/containers/TripFindResultContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigationContainer from '@routes/containers/MainTabNavigationContainer';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React from 'react';

const Stack = createNativeStackNavigator<MainStackParamListTypes>();

type Props = {
  login: boolean;
  loginResponse: LoginResponseBody | null;
};

const MainStackNavigation = ({ login, loginResponse }: Props) => {
  return (
    <Stack.Navigator
      initialRouteName={login && loginResponse != null ? 'mainTab' : 'login'}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name='login' component={LoginContainer} />
      <Stack.Screen name='preview' component={PreviewContainer} />
      <Stack.Screen name='termDetail' component={TermDetailContainer} />
      <Stack.Screen name='signup' component={SignupContainer} />
      <Stack.Screen name='signupStep2' component={SignupStep2Container} />
      <Stack.Screen name='signupStep3' component={SignupStep3Container} />
      <Stack.Screen name='signupDone' component={SignupDoneContainer} />
      <Stack.Screen name='findID' component={FindIDContainer} />
      <Stack.Screen name='findIDStep2' component={FindIDStep2Container} />
      <Stack.Screen name='findPW' component={FindPWContainer} />
      <Stack.Screen name='findPWDone' component={FindPWDoneContainer} />
      <Stack.Screen
        name='mainTab'
        component={MainTabNavigationContainer}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen name='diary' component={DiaryContainer} />
      <Stack.Screen name='leaflet' component={LeafletContainer} />
      <Stack.Screen name='hangangDetail' component={HangangDetailContainer} />
      <Stack.Screen name='partnersEnroll' component={PartnersEnrollContainer} />

      <Stack.Group>
        <Stack.Screen name='mbti' component={MbtiContainer} />
        <Stack.Screen name='mbtiInspect' component={MbtiInspectContaienr} />
        <Stack.Screen name='mbtiResult' component={MbtiResultCotainer} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name='setting' component={SettingContainer} />
        <Stack.Screen
          name='calendarDateDetail'
          component={CalendarDateDetailContainer}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='deleteAccount' component={DeleteAccountContainer} />
        <Stack.Screen
          name='deleteAccountStep2'
          component={DeleteAccountStep2Container}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='mapfind' component={MapFindContainer} />
        <Stack.Screen name='parkfind' component={ParkFindContainer} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='tripFind' component={TripFindContainer} />
        <Stack.Screen
          name='tripFindResult'
          component={TripFindResultContainer}
        />
        <Stack.Screen
          name='tripFindDetail'
          component={TripFindDetailContainer}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='event' component={EventContainer} />
        <Stack.Screen name='eventDetail' component={EventDetailContainer} />
      </Stack.Group>
      <Stack.Screen name='scrap' component={ScrapContainer} />
      <Stack.Screen name='facilityMap' component={FacilityMapContainer} />
      <Stack.Screen name='term' component={TermContainer} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
