//package import here

//local import here
import {SearchScreenProps} from './Search.types';

const SearchScreenLogic = (props: SearchScreenProps) => {
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

  return {
    data: {suggestedTags, searchResults},
    actions: {},
  };
};

export default SearchScreenLogic;
