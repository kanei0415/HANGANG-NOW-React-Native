import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { TripFindResultTypes } from '@typedef/components/Trip/trip.types';
import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  result: TripFindResultTypes;
  onItemPressed: (id: number) => void;
};

const TripFindResult = ({ result, onItemPressed }: Props) => {
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
          renderItem={({ item }) => (
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
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default TripFindResult;
