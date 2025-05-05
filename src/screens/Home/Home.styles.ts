//package import
import {StyleSheet} from 'react-native';

//local import
import {COLORS} from '../../configs';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCart: {width: '15%', alignItems: 'center'},
  searchBar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  banner: {
    backgroundColor: '#FF3D00',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 4,
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 10,
    color: '#888',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
  },
  wrapTextTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    borderColor: '#999',
  },
  textTab: {
    fontSize: 12,
    color: '#333',
  },
  wrapValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },

  paddingBottom150: {paddingBottom: 150},
});

export default HomeScreenStyles;
