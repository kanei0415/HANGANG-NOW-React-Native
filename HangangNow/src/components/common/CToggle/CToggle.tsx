import colors from '@assets/colors';
import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

type Props = {
  check: boolean;
  onCheckPressed: () => void;
};

const CToggle = ({ check, onCheckPressed }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onCheckPressed}>
      <View
        style={{
          width: 46,
          height: 24,
          backgroundColor: check ? colors.main.primary : colors.main.gray,
          borderRadius: 30,
          position: 'relative',
        }}>
        <AnimatableView
          transition={['left']}
          duration={150}
          style={{
            width: 20,
            height: 20,
            backgroundColor: colors.default.white,
            position: 'absolute',
            left: check ? 24 : 2,
            top: 2,
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CToggle;
