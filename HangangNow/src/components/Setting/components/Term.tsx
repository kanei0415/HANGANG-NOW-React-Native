import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

type Props = {
  title: string;
  content: string;
};

const Term = ({ title, content }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title={title} />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_14,
            { color: colors.typo.black },
          ]}>
          {content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Term;
