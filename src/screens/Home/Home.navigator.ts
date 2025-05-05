import {HomeScreenProps} from './Home.types';

const HomeNavigator = (props: HomeScreenProps) => {
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

export default HomeNavigator;
