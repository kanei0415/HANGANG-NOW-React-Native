import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CCheck from '@components/common/CCheck/CCheck';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  check1: boolean;
  setCheck1: React.Dispatch<React.SetStateAction<boolean>>;
  check2: boolean;
  setCheck2: React.Dispatch<React.SetStateAction<boolean>>;
  check3: boolean;
  setCheck3: React.Dispatch<React.SetStateAction<boolean>>;
  check4: boolean;
  setCheck4: React.Dispatch<React.SetStateAction<boolean>>;
  check5: boolean;
  setCheck5: React.Dispatch<React.SetStateAction<boolean>>;
  allCheckActive: boolean;
  nextBtnActive: boolean;
  onAllCheckPressed: () => void;
  onNextBtnPressed: () => void;
  onDetailPressed: () => void;
};

const Signup = ({
  check1,
  setCheck1,
  check2,
  setCheck2,
  check3,
  setCheck3,
  check4,
  setCheck4,
  check5,
  setCheck5,
  allCheckActive,
  nextBtnActive,
  onAllCheckPressed,
  onNextBtnPressed,
  onDetailPressed,
}: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='회원가입' />
      <View style={{ paddingHorizontal: 20, marginTop: 60 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[
              NotoSans.Bold,
              NotoSans.f_20,
              { color: colors.typo.black },
            ]}>
            {'약관동의'}
          </Text>
          <TouchableOpacity
            onPress={onDetailPressed}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.typo.gray.middle,
              paddingBottom: 2,
              paddingHorizontal: 2,
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_14,
                {
                  color: colors.typo.gray.light,
                },
              ]}>
              {'자세히 보기'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 32 }}>
        <CCheck
          label='이용약관 동의 (필수)'
          checked={check1}
          onPressed={() => setCheck1(!check1)}
          alignType='row-reverse'
        />
        <CCheck
          label='만 14세 이상 확인 (필수)'
          checked={check5}
          onPressed={() => setCheck5(!check5)}
          containerStyle={{ marginTop: 20 }}
          alignType='row-reverse'
        />
        <CCheck
          label='개인정보 취급방침 동의 (필수)'
          checked={check2}
          onPressed={() => setCheck2(!check2)}
          alignType='row-reverse'
          containerStyle={{ marginTop: 20 }}
        />
        <CCheck
          label='위치 서비스 동의 (선택)'
          checked={check3}
          onPressed={() => setCheck3(!check3)}
          alignType='row-reverse'
          containerStyle={{ marginTop: 20 }}
        />
        <CCheck
          label='마케팅 수신 동의 (선택)'
          checked={check4}
          onPressed={() => setCheck4(!check4)}
          alignType='row-reverse'
          containerStyle={{ marginTop: 20 }}
        />
        <View
          style={{
            height: 1,
            backgroundColor: colors.main.gray,
            marginVertical: 24,
          }}
        />
        <CCheck
          label='전체 동의하기 (선택 항목 포함)'
          checked={allCheckActive}
          onPressed={onAllCheckPressed}
          alignType='row-reverse'
          containerStyle={{ marginTop: 20 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <CButton
          label='다음 단계로'
          onPressed={onNextBtnPressed}
          disabled={!nextBtnActive}
        />
      </View>
    </View>
  );
};

export default Signup;
