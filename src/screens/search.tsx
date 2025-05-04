import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {Ionicons, MaterialIcons} from '@expo/vector-icons';

const suggestedTags = [
  'charger aki mobil',
  'charger aki motor',
  'charger aki stanley',
  'charger aki motor dan mobil',
  'charger aki 12 volt otomatis',
];

const searchResults = [
  'charger aki',
  'charger aki motor',
  'charger aki mobil 12/24 volt',
  'charger aki 12 volt otomatis',
  'charger aki mobil',
  'charger aki 5 ampere',
  'charger aki lithium',
  'charger aki 6 volt',
  'charger aki 10 ampere',
  'charger aki rakitan',
  'charger aki 12 volt',
  'charger aki delta',
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Top Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity>
          {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        </TouchableOpacity>
        <TextInput
          placeholder="charger aki"
          style={styles.searchInput}
          defaultValue="charger aki"
        />
        <TouchableOpacity>
          {/* <MaterialIcons
            name="photo-camera"
            size={24}
            color="#fff"
            style={styles.cameraIcon}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          {/* <Ionicons name="search" size={20} color="#fff" /> */}
        </TouchableOpacity>
      </View>

      {/* Suggestion Tags */}
      <View style={styles.suggestions}>
        <Text style={styles.sectionLabel}>Apakah ini yang kamu cari:</Text>
        <View style={styles.tagsContainer}>
          {suggestedTags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>
              <Text style={styles.bold}>charger aki</Text>{' '}
              {item.replace('charger aki', '')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 8,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
  },
  cameraIcon: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 6,
  },
  searchButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    marginLeft: 6,
    borderRadius: 6,
  },
  suggestions: {
    marginBottom: 10,
  },
  sectionLabel: {
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#555',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 4,
  },
  tagText: {
    fontSize: 13,
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
});
