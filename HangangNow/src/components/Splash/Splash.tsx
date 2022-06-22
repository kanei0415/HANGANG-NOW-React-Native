import React from 'react';
import { Text, View } from 'react-native';

type Props = {};

const Splash = ({}: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>{'HangangNow'}</Text>
    </View>
  );
};

export default Splash;
