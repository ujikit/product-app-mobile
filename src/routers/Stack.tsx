import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenScreen from '../screens/Home';
import CartScreen from '../screens/Cart';

export type StackParamList = {
  HomeScreenScreen: {id: string; name: string};
  CartScreen: {id: string; name: string};
};

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const Stack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="CartScreen">
    <Screen name="HomeScreenScreen" component={HomeScreenScreen} />
    <Screen name="CartScreen" component={CartScreen} />
  </Navigator>
);

export default Stack;
