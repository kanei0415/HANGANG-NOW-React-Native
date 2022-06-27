import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Splash = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.main.primary }}>
      <View style={{ marginTop: 44 }}>
        <Image
          style={{ width: '100%' }}
          source={images.components.Splash.line}
        />
      </View>
      <View style={{ paddingLeft: 16, marginTop: 44 }}>
        <Image source={images.components.Splash.text} />
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          marginBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.white,
            },
          ]}>
          {'데이터 연결(Wi-fi)이 원활한 곳에서의 사용을 권장합니다.'}
        </Text>
      </View>
    </View>
  );
};

export default Splash;
