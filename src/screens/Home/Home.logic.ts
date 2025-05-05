//package import here

//local import here
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import HomeNavigator from './Home.navigator';
import {HomeScreenProps} from './Home.types';

const HomeScreenLogic = (props: HomeScreenProps) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const {products} = useSelector(state => state.cart);

  const {navigator} = HomeScreenLogic.dependencies;

  const {goDetailScreen, goSearchScreen, goCartScreen} = navigator({
    navigation,
  } as any);

  useEffect(() => {
    dispatch({type: 'cart/fetchProducts'});
  }, [dispatch]);

  return {
    data: {products},
    actions: {goDetailScreen, goSearchScreen, goCartScreen},
  };
};

HomeScreenLogic.dependencies = {
  navigator: HomeNavigator,
};

export default HomeScreenLogic;
