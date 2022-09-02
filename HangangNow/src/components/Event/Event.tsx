import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { EventType } from '@typedef/components/Home/home.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('screen');

type Props = {
  events: EventType[];
  onItemPressed: (id: number) => void;
  liked: boolean[];
  onLikePressed: (item: EventType, index: number) => void;
  onEnrollPressed: () => void;
};

const Event = ({
  events,
  onItemPressed,
  liked,
  onLikePressed,
  onEnrollPressed,
}: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='이벤트 모아보기' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_20,
            { color: colors.typo.black },
          ]}>{`한강의 이벤트 · 축제 · 버스킹 정보를 
한 번에 만나보세요!`}</Text>
        <View style={{ height: 20 }}></View>
        <FlatList
          data={events}
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onItemPressed(item.id)}
              style={{ marginRight: 20, marginBottom: 20 }}>
              <Image
                style={{
                  width: (width - 60) / 2,
                  height: ((width - 60) * 2) / 3,
                }}
                source={{ uri: item.photoUrl }}
              />
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
                  onLikePressed(item, index);
                  e.stopPropagation();
                }}>
                <Image
                  source={
                    images.components.common[liked[index] ? 'like' : 'unlike']
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={onEnrollPressed}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 20,
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_14,
            { color: colors.typo.gray.middle },
          ]}>
          {'행사정보 등록 · 수정 요청'}
        </Text>
      </TouchableOpacity>
      <View style={{ height: 80 }}></View>
    </ScrollView>
  );
};

export default Event;
