import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React from 'react';
import Term from '../components/Term';

const TermContainer = ({
  route: {
    params: { title, content },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'term'>) => {
  return <Term title={title} content={content} />;
};

export default TermContainer;
