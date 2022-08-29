import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import {
  ParkTypes,
  PARK_DATA_TABLE,
  PARK_TABLE,
} from '@typedef/components/Home/home.types';
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

const { width } = Dimensions.get('window');

type Props = {
  onHangangPressed: (id: number, name: string) => void;
};

const Facility = ({ onHangangPressed }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      style={{ backgroundColor: colors.default.white }}>
      <Image
        style={{
          width,
          position: 'absolute',
          top: 60,
          height: (width / 36) * 15,
        }}
        source={images.components.Facility.line}
      />
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.f_20,
          { color: colors.main.primary, marginTop: 12 },
        ]}>
        {'어디로 갈까요?'}
      </Text>
      <View style={{ marginTop: 20 }}>
        <CButton
          label='가장 가까운 한강 공원으로 가기'
          onPressed={() => onHangangPressed(0, '광나루한강공원')}
        />
      </View>
      <FlatList
        contentContainerStyle={{ marginTop: 20 }}
        scrollEnabled={false}
        numColumns={3}
        data={Object.keys(PARK_TABLE)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onHangangPressed(index + 1, item)}
            style={{
              width: (width - 80) / 3,
              height: (width - 80) / 3,
              borderRadius: 4,
              backgroundColor: '#676767',
              marginRight: 20,
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <Image
              style={{ position: 'absolute' }}
              source={PARK_DATA_TABLE[PARK_TABLE[item as ParkTypes]].image}
            />
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_18,
                { color: colors.default.white },
              ]}>
              {item.split('한')[0]}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default Facility;
