import colors from '@assets/colors';
import CButton from '@components/common/CButton/CButton';
import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  onDiaryPressed: () => void;
  onMbtiPressed: () => void;
};

const MyPage = ({ onDiaryPressed, onMbtiPressed }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <View>
        <CButton onPressed={onDiaryPressed} label='한강일기' />
      </View>
      <View>
        <CButton onPressed={onMbtiPressed} label='한강 유형찾기' />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyPage;
