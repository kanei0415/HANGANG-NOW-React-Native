import colors from '@assets/colors';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Font from '@assets/font';
import CDateInputContainer from '@components/common/CDateInput/containers/CDateInputContainer';

type Props = {};

const Home = ({}: Props) => {
  // const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View style={{ marginTop: 120 }}>
        {/*<CButton active={true} icon={images.common.kakaoTextLogo} />*/}
        {/*<CInputContainer onInputChange={() => {}} />*/}
        <CDateInputContainer mode={'date'} onDateChanged={() => {}} />
        {/*<CSearchInputContainer />*/}
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
