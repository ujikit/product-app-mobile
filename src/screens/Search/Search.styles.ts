//package import
import {StyleSheet} from 'react-native';

//local import

const SearchScreenStyles = StyleSheet.create({
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

export default SearchScreenStyles;
