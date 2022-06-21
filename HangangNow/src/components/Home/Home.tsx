import colors from '@assets/colors';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Font from '@assets/font';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import CSearchInputContainer from '@components/common/CSearchInput/containers/CSearchInputContainer';
import CButton from '@components/common/CButton/CButton';
import CBorderButton from '@components/common/CBorderButton/CBorderButton';

type Props = {};

const Home = ({}: Props) => {
  // const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View style={{ marginTop: 120 }}>
        <CBorderButton active={true} backgroundColor={colors.default.white} />
        <CButton active={true} />
        <CInputContainer
          onInputChange={() => {}}
          isCheckValid={true}
          onCheckValid={(input) => input.length > 0}
        />
      </View>
      <View style={{ marginTop: 120 }}>
        <CInputContainer
          onInputChange={() => {}}
          type={'password'}
          isCheckValid={true}
          onCheckValid={(input) => input.length > 0}
        />
        <CInputContainer
          onInputChange={() => {}}
          type={'password'}
          isCheckValid={true}
          onCheckValid={(input) => input.length > 0}
        />
        {/*<CDateInputContainer mode={'date'} onDateChanged={() => {}} />*/}
        <CSearchInputContainer />
        {/*<LoginInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  label={'아이디 (이메일 계정)'}*/}
        {/*/>*/}
        {/*<CCheck checked={checked} onPressed={() => setChecked(!checked)} />*/}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32,
        }}>
        <TouchableOpacity>
          <Text
            style={[
              Font.Regular,
              Font.Size[14],
              {
                color: colors.font.middle,
              },
            ]}>
            {'아이디 찾기'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
