import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  onPressed: () => void;
  label: string;
  checked: boolean;
  containerStyle: StyleProp<ViewStyle>;
};

const CCheck = ({ onPressed, label, checked, containerStyle }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View
        style={[
          { flexDirection: 'row', alignItems: 'center' },
          containerStyle,
        ]}>
        <Image
          style={{ width: 24, height: 24 }}
          source={
            checked
              ? images.components.common.check
              : images.components.common.uncheck
          }
        />
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.Size[15],
            {
              color: checked ? colors.font.black : colors.font.disabled,
              marginLeft: 6,
            },
          ]}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CCheck;
