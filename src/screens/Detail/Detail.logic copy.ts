//package import here

//local import here
import {useDispatch} from 'react-redux';

import {setCartDispatch} from '../../redux/reducers/cartSlice';

import DetailNavigator from './Detail.navigator';
import {DetailScreenProps} from './Detail.types';

const DetailScreenLogic = (props: DetailScreenProps) => {
  const productDetail = props.route.params;

  const {navigation} = props;

  const {navigator} = DetailScreenLogic.dependencies;
  const {goToCartScreen, goBack} = navigator({
    navigation,
  } as any);

  const dispatch = useDispatch();

  const _handleAddToCart = () => {
    dispatch({type: 'cart/addToCart', payload: productDetail});
    goBack();
    goToCartScreen();
  };

  return {
    data: {productDetail},
    actions: {_handleAddToCart},
  };
};

DetailScreenLogic.dependencies = {
  navigator: DetailNavigator,
};

export default DetailScreenLogic;
