import { NavigationContainer } from '@react-navigation/native';
import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducer from '@store/rootReducer';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dynamiclinks from '@react-native-firebase/dynamic-links';

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined,
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigationContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
