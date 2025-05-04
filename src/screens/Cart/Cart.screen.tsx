//package import here
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../configs';
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
    <View>
      <Header
        title="My Cart"
        leftIcon={
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon width="24" height="24" />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={data.memoizedProducts}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 150}}
        renderItem={({item}) => <ProductItem key={item.id} product={item} />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          height: 110,
          borderWidth: 0.5,
          borderColor: '#ccc',
          padding: 25,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 16}}>
            Total: Rp {data.totalSelectedPrice}K
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity style={{backgroundColor: COLORS.primary}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#fff',
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreenScreen;
