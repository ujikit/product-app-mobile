import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {
  addQuantityDispatch,
  deleteSelectionProductOnCartDispatch,
  removeQuantityDispatch,
  selectProductOnCartDispatch,
} from '../redux/reducers/cartSlice';

const ProductItem = React.memo(({product}) => {
  const dispatch = useDispatch();

  const quantity = useSelector(
    state => state.cart.quantityReducer[product.id] || 0,
  );
  const selectedProductOnCartReducer = useSelector(
    state => state.cart.selectedProductOnCartReducer[product.id] || false,
  );

  const selectProductOnCart = useCallback(() => {
    dispatch(selectProductOnCartDispatch(product.id));
  }, [dispatch, product.id]);

  const deleteSelectionCart = useCallback(() => {
    dispatch(deleteSelectionProductOnCartDispatch(product.id));
  }, [dispatch, product.id]);

  const increment = useCallback(() => {
    dispatch(addQuantityDispatch(product.id));
  }, [dispatch, product.id]);

  const decrement = useCallback(() => {
    dispatch(removeQuantityDispatch(product.id));
  }, [dispatch, product.id]);

  return (
    <TouchableOpacity style={styles.cartCard}>
      <View style={styles.storeRow}>
        {/* <Ionicons name="star" size={16} color="orange" /> */}
        <Text style={styles.storeName}>{product.brand}</Text>
        <TouchableOpacity onPress={deleteSelectionCart}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemRow}>
        <TouchableOpacity
          onPress={selectProductOnCart}
          style={{
            width: 25,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: selectedProductOnCartReducer ? 0 : 0.5,
            borderRadius: 7,
            borderColor: '#555',
            backgroundColor: selectedProductOnCartReducer ? '#f60' : null,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: selectedProductOnCartReducer ? 'white' : null,
            }}>
            {selectedProductOnCartReducer ? '✓' : null}
          </Text>
        </TouchableOpacity>

        <Image source={{uri: product.images[0]}} style={styles.itemImage} />
        <View style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
              <Text>{product.title}</Text>
              {product.category && (
                <Text style={styles.category}>{product.category}</Text>
              )}
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.price}>
                Rp {product.price.toLocaleString()}K
              </Text>
              {/* {product.originalPrice && (
              <Text style={styles.originalPrice}>
                Rp{product.originalPrice.toLocaleString()}
              </Text>
            )} */}
            </View>
          </View>
          {/* {product.discountInfo && (
            <Text style={styles.discountText}>{product.discountInfo}</Text>
          )} */}
        </View>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={decrement} style={styles.qtyButton}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.textQuantity}>{quantity}</Text>
          <TouchableOpacity onPress={increment} style={styles.qtyButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  cartCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  storeName: {marginLeft: 6, fontWeight: 'bold', flex: 1},
  delete: {color: '#999'},
  itemRow: {flexDirection: 'row', alignItems: 'center', paddingVertical: 10},
  itemImage: {width: 80, height: 80, borderRadius: 6},
  category: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#555',
    marginTop: 4,
  },
  priceRow: {flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4},
  price: {color: '#f60', fontWeight: 'bold'},
  originalPrice: {textDecorationLine: 'line-through', color: '#999'},
  discountText: {fontSize: 12, color: '#d00'},
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  textQuantity: {
    paddingHorizontal: 5,
  },
  qtyButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
});

export default ProductItem;
