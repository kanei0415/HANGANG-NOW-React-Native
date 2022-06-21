import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import { Image, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const CSearchInput = () => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          height: 38,
          borderRadius: 8,
          backgroundColor: colors.background.middle,
          flexDirection: 'row',
          paddingLeft: 8,
          paddingRight: 12,
          paddingVertical: 8,
        }}>
        <Image source={images.components.common.CSearch.search} />
        <TextInput
          style={[
            NotoSans.Regular,
            NotoSans.Size[15],
            { flex: 1, color: colors.font.black, padding: 0, marginLeft: 8 },
          ]}
          keyboardType='web-search'
          placeholder='검색'
          placeholderTextColor={colors.font.disabled}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CSearchInput;
