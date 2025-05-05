import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import DetailScreen from '../screens/Detail';
import SearchScreen from '../screens/Search';
import SearchListScreen from '../screens/SearchList';

export type StackParamList = {
  HomeScreen: any;
  CartScreen: any;
  DetailScreen: any;
  SearchScreen: any;
  SearchListScreen: any;
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
    <Screen name="SearchListScreen" component={SearchListScreen} />
  </Navigator>
);

export default Stack;
