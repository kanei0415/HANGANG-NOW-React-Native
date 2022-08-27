import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import {
  CourseType,
  PlaceType,
  TripFindResultTypes,
} from '@typedef/components/Trip/trip.types';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  result: TripFindResultTypes;
  onItemPressed: (id: number) => void;
  placeLiked: boolean[];
  courseLiked: boolean[];
  onPlaceLikePressed: (item: PlaceType, index: number) => void;
  onCourseLikePressed: (item: CourseType, index: number) => void;
};

const TripFindResult = ({
  result,
  onItemPressed,
  placeLiked,
  courseLiked,
  onCourseLikePressed,
  onPlaceLikePressed,
}: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='나들이' />
      <View style={{ padding: 20 }}>
        <Text
          style={[NotoSans.Medium, NotoSans.f_17, { color: colors.typo.main }]}>
          {'코스 추천'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 32 },
          ]}>
          {`나, 그리고 우리에게 어울리는
한강 “코스”를 추천합니다.`}
        </Text>
        <FlatList
          contentContainerStyle={{ marginTop: 24 }}
          scrollEnabled={false}
          data={result.courses}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onItemPressed(item.id)}
              style={{
                borderRadius: 4,
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 12,
                paddingVertical: 16,
                marginBottom: 16,
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {item.name}
              </Text>
              <Text
                style={[
                  NotoSans.Regular,
                  NotoSans.f_13,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>{`출발지: ${item.startPlaceName}}`}</Text>
              <Text
                style={[
                  NotoSans.Regular,
                  NotoSans.f_13,
                  { color: colors.typo.black },
                ]}>{`코스 길이: ${item.length} km`}</Text>
              <TouchableOpacity
                style={{
                  padding: 6,
                  backgroundColor: '#000000cc',
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 12,
                  bottom: 8,
                }}
                onPress={(e) => {
                  onCourseLikePressed(item, index);
                  e.stopPropagation();
                }}>
                <Image
                  source={
                    images.components.common[
                      courseLiked[index] ? 'like' : 'unlike'
                    ]
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text
          style={[NotoSans.Medium, NotoSans.f_17, { color: colors.typo.main }]}>
          {'장소 추천'}
        </Text>
        <FlatList
          contentContainerStyle={{ marginTop: 24 }}
          scrollEnabled={false}
          data={result.places}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              disabled
              style={{
                borderRadius: 4,
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 12,
                paddingVertical: 16,
                marginBottom: 16,
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {item.name}
              </Text>
              <Text
                style={[
                  NotoSans.Regular,
                  NotoSans.f_13,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>{`${item.address.sido} ${item.address.gu} ${item.address.detail}`}</Text>
              <TouchableOpacity
                style={{
                  padding: 6,
                  backgroundColor: '#000000cc',
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 12,
                  bottom: 8,
                }}
                onPress={(e) => {
                  onPlaceLikePressed(item, index);
                  e.stopPropagation();
                }}>
                <Image
                  source={
                    images.components.common[
                      placeLiked[index] ? 'like' : 'unlike'
                    ]
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default TripFindResult;
