import React, {useEffect, useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store from '../redux/store';

import ProductItem from '../components/ProductItem';

function ProductList() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.cart);
  const memoizedCart = useMemo(() => products, [products]);

  useEffect(() => {
    dispatch({type: 'product/fetchProducts'});
  }, [dispatch]);

  console.log('home');

  return (
    <View>
      <Text>My Cart</Text>
      <FlatList
        data={memoizedCart}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => <ProductItem key={item.id} product={item} />}
      />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
