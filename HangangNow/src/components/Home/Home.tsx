import colors from '@assets/colors';
import CButton from '@components/common/CButton/CButton';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native';

type Props = {
  onDiaryPressed: () => void;
  onMbtiPressed: () => void;
};

const Home = ({ onDiaryPressed, onMbtiPressed }: Props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.default.white }}>
      <View>
        <CButton onPressed={onDiaryPressed} label='한강일기' />
      </View>
      <View>
        <CButton onPressed={onMbtiPressed} label='한강 유형찾기' />
      </View>
    </ScrollView>
  );
};

export default Home;
