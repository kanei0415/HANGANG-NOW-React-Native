import colors from '@assets/colors';
import NotoSans from '@assets/font';
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
};

const Event = ({ events, onItemPressed }: Props) => {
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
          renderItem={({ item }) => (
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
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Event;
