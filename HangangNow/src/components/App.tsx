import { NavigationContainer } from '@react-navigation/native';
import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducer from '@store/rootReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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
