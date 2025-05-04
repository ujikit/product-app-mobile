import {Header} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import {ArrowLeftIcon} from './src/svgs';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Product Detail"
        leftIcon={
          <TouchableOpacity>
            <ArrowLeftIcon width="24" height="24" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.scrollView} scrollEventThrottle={16}>
        <Image
          source={{
            uri: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
          }}
          style={styles.headerImage}
        />
        <View>
          <View style={styles.content}>
            <Text style={styles.price}>Rp2.070.000</Text>
            <Text style={styles.title}>
              Laptop Dell Latitude 7490 i5 Gen 7 / 8GB / 512GB SSD
            </Text>
            <Text style={styles.subtitle}>
              Kondisi mulus, seperti baru. Bergaransi dan bebas pengembalian.
            </Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ulasan Pembeli</Text>
              <Text style={styles.reviewText}>⭐ 4.4 dari 11 ulasan</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Beli Dengan Voucher</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
    zIndex: 1,
    elevation: 1,
    justifyContent: 'flex-end',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  stickyLabelContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    position: 'relative',
    zIndex: 2,
  },
  stickyLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  content: {
    padding: 16,
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e53935',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#e53935',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetail;
