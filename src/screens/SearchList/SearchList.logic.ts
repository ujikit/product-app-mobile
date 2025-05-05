//package import here

//local import here
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SearchListNavigator from './SearchList.navigator';
import {SearchListScreenProps} from './SearchList.types';

const SearchListScreenLogic = (props: SearchListScreenProps) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const {products} = useSelector((state: any) => state.product);

  const {navigator} = SearchListScreenLogic.dependencies;

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

SearchListScreenLogic.dependencies = {
  navigator: SearchListNavigator,
};

export default SearchListScreenLogic;
