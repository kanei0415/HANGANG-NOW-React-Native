import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { WEB_VIEW_ORIGIN } from '@libs/webview';
import { EventType } from '@typedef/components/Home/home.types';
import React, { RefObject } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const { width } = Dimensions.get('screen');

type Props = {
  event: EventType;
  mapRef: RefObject<WebView>;
};

const EventDetail = ({ event, mapRef }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='이벤트 모아보기' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_20,
            { color: colors.typo.black },
          ]}>
          {event.title}
        </Text>
        <Image
          style={{
            width: width - 40,
            height: (width / 32) * 22,
            borderRadius: 4,
            marginTop: 16,
          }}
          source={{ uri: event.photoUrl }}
        />
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 20 },
          ]}>
          {event.content}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 32 },
          ]}>
          {'기본 정보'}
        </Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: '#949090', marginTop: 12 },
          ]}>{`• 기간: ${event.startDate} ~ ${event.endDate}
• 시간: ${event.eventTime}
• 장소: ${event.address}
• 요금: ${event.price === '무료' ? 0 : event.price}원
• 주최: ${event.host}
• 주관: ${event.management}`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 32 },
          ]}>
          {'장소'}
        </Text>
        <WebView
          scrollEnabled={false}
          ref={mapRef}
          style={{ width: width - 40, height: width - 40, marginTop: 12 }}
          source={{ uri: WEB_VIEW_ORIGIN + '/eventDetail' }}
        />
      </View>
    </ScrollView>
  );
};

export default EventDetail;
