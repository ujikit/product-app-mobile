import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import DetailScreen from '../screens/Detail';

export type StackParamList = {
  HomeScreenScreen: {id: string; name: string};
  CartScreen: {id: string; name: string};
  DetailScreen: {id: string; name: string};
};

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const Stack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="DetailScreen">
    <Screen name="HomeScreenScreen" component={HomeScreenScreen} />
    <Screen name="CartScreen" component={CartScreen} />
    <Screen name="DetailScreen" component={DetailScreen} />
  </Navigator>
);

export default Stack;
