//package import here

//local import here
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import HomeNavigator from './Home.navigator';
import {HomeScreenProps} from './Home.types';

const HomeScreenLogic = (props: HomeScreenProps) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const {products} = useSelector((state: any) => state.product);

  const {navigator} = HomeScreenLogic.dependencies;

  const {goDetailScreen, goSearchScreen, goCartScreen} = navigator({
    navigation,
  } as any);

  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    dispatch({type: 'product/fetchProducts', payload: currentCategory});
  }, [currentCategory, dispatch]);

  return {
    data: {products, currentCategory},
    actions: {goDetailScreen, goSearchScreen, goCartScreen, setCurrentCategory},
  };
};

HomeScreenLogic.dependencies = {
  navigator: HomeNavigator,
};

export default HomeScreenLogic;
