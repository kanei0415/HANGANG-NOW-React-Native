import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  checked?: boolean;
  label?: string;
  onPressed?: () => void;
  alignType?: 'row' | 'row-reverse';
  containerStyle?: StyleProp<ViewStyle>;
};

const CCheck = ({
  checked = false,
  label = '',
  onPressed,
  alignType = 'row',
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPressed}
      style={[
        { flexDirection: alignType, alignItems: 'center' },
        containerStyle,
      ]}>
      <Image
        source={images.components.common[checked ? 'check' : 'unChecked']}
      />
      {alignType === 'row-reverse' && <View style={{ flex: 1 }} />}
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.f_14,
          {
            color: colors.typo.gray.middle,
            marginLeft: alignType === 'row-reverse' ? 0 : 8,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CCheck;
