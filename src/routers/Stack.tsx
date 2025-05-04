import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import DetailScreen from '../screens/Detail';
import SearchScreen from '../screens/Search';

export type StackParamList = {
  HomeScreen: {id: string; name: string};
  CartScreen: {id: string; name: string};
  DetailScreen: {id: string; name: string};
  SearchScreen: {id: string; name: string};
};

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const Stack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomeScreen">
    <Screen name="HomeScreen" component={HomeScreen} />
    <Screen name="CartScreen" component={CartScreen} />
    <Screen name="DetailScreen" component={DetailScreen} />
    <Screen name="SearchScreen" component={SearchScreen} />
  </Navigator>
);

export default Stack;
