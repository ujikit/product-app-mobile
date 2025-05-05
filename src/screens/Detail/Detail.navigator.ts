import {DetailScreenProps} from './Detail.types';

const DetailNavigator = (props: DetailScreenProps) => {
  const {navigation} = props;

  const goBack = () => navigation.goBack();
  const goToCartScreen = () => navigation.navigate('CartScreen');

  return {
    navigation,
    goBack,
    goToCartScreen,
  };
};

export default DetailNavigator;
