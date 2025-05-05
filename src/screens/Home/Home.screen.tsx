import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {CartIcon} from '../../svgs';
import {COLORS, STYLES} from '../../configs';

import styles from './Home.styles';
import HomeScreenLogic from './Home.logic';

export default function App(props) {
  const {actions, data} = HomeScreenLogic(props);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            onPress={actions.goSearchScreen}
            style={styles.searchBar}>
            <Text>Search...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={actions.goCartScreen}
            style={styles.buttonCart}>
            <CartIcon width={30} height={30} fill={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <FlatList
            data={data.products}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.paddingBottom150}
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
                <View style={styles.wrapValue}>
                  <View style={STYLES.fx1}>
                    <Text style={styles.rating}>⭐ {item.rating}</Text>
                  </View>
                  <View style={[STYLES.fx1, STYLES.alItEnd]}>
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
