import {SearchListScreenProps} from './SearchList.types';

const SearchListNavigator = (props: SearchListScreenProps) => {
  const {navigation} = props;

  const goBack = () => navigation.goBack();
  const goDetailScreen = productDetail =>
    navigation.navigate('DetailScreen', productDetail);
  const goSearchScreen = () => navigation.navigate('SearchScreen');
  const goCartScreen = () => navigation.navigate('CartScreen');

  return {
    navigation,
    goBack,
    goCartScreen,
    goDetailScreen,
    goSearchScreen,
  };
};

export default SearchListNavigator;
