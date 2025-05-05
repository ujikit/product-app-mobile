//package import here

//local import here
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SearchNavigator from './Search.navigator';
import {SearchScreenProps} from './Search.types';

const suggestedTags = [
  'charger aki mobil',
  'charger aki motor',
  'charger aki stanley',
  'charger aki motor dan mobil',
  'charger aki 12 volt otomatis',
];

const searchResults = [
  'charger aki',
  'charger aki motor',
  'charger aki mobil 12/24 volt',
  'charger aki 12 volt otomatis',
  'charger aki mobil',
  'charger aki 5 ampere',
  'charger aki lithium',
  'charger aki 6 volt',
  'charger aki 10 ampere',
  'charger aki rakitan',
  'charger aki 12 volt',
  'charger aki delta',
];

const SearchScreenLogic = (props: SearchScreenProps) => {
  const {navigation} = props;

  const {navigator} = SearchScreenLogic.dependencies;

  const {} = navigator({
    navigation,
  } as any);

  const [searchValue, setSearchValue] = useState('');

  return {
    data: {suggestedTags, searchResults, searchValue},
    actions: {setSearchValue},
  };
};

SearchScreenLogic.dependencies = {
  navigator: SearchNavigator,
};

export default SearchScreenLogic;
