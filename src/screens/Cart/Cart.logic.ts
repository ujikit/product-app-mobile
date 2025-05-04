//package import here
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//local import here

import {CartScreenProps} from './Cart.types';

const CartScreenLogic = (props: CartScreenProps) => {
  const dispatch = useDispatch();
  const {products, cart, selectedProductOnCartReducer} = useSelector(
    state => state.cart,
  );
  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    dispatch({type: 'cart/fetchProducts'});
  }, [dispatch]);

  console.log('home');

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

  return {
    data: {memoizedProducts, totalSelectedPrice},
    actions: {},
  };
};

export default CartScreenLogic;
