//package import here
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './Search.styles';
import SearchScreenLogic from './Search.logic';
import {SearchScreenProps} from './Search.types';
import {ArrowLeftIcon} from '../../svgs';

const SearchScreenScreen = (props: SearchScreenProps) => {
  const {navigation} = props;

  const {actions, data} = SearchScreenLogic(props);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Top Search Bar */}
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon />
          </TouchableOpacity>
          <TextInput
            placeholder="Search here..."
            style={styles.searchInput}
            value={data.searchValue}
            onChangeText={value => actions.setSearchValue(value)}
          />
          <TouchableOpacity
            onPress={() => alert('This feature is currently disabled.')}
            style={styles.searchButton}>
            <Text style={{color: '#fff'}}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Suggestion Tags */}
        <View style={styles.suggestions}>
          <Text style={styles.sectionLabel}>Apakah ini yang kamu cari:</Text>
          <View style={styles.tagsContainer}>
            {data.suggestedTags.map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Search Results */}
        {/* <FlatList
        data={data.searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>
              <Text style={styles.bold}>charger aki</Text>{' '}
              {item.replace('charger aki', '')}
            </Text>
          </View>
        )}
      /> */}
      </SafeAreaView>
    </View>
  );
};

export default SearchScreenScreen;
