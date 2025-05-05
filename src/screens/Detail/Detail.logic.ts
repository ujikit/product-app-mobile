//package import here

//local import here
import {DetailScreenProps} from './Detail.types';

const DetailScreenLogic = (props: DetailScreenProps) => {
  const productDetail = props.route.params;

  return {
    data: {productDetail},
    actions: {},
  };
};

export default DetailScreenLogic;
