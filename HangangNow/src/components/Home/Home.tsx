import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('screen');

type Props = {
  onLeafetPressed: () => void;
  onHangangDetailPressed: () => void;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  maxSize: number;
};

const Home = ({
  onLeafetPressed,
  onHangangDetailPressed,
  index,
  setIndex,
  maxSize,
}: Props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='한강나우' showBackPress={false} />
      <TouchableOpacity onPress={onLeafetPressed}>
        <Image
          style={{ width, height: (width / 9) * 2 }}
          source={images.components.Home.mainbanner}
        />
        <View
          style={{
            position: 'absolute',
            width: 136,
            height: 24,
            borderRadius: 4,
            backgroundColor: colors.default.black + 'aa',
            bottom: 8,
            right: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.typo.white },
            ]}>
            {'한강 전단지 모아보기 >'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>
          {'이벤트 · 축제 · 버스킹'}
        </Text>
      </View>
      <View style={{ height: (width / 36) * 22, width }}>
        <SwiperFlatList
          index={index}
          onChangeIndex={(item) => setIndex(item.index)}
          scrollEnabled={false}
          style={{ flex: 1 }}
          data={['', '', '']}
          renderItem={({ item, index }) => (
            <View
              style={{
                width,
                backgroundColor: '#676767',
              }}></View>
          )}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 40,
            height: 24,
            borderRadius: 4,
            backgroundColor: colors.default.black + 'aa',
            top: 12,
            left: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.typo.white },
            ]}>
            {`${index + 1}/${maxSize}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 118,
            height: 24,
            borderRadius: 4,
            backgroundColor: colors.default.black + 'aa',
            bottom: 8,
            right: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.typo.white },
            ]}>
            {'이벤트 모아보기 >'}
          </Text>
        </TouchableOpacity>
        {index > 0 && (
          <TouchableOpacity
            onPress={() => setIndex((prev) => prev - 1)}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              top: ((width / 36) * 22) / 2,
              left: 12,
            }}>
            <Image source={images.components.Home.prev} />
          </TouchableOpacity>
        )}
        {index < maxSize - 1 && (
          <TouchableOpacity
            onPress={() => setIndex((prev) => prev + 1)}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              top: ((width / 36) * 22) / 2,
              left: width - 32,
            }}>
            <Image source={images.components.Home.next} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>
          {'한눈에 한강 파악하기'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
