import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import HomeScreenLogic from './Home.logic';
import {CartIcon} from '../../svgs';
import {COLORS} from '../../configs';

const products = [
  {
    id: '1',
    title: 'ECU All New Ertiga matic AT SGP',
    price: 'Rp1.877.296',
    rating: 5.0,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  },
  {
    id: '2',
    title: 'Cas Aki Motor / Charger Aki Accu 12 Volt',
    price: 'Rp36.529',
    rating: 4.6,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  },
  {
    id: '3',
    title: 'SETING HP ABSEN ONLINE VIA REMOTE',
    price: 'Rp237.500',
    rating: 5.0,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  },
  {
    id: '3',
    title: 'SETING HP ABSEN ONLINE VIA REMOTE',
    price: 'Rp237.500',
    rating: 5.0,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  },
  // Add more product entries as needed
];

export default function App(props) {
  const {actions, data} = HomeScreenLogic(props);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={actions.goSearchScreen}
            style={styles.searchBar}>
            <Text>Search...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={actions.goCartScreen}
            style={{width: '15%', alignItems: 'center'}}>
            <CartIcon width={30} height={30} fill={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => actions.goDetailScreen()}
                style={styles.card}>
                <Image
                  source={{uri: item.image}}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.tabBar}>
        <View style={styles.wrapTextTab}>
          <Text style={styles.textTab}>Home</Text>
        </View>
        <View style={styles.wrapTextTab}>
          <Text style={styles.textTab}>Trending</Text>
        </View>
        <View style={styles.wrapTextTab}>
          <Text style={styles.textTab}>Live</Text>
        </View>
        <View style={styles.wrapTextTab}>
          <Text style={styles.textTab}>Notifikasi</Text>
        </View>
        <View style={styles.wrapTextTab}>
          <Text style={styles.textTab}>Saya</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
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
});
