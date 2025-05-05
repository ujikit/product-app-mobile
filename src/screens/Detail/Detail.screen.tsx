//package import here
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Header from '../../components/Header';
import {ArrowLeftIcon, CartIcon} from '../../svgs';

import styles from './Detail.styles';
import DetailScreenLogic from './Detail.logic';
import {DetailScreenProps} from './Detail.types';

const DetailScreenScreen = (props: DetailScreenProps) => {
  const {navigation} = props;

  const {data} = DetailScreenLogic(props);
  const {productDetail} = data;

  return (
    <View style={styles.container}>
      <Header
        title="Product Detail"
        leftIcon={
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon width="24" height="24" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.scrollView} scrollEventThrottle={16}>
        <Image
          source={{
            uri: productDetail.images[0],
          }}
          style={styles.headerImage}
        />
        <View>
          <View style={styles.content}>
            <Text style={styles.price}>{productDetail.price}</Text>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Text style={styles.subtitle}>{productDetail.description}</Text>

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
