//package import here
import React from 'react';
import {Text, View} from 'react-native';

import styles from './Search.styles';
import SearchScreenLogic from './Search.logic';
import {SearchScreenProps} from './Search.types';

const SearchScreenScreen = (props: SearchScreenProps) => {
  SearchScreenLogic(props);

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default SearchScreenScreen;
