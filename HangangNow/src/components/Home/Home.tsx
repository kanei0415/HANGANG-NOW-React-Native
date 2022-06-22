import colors from '@assets/colors';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, LayoutRectangle } from 'react-native';
import Font from '@assets/font';
import CSelectContainer from '@components/common/CSelect/containers/CSelectContainer';
import CCheckContainer from '@components/common/CCheck/containers/CCheckContainer';

type Props = {};

const Home = ({}: Props) => {
  // const [text, setText] = useState<string>('');
  // const [errorText, setErrorText] = useState<string>('');
  // const [textValid, setTextValid] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const [selectPosition, setSelectPosition] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View
        style={{ marginTop: 120, marginHorizontal: 20 }}
        onLayout={({ nativeEvent: { layout } }) => setSelectPosition(layout)}>
        <CSelectContainer
          options={['1', '2', '3']}
          labelSelector={(item: string) => item}
          placeholder={'1234'}
          position={selectPosition}
        />
        <View style={{ marginTop: 120 }}>
          <CCheckContainer
            iconPosition={'right'}
            iconType={'square'}
            checked={checked}
            onPressed={() => setChecked(!checked)}
          />
        </View>
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
