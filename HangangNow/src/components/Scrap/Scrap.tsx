import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { EventType } from '@typedef/components/Home/home.types';
import { LeafletTypes } from '@typedef/components/Leaflet/leaflet.types';
import { ScrapTabTypes } from '@typedef/components/Scrap/scrap.types';
import { CourseType, PlaceType } from '@typedef/components/Trip/trip.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const { width } = Dimensions.get('screen');

type Props = {
  tab: ScrapTabTypes;
  setTab: React.Dispatch<React.SetStateAction<ScrapTabTypes>>;
  leaflets: LeafletTypes[];
  onLeafletPressed: (item: LeafletTypes) => void;
  selectedLeaflet: LeafletTypes | null;
  setSelectedLeaflet: React.Dispatch<React.SetStateAction<LeafletTypes | null>>;
  events: EventType[];
  onEventPressed: (id: number) => void;
  places: PlaceType[];
  courses: CourseType[];
  onCoursePressed: (item: CourseType) => void;
};

const Scrap = ({
  tab,
  setTab,
  leaflets,
  onLeafletPressed,
  selectedLeaflet,
  setSelectedLeaflet,
  events,
  onEventPressed,
  places,
  courses,
  onCoursePressed,
}: Props) => {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.default.white }}>
        <CHeaderContainer title='스크랩 모아보기' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => setTab('place')}
            style={{
              width: 68,
              height: 28,
              borderRadius: 16,
              backgroundColor: tab === 'place' ? '#3dc8e4' : '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo[tab === 'place' ? 'white' : 'black'] },
              ]}>
              {'장소'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('course')}
            style={{
              width: 68,
              height: 28,
              borderRadius: 16,
              backgroundColor: tab === 'course' ? '#3dc8e4' : '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo[tab === 'course' ? 'white' : 'black'] },
              ]}>
              {'코스'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('leaflet')}
            style={{
              width: 68,
              height: 28,
              borderRadius: 16,
              backgroundColor: tab === 'leaflet' ? '#3dc8e4' : '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo[tab === 'leaflet' ? 'white' : 'black'] },
              ]}>
              {'전단지'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('event')}
            style={{
              width: 68,
              height: 28,
              borderRadius: 16,
              backgroundColor: tab === 'event' ? '#3dc8e4' : '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo[tab === 'event' ? 'white' : 'black'] },
              ]}>
              {'이벤트'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 20,
            borderRadius: 4,
            backgroundColor: '#f1f1f1',
          }}>
          {tab === 'place' && (
            <FlatList
              data={places}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    disabled
                    style={{
                      height: 48,
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_15,
                        { color: colors.typo.black },
                      ]}>{`${item.name}`}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: colors.typo.black + 'cc',
                    }}></View>
                </>
              )}
            />
          )}
          {tab === 'course' && (
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() => onCoursePressed(item)}
                    style={{
                      height: 48,
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_15,
                        { color: colors.typo.black },
                      ]}>{`${item.name}`}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: colors.typo.black + 'cc',
                    }}></View>
                </>
              )}
            />
          )}
          {tab === 'leaflet' && (
            <FlatList
              data={leaflets}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() => onLeafletPressed(item)}
                    style={{
                      height: 48,
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_15,
                        { color: colors.typo.black },
                      ]}>{`[${item.parkName}] ${item.name}`}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: colors.typo.black + 'cc',
                    }}></View>
                </>
              )}
            />
          )}
          {tab === 'event' && (
            <FlatList
              data={events}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() => onEventPressed(item.id)}
                    style={{
                      height: 48,
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_15,
                        { color: colors.typo.black },
                      ]}>{`[${item.title}]`}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: colors.typo.black + 'cc',
                    }}></View>
                </>
              )}
            />
          )}
        </View>
      </ScrollView>
      <ReactNativeModal
        onBackdropPress={() => setSelectedLeaflet(null)}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={selectedLeaflet !== null}>
        <View style={{ width: width - 40 }}>
          <Image
            style={{ width: width - 40, height: ((width - 40) / 3) * 4 }}
            source={{ uri: selectedLeaflet?.photoUrl }}
          />
          <View style={{ marginTop: 20 }}>
            <CButton
              type='secondary'
              label='전화 주문하기'
              onPressed={() => {
                Linking.openURL(`tel:${selectedLeaflet?.call}`);
              }}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CButton label='확인' onPressed={() => setSelectedLeaflet(null)} />
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Scrap;
