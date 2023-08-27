import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/reducers';
import Router from './src/router';

function App(): JSX.Element {
  const styles = {flex: 1};
  return (
    <GestureHandlerRootView style={styles}>
      <Provider store={store}>
        <Router />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
