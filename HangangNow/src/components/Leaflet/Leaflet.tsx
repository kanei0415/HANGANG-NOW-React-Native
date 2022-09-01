import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { ParkTypes, PARK_TABLE } from '@typedef/components/Home/home.types';
import { LeafletTypes } from '@typedef/components/Leaflet/leaflet.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const { width } = Dimensions.get('screen');

type Props = {
  onPartnersEnrollPressed: () => void;
  leaflets: LeafletTypes[];
  onItemPressed: (item: LeafletTypes) => void;
  selected: LeafletTypes | null;
  onBackPressed: () => void;
  onTelPressed: () => void;
  liked: boolean[];
  onLikePressed: (item: LeafletTypes, index: number) => void;
  visible: boolean;
  selectedPark: ParkTypes | null;
  onParkPressed: (park: ParkTypes) => void;
  onParkSelectPressed: () => void;
  onParkBackPressed: () => void;
  contentVisible: boolean;
  setContentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Leaflet = ({
  onPartnersEnrollPressed,
  leaflets,
  onItemPressed,
  selected,
  onBackPressed,
  onTelPressed,
  liked,
  onLikePressed,
  visible,
  selectedPark,
  onParkPressed,
  onParkSelectPressed,
  onParkBackPressed,
  contentVisible,
  setContentVisible,
}: Props) => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.default.white }}>
        <CHeaderContainer title='전단지 모아보기' />
        <View style={{ paddingLeft: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>{`종이 전단지를 한 손에서 보고
수수료 없이 전화 주문하세요!`}</Text>
          <TouchableOpacity
            onPress={onParkSelectPressed}
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo.black, marginRight: 16 },
              ]}>
              {selectedPark || '한강별 보기'}
            </Text>
            <Image source={images.components.Leaflet.downArrow} />
          </TouchableOpacity>
          <FlatList
            numColumns={2}
            style={{ marginTop: 20 }}
            data={leaflets}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => onItemPressed(item)}
                style={{ marginRight: 20, marginBottom: 20 }}>
                <Image
                  style={{
                    width: (width - 40) / 2,
                    height: ((width - 40) * 2) / 3,
                  }}
                  source={{ uri: item.photoUrl }}
                />
                <TouchableOpacity
                  style={{
                    padding: 6,
                    backgroundColor: '#000000cc',
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 12,
                    bottom: 8,
                  }}
                  onPress={(e) => {
                    onLikePressed(item, index);
                    e.stopPropagation();
                  }}>
                  <Image
                    source={
                      images.components.common[liked[index] ? 'like' : 'unlike']
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={onPartnersEnrollPressed}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 20,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_14,
              { color: colors.typo.gray.middle },
            ]}>
            {'업체정보 등록 · 수정 요청'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <ReactNativeModal
        onBackdropPress={onBackPressed}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={selected !== null}>
        <View style={{ width: width - 40 }}>
          {contentVisible ? (
            <View
              style={{
                width: width - 40,
                height: ((width - 40) / 3) * 4,
                padding: 20,
                backgroundColor: colors.default.white,
                borderRadius: 4,
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_14,
                  { color: colors.typo.black },
                ]}>
                {selected?.content}
              </Text>
            </View>
          ) : (
            <Image
              style={{ width: width - 40, height: ((width - 40) / 3) * 4 }}
              source={{ uri: selected?.photoUrl }}
            />
          )}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 20 }}>
              <CButton
                type='secondary'
                label='전화 주문하기'
                onPressed={onTelPressed}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CButton
                type='secondary'
                label={contentVisible ? '전단지 보기' : '상세내용 보기'}
                onPressed={() => setContentVisible((prev) => !prev)}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <CButton label='확인' onPressed={onBackPressed} />
          </View>
        </View>
      </ReactNativeModal>
      <ReactNativeModal
        onBackdropPress={onParkBackPressed}
        isVisible={visible}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            borderRadius: 4,
            backgroundColor: '#ffffff',
            paddingBottom: 20,
            paddingLeft: 20,
          }}>
          <FlatList
            numColumns={3}
            data={Object.keys(PARK_TABLE)}
            renderItem={({ item }) => (
              <View
                style={{
                  width: (width - 120) / 3,
                  marginRight: 20,
                  marginTop: 20,
                }}>
                <CButton
                  type='secondary'
                  label={item.replace('한강공원', '')}
                  onPressed={() => onParkPressed(item as ParkTypes)}
                />
              </View>
            )}
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Leaflet;
