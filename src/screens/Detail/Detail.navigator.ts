import {DetailScreenProps} from './Detail.types';

const DetailNavigator = (props: DetailScreenProps) => {
  const {navigation} = props;

  const goBack = () => navigation.goBack();

  return {
    navigation,
    goBack,
  };
};

export default DetailNavigator;
