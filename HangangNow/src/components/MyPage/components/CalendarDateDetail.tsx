import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { formatDate } from '@libs/factory';
import { TabTypes } from '@typedef/components/MyPage/mypage.types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  date: Date;
  tab: TabTypes | null;
};

const CalendarDateDetail = ({ date }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title={formatDate(date, 'YYYY년 MM월')} />
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>
          {formatDate(date, 'dd일 day요일')}
        </Text>
        <View
          style={{
            borderRadius: 4,
            backgroundColor: '#f1f1f1',
            paddingVertical: 20,
            paddingHorizontal: 12,
            marginTop: 16,
          }}></View>
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 24 }}>
          <Image source={images.components.MyPage.add} />
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_14,
              { color: colors.main.primary, marginTop: 12 },
            ]}>
            {'메모 추가하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CalendarDateDetail;
