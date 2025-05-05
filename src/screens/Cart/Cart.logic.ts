//package import here
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//local import here
import {CartScreenProps} from './Cart.types';

const CartScreenLogic = (props: CartScreenProps) => {
  const dispatch = useDispatch();
  const {cartReducer, quantityReducer, selectedProductOnCartReducer} =
    useSelector(state => state.cart);
  const memoizedProducts = useMemo(() => cartReducer, [cartReducer]);

  useEffect(() => {
    dispatch({type: 'quantityReducer/fetchProducts'});
  }, [dispatch]);

  console.log('home');

  const totalSelectedPrice = useMemo(() => {
    return cartReducer.reduce((sum, product) => {
      const isChecked = selectedProductOnCartReducer[product.id];
      const qty = quantityReducer[product.id] || 0;
      if (isChecked && qty > 0) {
        return sum + qty * product.price;
      }
      return sum;
    }, 0);
  }, [cartReducer, quantityReducer, selectedProductOnCartReducer]);

  return {
    data: {memoizedProducts, totalSelectedPrice},
    actions: {},
  };
};

export default CartScreenLogic;
