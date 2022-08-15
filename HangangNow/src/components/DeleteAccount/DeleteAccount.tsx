import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { ProfileTypes } from '@typedef/components/common/common.types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  profile: ProfileTypes | null;
  checked: boolean;
  onCheckPressed: () => void;
  onNextPressed: () => void;
};

const DeleteAccount = ({
  profile,
  checked,
  onCheckPressed,
  onNextPressed,
}: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='회원 탈퇴' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>
          {'유의사항'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black, marginTop: 12 },
          ]}>
          {'회원 탈퇴 전, 꼭 확인하세요'}
        </Text>
        {profile && (
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black, marginTop: 32 },
            ]}>
            <Text>{'회원 탈퇴 시, '}</Text>
            <Text style={{ color: colors.typo.main }}>{profile.name}</Text>
            <Text>{` 님의 기존 계정은 다시
복구하실 수 없으며 모든 데이터가 삭제됩니다.`}</Text>
          </Text>
        )}
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_14,
            { color: colors.typo.gray.middle, marginTop: 20 },
          ]}>{`한강나우가 제안하는 각종 이벤트 및 혜택을
더이상 만나보실 수 없습니다.`}</Text>
        <TouchableOpacity
          onPress={onCheckPressed}
          style={{
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.typo.black },
            ]}>
            {'유의사항을 모두 확인했으며, 위 사항에 동의합니다'}
          </Text>
          <Image
            source={images.components.common[checked ? 'check' : 'unChecked']}
          />
        </TouchableOpacity>
        <View style={{ marginTop: 40 }}>
          <CButton
            label='회원 탈퇴하기'
            disabled={!checked}
            onPressed={onNextPressed}
          />
        </View>
      </View>
    </View>
  );
};

export default DeleteAccount;
