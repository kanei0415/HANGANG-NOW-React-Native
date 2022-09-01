import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, View } from 'react-native';

const PartnersEnroll = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='업체정보 등록 · 수정' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>{`종이 전단지를 한 손에서 보고
수수료 없이 전화 주문하세요!`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_16,
            { color: colors.typo.black, marginTop: 32 },
          ]}>{`제출: hang2022@gmail.com`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_16,
            { color: colors.typo.black, marginTop: 32 },
          ]}>{`작성 양식`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 16 },
          ]}>{`1. 기본 정보`}</Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: '#a4a4a3', marginTop: 8 },
          ]}>{`· 제보자 성명 / 연락처
· 업체명 / 상세주소`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 16 },
          ]}>{`2. 등록 구분 (신규 / 수정)`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 16 },
          ]}>{`3. 등록 내용`}</Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: '#a4a4a3', marginTop: 8 },
          ]}>{`· 메인 전단지 혹은 포스터
· 주문 받을 번호 / 상세주소 (지도 등록용)`}</Text>
      </View>
    </View>
  );
};

export default PartnersEnroll;
