import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { MbtiQuestionItemTypes } from '@typedef/components/Mbti/mbti.types';
import React, { RefObject } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import SwiperFlatList from 'react-native-swiper-flatlist';

const questionList: MbtiQuestionItemTypes[] = [
  {
    label: `날씨가 좋을 때
|^가장 먼저 가고 싶은 곳|은?`,
    option1: '사람이 북적이는 핫플레이스',
    option2: '나만 알고 있는 피크닉 공간',
  },
  {
    label: `퇴근(하교)후 들르게 된 
한강공원! |^당신은?|`,
    option1: '근처 사는 친구에게 연락한다',
    option2: '혼자 산책 후 귀가한다',
  },
  {
    label: `멀리 여행을
가게 되었다! |^당신은?|`,
    option1: '숙소, 항공권, 맛집, 코스를 모두 계획한다',
    option2: '숙소, 항공권만 예약하면 끝! 가서 정한다',
  },
  {
    label: `한강 피크닉! 
|^돗자리는?|`,
    option1: '이미 준비되어 있지! 내가 들고 간다',
    option2: '손은 편하게! 가서 빌린다',
  },
  {
    label: `|^지방에서 올라온 친구|가
한강에 가자고 한다!`,
    option1: '한강에서 즐기는 캠핑',
    option2: '한강에서의 물멍',
  },
  {
    label: `|^이번 여름휴가!|
어디로 갈래?`,
    option1: '스릴 넘치는 놀이기구가 가득한 워터파크',
    option2: '나만의 휴가를 즐길 수 있는 호캉스',
  },
  {
    label: `|^해외여행이 풀린 지금!|
먼저 가고 싶은 곳은?`,
    option1: '넓은 바다와 눈부신 햇살이 반기는 하와이',
    option2: '빌딩숲과 화려한 조명이 가득한 뉴욕',
  },
  {
    label: `|^뚝섬 한강공원에|
방문한 이유는?`,
    option1: '자연과 함께하는 서울숲 산책로',
    option2: '서울 도시문화를 느낄 수 있는 자벌레',
  },
  {
    label: `|^주말 데이트 약속|을 잡고 있다!
당신이 검색 중인 것은?`,
    option1: '전시회',
    option2: '맛집',
  },
  {
    label: `밤에 한강을 방문하게 된 당신!
|^당신이 기다리는 것은?|`,
    option1: '한강 버스킹',
    option2: '친구와의 수다',
  },
];

const { width } = Dimensions.get('screen');

type Props = {
  index: number;
  scrollRef: RefObject<SwiperFlatList>;
  onAnswerSelected: (index: number, choice: 0 | 1) => void;
};

const MbtiInspect = ({ index, scrollRef, onAnswerSelected }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='나의 한강유형 찾기' />
      <View style={{ marginTop: 40, height: 20 }}>
        <View
          style={{
            position: 'absolute',
            left: 20,
            top: 8,
            width: width - 40,
            height: 4,
            borderRadius: 4,
            backgroundColor: '#f1f1f1',
          }}
        />
        <AnimatableView
          transition={'left'}
          style={{
            position: 'absolute',
            left: ((width - 20) / 10) * index + 20,
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: colors.main.primary,
          }}
        />
      </View>
      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.main.primary },
          ]}>{`${index + 1} / ${questionList.length}`}</Text>
      </View>
      <SwiperFlatList
        ref={scrollRef}
        style={{ flex: 1 }}
        showPagination={false}
        scrollEnabled={false}
        horizontal
        data={questionList}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
              <View>
                <Text
                  style={[
                    NotoSans.Bold,
                    NotoSans.f_20,
                    { textAlign: 'center', textAlignVertical: 'center' },
                  ]}>
                  {(item.label as string).split('|').map((item) => (
                    <Text
                      style={{
                        color: item.startsWith('^')
                          ? colors.main.primary
                          : colors.typo.black,
                      }}>
                      {item.replace('^', '')}
                    </Text>
                  ))}
                </Text>
                <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
                  <CButton
                    type='secondary'
                    label={item.option1}
                    onPressed={() => onAnswerSelected(index, 0)}
                  />
                  <View style={{ height: 12 }} />
                  <CButton
                    type='secondary'
                    label={item.option2}
                    onPressed={() => onAnswerSelected(index, 1)}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MbtiInspect;
