import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { ParkDataType } from '@typedef/components/Home/home.types';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const { width, height } = Dimensions.get('screen');

type Props = {
  data: ParkDataType;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const HangangDetail = ({ data, visible, setVisible }: Props) => {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.default.white }}>
        <CHeaderContainer title={`${data.name} 파악하기`} />
        <View style={{ padding: 20 }}>
          <Image
            style={{ borderRadius: 4, width: width - 40 }}
            source={data.image}
          />
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 24 },
            ]}>
            {data.h1}
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.typo.gray.middle,
                marginTop: 12,
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  { color: colors.typo.gray.middle },
                ]}>
                {'더 알아보기'}
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 40 },
            ]}>
            {'주소'}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: '#949090', marginTop: 8 },
            ]}>
            {data.address}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'안내센터'}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: '#949090', marginTop: 8 },
            ]}>
            {data.tel}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'시설 현황'}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: '#949090', marginTop: 8 },
            ]}>
            {data.facility}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'즐길 거리'}
          </Text>
          {data.spot.map((item, index) => (
            <View key={index} style={{ marginTop: 12 }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.main.primary },
                ]}>
                {item.name}
              </Text>
              <View style={{ marginTop: 12, flexDirection: 'row' }}>
                {item.tag.map((item, index) => (
                  <View
                    key={item}
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 8,
                      borderRadius: 99,
                      borderWidth: 1,
                      borderColor: '#a4a4a3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text
                      style={[
                        NotoSans.Regular,
                        NotoSans.f_12,
                        { color: colors.typo.gray.middle },
                      ]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
      <ReactNativeModal
        style={{
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}>
        <View
          style={{
            width: width - 40,
            maxHeight: height - 40,
            padding: 20,
            backgroundColor: colors.default.white,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginTop: 12 },
            ]}>
            {data.name}
          </Text>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_14,
              { color: colors.typo.black, marginTop: 16 },
            ]}>
            {data.detail}
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_10,
                { color: '#a4a4a3', marginTop: 8 },
              ]}>
              {'출처: 한국관광공사'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={{ position: 'absolute', top: 16, right: 16 }}>
            <Image source={images.components.common.close} />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default HangangDetail;
