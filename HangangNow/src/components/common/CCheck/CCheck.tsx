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
  iconPosition: 'left' | 'right';
  iconType?: 'round' | 'square';
};

const CCheck = ({
  onPressed,
  label,
  checked,
  containerStyle,
  iconPosition,
  iconType,
}: Props) => {
  const checkedIcon =
    iconType == 'square'
      ? images.components.common.squareCheck
      : images.components.common.roundCheck;
  const uncheckedIcon =
    iconType == 'square'
      ? images.components.common.squareUncheck
      : images.components.common.roundUncheck;

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View
        style={[
          {
            alignItems: 'center',
            flexDirection: iconPosition == 'left' ? 'row' : 'row-reverse',
          },
          containerStyle,
        ]}>
        <Image
          style={{ width: 24, height: 24 }}
          source={checked ? checkedIcon : uncheckedIcon}
        />
        {iconPosition == 'right' && <View style={{ flex: 1 }} />}
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
