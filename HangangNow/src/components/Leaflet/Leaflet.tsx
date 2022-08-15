import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('screen');

type Props = {
  onPartnersEnrollPressed: () => void;
};

const Leaflet = ({ onPartnersEnrollPressed }: Props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='전단지 모아보기' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>{`종이 전단지를 한 손에서 보고
수수료 없이 전화 주문하세요!`}</Text>
        <TouchableOpacity
          style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_15,
              { color: colors.typo.black, marginRight: 16 },
            ]}>
            {'한강별 보기'}
          </Text>
          <Image source={images.components.Leaflet.downArrow} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onPartnersEnrollPressed}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_14,
            { color: colors.typo.gray.middle },
          ]}>
          {'업체정보 등록 · 수정 요청'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Leaflet;
