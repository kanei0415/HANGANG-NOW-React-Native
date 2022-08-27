import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { WEB_VIEW_ORIGIN } from '@libs/webview';
import React, { RefObject } from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

type Props = {
  webviewRef: RefObject<WebView>;
  onLoadEnd: () => void;
};

const MapFind = ({ webviewRef, onLoadEnd }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='한강나우' />
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>{`지도를 통해 주차장 정보를
한눈에 확인하세요!`}</Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 32 },
          ]}>
          {'핀을 눌러 세부 정보를 확인하세요.'}
        </Text>
        <View style={{ marginTop: 20, flex: 1 }}>
          <WebView
            onLoadEnd={onLoadEnd}
            ref={webviewRef}
            style={{ borderRadius: 4 }}
            containerStyle={{ borderRadius: 4 }}
            source={{
              uri: WEB_VIEW_ORIGIN + '/hangangnow',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MapFind;
