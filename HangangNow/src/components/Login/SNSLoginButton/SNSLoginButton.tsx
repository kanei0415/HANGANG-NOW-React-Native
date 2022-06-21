import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import colors from '@assets/colors';
import NotoSans from '@assets/font';

type Props = {
  active?: boolean;
  label?: string;
  onPress?: () => void;
  backgroundColor?: string;
  icon?: ImageSourcePropType;
};

const SNSLoginButton = ({
  active = false,
  label = ' Test Label',
  onPress = () => {},
  backgroundColor = colors.brand.main,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: active ? backgroundColor : colors.system.disabled,
      }}
      disabled={!active}
      onPress={onPress}>
      {icon && (
        <Image
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            left: 20,
          }}
          source={icon}
        />
      )}
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.Size[20],
          {
            color: active ? colors.default.white : colors.font.light,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SNSLoginButton;
