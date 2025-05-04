//package import here

//local import here
import HomeNavigator from './Home.navigator';
import {HomeScreenProps} from './Home.types';

const HomeScreenLogic = (props: HomeScreenProps) => {
  const {navigation} = props;

  const {navigator} = HomeScreenLogic.dependencies;

  const {goDetailScreen, goSearchScreen, goCartScreen} = navigator({
    navigation,
  } as any);

  return {
    data: {},
    actions: {goDetailScreen, goSearchScreen, goCartScreen},
  };
};

HomeScreenLogic.dependencies = {
  navigator: HomeNavigator,
};

export default HomeScreenLogic;
