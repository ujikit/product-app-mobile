import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Stack from './Stack';
import NavigationService from './NavigationService';

const App = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
