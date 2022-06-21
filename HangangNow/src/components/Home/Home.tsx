import colors from '@assets/colors';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Font from '@assets/font';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import CButtonContainer from '@components/common/CButton/containers/CButtonContainer';
import CCheckContainer from '@components/common/CCheck/containers/CCheckContainer';

type Props = {};

const Home = ({}: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View style={{ marginTop: 120 }}>
        <CButtonContainer backgroundColor={colors.brand.main} />
        <CButtonContainer
          backgroundColor={colors.default.white}
          borderWidth={2}
        />
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
        {/*<CInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  type={'password'}*/}
        {/*  isCheckValid={true}*/}
        {/*  onCheckValid={(input) => input.length > 0}*/}
        {/*/>*/}
        {/*<CDateInputContainer mode={'date'} onDateChanged={() => {}} />*/}
        {/*<CSearchInputContainer />*/}
        {/*<LoginInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  label={'아이디 (이메일 계정)'}*/}
        {/*/>*/}
        <CCheckContainer
          iconPosition={'right'}
          iconType={'square'}
          checked={checked}
          onPressed={() => setChecked(!checked)}
        />
        <CCheckContainer
          iconPosition={'right'}
          iconType={'round'}
          checked={checked}
          onPressed={() => setChecked(!checked)}
        />
        <CCheckContainer
          iconPosition={'left'}
          iconType={'square'}
          checked={checked}
          onPressed={() => setChecked(!checked)}
        />
        <CCheckContainer
          iconPosition={'left'}
          iconType={'round'}
          checked={checked}
          onPressed={() => setChecked(!checked)}
        />
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
