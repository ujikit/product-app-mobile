import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from './src/configs';
import {ArrowLeftIcon} from './src/svgs';
import Header from './src/components/Header';
import ProductItem from './src/components/ProductItem';

function ProductList() {
  const dispatch = useDispatch();
  const {products, cart, selectedProductOnCartReducer} = useSelector(
    state => state.cart,
  );
  const memoizedCart = useMemo(() => products, [products]);

  useEffect(() => {
    dispatch({type: 'product/fetchProducts'});
  }, [dispatch]);

  const totalSelectedPrice = useMemo(() => {
    return products.reduce((sum, product) => {
      const isChecked = selectedProductOnCartReducer[product.id];
      const qty = cart[product.id] || 0;
      if (isChecked && qty > 0) {
        return sum + qty * product.price;
      }
      return sum;
    }, 0);
  }, [products, cart, selectedProductOnCartReducer]);

  return (
    <View>
      <Header
        title="My Cart"
        leftIcon={
          <TouchableOpacity>
            <ArrowLeftIcon width="24" height="24" />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={memoizedCart}
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
          <Text style={{fontSize: 16}}>Total: Rp {totalSelectedPrice}K</Text>
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
}

export default ProductList;
