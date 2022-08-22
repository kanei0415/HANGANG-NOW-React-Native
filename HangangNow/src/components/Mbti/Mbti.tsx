import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

type Props = {
  onBackPressed: () => void;
  onTestPressed: () => void;
  onSharePressed: () => void;
};

const Mbti = ({ onBackPressed, onTestPressed, onSharePressed }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <TouchableOpacity
        onPress={onBackPressed}
        style={{ paddingLeft: 20, paddingTop: 14 }}>
        <Image source={images.components.Mbti.back} />
      </TouchableOpacity>
      <View style={{ marginTop: 100, paddingLeft: 20 }}>
        <Image source={images.components.Mbti.text} />
      </View>
      <View style={{ marginTop: 24, paddingLeft: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.main.primary },
          ]}>
          {'나의 한강유형 찾기'}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: height * 0.85 - 120,
          width: width,
        }}>
        <View style={{ paddingHorizontal: 20 }}>
          <CButton label='테스트 하기' onPressed={onTestPressed} />

          <TouchableOpacity
            disabled
            onPress={onSharePressed}
            style={{ marginTop: 24, alignItems: 'center' }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.gray.dark },
              ]}>
              {''}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Mbti;
