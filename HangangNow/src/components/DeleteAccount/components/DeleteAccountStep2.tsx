import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CCheck from '@components/common/CCheck/CCheck';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { ProfileTypes } from '@typedef/components/common/common.types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  profile: ProfileTypes | null;
  onDonePressed: () => void;
  checkList: boolean[];
  onCheckPressed: (idx: number) => void;
};

const DeleteAccountStep2 = ({
  profile,
  onDonePressed,
  checkList,
  onCheckPressed,
}: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='회원 탈퇴' />
      <View style={{ padding: 20, flex: 1 }}>
        {profile && (
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>
            <Text>{'그동안 감사했습니다, '}</Text>
            <Text style={{ color: colors.typo.main }}>{profile.name}</Text>
            <Text>{` 님!`}</Text>
          </Text>
        )}
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_16,
            { color: colors.typo.black, marginTop: 32 },
          ]}>{`어플 탈퇴 사유가 무엇인지 알려주시면
한강나우에게 큰 참고사항이 됩니다.`}</Text>
        <View style={{ marginTop: 20, flex: 1 }}>
          {[
            '사용이 어려움',
            '이벤트가 적음',
            '한강나우와 유사한 어플이 있음',
            '실시간 정보 제공에 대한 신뢰도 낮음',
            '사용 빈도가 낮음',
            '기타',
          ].map((l, i) => (
            <TouchableOpacity
              onPress={() => onCheckPressed(i)}
              style={{
                marginTop: 20,
                alignItems: 'center',
                flexDirection: 'row',
              }}
              key={i}>
              <Image
                source={
                  images.components.common[checkList[i] ? 'check' : 'unChecked']
                }
              />
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginLeft: 20 },
                ]}>
                {l}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <CButton label='탈퇴하기' onPressed={onDonePressed} />
      </View>
    </View>
  );
};

export default DeleteAccountStep2;
