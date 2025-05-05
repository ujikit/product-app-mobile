//package import here
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {STYLES} from '../../configs';
import {ArrowLeftIcon} from '../../svgs';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';

import styles from './Cart.styles';
import CartScreenLogic from './Cart.logic';
import {CartScreenProps} from './Cart.types';

const CartScreenScreen = (props: CartScreenProps) => {
  const {navigation} = props;

  const {data} = CartScreenLogic(props);

  return (
    <View style={styles.container}>
      <Header
        title="My Cart"
        leftIcon={
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon width="24" height="24" />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={data.memoizedCart}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={() => (
          <View style={styles.flatListEmpty}>
            <Text>Empty Cart</Text>
          </View>
        )}
        renderItem={({item}) => <ProductItem key={item.id} product={item} />}
      />
      <View style={styles.wrapFooter}>
        <View style={styles.wrapTotal}>
          <Text style={styles.textTotal}>
            Total: Rp {data.totalSelectedPrice}K
          </Text>
        </View>
        <View style={styles.wrapCheckout}>
          <View style={STYLES.alItEnd}>
            <TouchableOpacity style={styles.buttonCheckout}>
              <Text style={styles.textCheckout}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreenScreen;
