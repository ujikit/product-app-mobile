/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {StatusBar} from 'react-native';

import NavigationApp from './src/routers';

const App = () => (
  <Provider store={store}>
    <StatusBar animated={true} barStyle="dark-content" />
    <NavigationApp />
  </Provider>
);

export default App;
