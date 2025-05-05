import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {CartIcon} from '../../svgs';
import {COLORS} from '../../configs';

import HomeScreenLogic from './Home.logic';

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
            data={data.products}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={{paddingBottom: 150}}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => actions.goDetailScreen(item)}
                style={styles.card}>
                <Image
                  source={{uri: item.images[0]}}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.title}>{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 20,
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.rating}>⭐ {item.rating}</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
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
          <Text style={styles.textTab}>Profile</Text>
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
