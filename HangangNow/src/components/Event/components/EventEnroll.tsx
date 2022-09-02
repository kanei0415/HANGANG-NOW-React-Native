import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, View } from 'react-native';

const EventEnroll = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='행사정보 등록 · 수정' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>{`한강에서 이루어지는
다양한 행사를 제보해주세요.`}</Text>
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
          ]}>{`· 제보자 성명 / 연락처`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 16 },
          ]}>{`2. 등록 구분 (신규 / 수정)`}</Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: '#a4a4a3', marginTop: 8 },
          ]}>{`· 행사명 / 행사내용 (100자이내) / 일시 / 장소
 요금 / 메인 페이지 링크 / 주최 / 상세주소 (지도 등록용)`}</Text>
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
          ]}>{`· 메인 포스터 (메인화면 게시용) / 대표 사진 (상세보기 등록용)`}</Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 16 },
          ]}>{`4. 버스킹 제보 팀의 경우`}</Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: '#a4a4a3', marginTop: 8 },
          ]}>{`· 팀소개 멘트 / 기존 활동 포트폴리오 (간략히)`}</Text>
      </View>
    </View>
  );
};

export default EventEnroll;
