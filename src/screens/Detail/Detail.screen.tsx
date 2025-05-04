//package import here
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Header from '../../components/Header';
import {ArrowLeftIcon, CartIcon} from '../../svgs';

import styles from './Detail.styles';
import DetailScreenLogic from './Detail.logic';
import {DetailScreenProps} from './Detail.types';

const DetailScreenScreen = (props: DetailScreenProps) => {
  DetailScreenLogic(props);

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

            {/* <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ulasan Pembeli</Text>
              <Text style={styles.reviewText}>⭐ 4.4 dari 11 ulasan</Text>
            </View> */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapFooter}>
        <TouchableOpacity style={styles.buttonCenter}>
          <CartIcon width="24" height="24" fill="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRight}>
          <Text style={styles.rightText}>Buy Now Rp2.070.000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreenScreen;
