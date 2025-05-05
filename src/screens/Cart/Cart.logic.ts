//package import here
import {useMemo} from 'react';
import {useSelector} from 'react-redux';

//local import here
import {CartScreenProps} from './Cart.types';

const CartScreenLogic = (props: CartScreenProps) => {
  const {cartReducer, quantityReducer, selectedProductOnCartReducer} =
    useSelector(state => state.cart);

  const memoizedCart = useMemo(() => cartReducer, [cartReducer]);

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
    data: {memoizedCart, totalSelectedPrice},
    actions: {},
  };
};

export default CartScreenLogic;
