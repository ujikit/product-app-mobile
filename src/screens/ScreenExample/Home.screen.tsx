//package import here
import React from 'react';
import {Text, View} from 'react-native';

import styles from './Home.styles';
import HomeScreenLogic from './Home.logic';
import {HomeScreenProps} from './Home.types';

const HomeScreen = (props: HomeScreenProps) => {
  HomeScreenLogic(props);

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default HomeScreen;
