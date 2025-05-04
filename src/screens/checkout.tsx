import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const cartItems = [
  {
    store: 'Royan Perabot',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    title: 'Teko Plastik obral / eskan plastik 1,5 Lt',
    price: 6000,
  },
  {
    store: 'Lancar Living',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    title: 'TEKO PLASTIK MINI BENING 1.5 LITER',
    price: 4950,
    originalPrice: 5000,
    variation: 'Hijau, L',
    discountInfo: 'Spesial 5 Mei Rp 4.702',
  },
  {
    store: 'Fortuna Houseware Jogja',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    title: 'Gelas Es Teh / Gelas Minum Kaca MRLM',
    price: 0,
  },
];

export default function CartScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Keranjang Saya</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Ubah</Text>
        </TouchableOpacity>
      </View>

      {/* Cart List */}
      <FlatList
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cartCard}>
            <View style={styles.storeRow}>
              {/* <Ionicons name="star" size={16} color="orange" /> */}
              <Text style={styles.storeName}>{item.store}</Text>
              <TouchableOpacity>
                <Text style={styles.edit}>Ubah</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.itemRow}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View style={{flex: 1}}>
                <Text>{item.title}</Text>
                {item.variation && (
                  <Text style={styles.variation}>{item.variation}</Text>
                )}
                <View style={styles.priceRow}>
                  <Text style={styles.price}>
                    Rp{item.price.toLocaleString()}
                  </Text>
                  {item.originalPrice && (
                    <Text style={styles.originalPrice}>
                      Rp{item.originalPrice.toLocaleString()}
                    </Text>
                  )}
                </View>
                {item.discountInfo && (
                  <Text style={styles.discountText}>{item.discountInfo}</Text>
                )}
              </View>
              <View style={styles.quantityControl}>
                <TouchableOpacity style={styles.qtyButton}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.qtyButton}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          {/* <Ionicons name="checkbox-outline" size={24} color="#999" /> */}
          <Text style={styles.selectAll}>Semua</Text>
        </View>
        <View style={styles.footerRight}>
          <Text>
            Total <Text style={styles.totalPrice}>Rp0</Text>
          </Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Checkout (0)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingTop: 50},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  headerTitle: {fontSize: 18, fontWeight: 'bold'},
  edit: {color: '#f60'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerLeft: {flexDirection: 'row', alignItems: 'center'},
  selectAll: {marginLeft: 8},
  footerRight: {flexDirection: 'row', alignItems: 'center', gap: 10},
  totalPrice: {color: '#f60', fontWeight: 'bold'},
  checkoutBtn: {
    backgroundColor: '#f60',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  checkoutText: {color: '#fff', fontWeight: 'bold'},
});
