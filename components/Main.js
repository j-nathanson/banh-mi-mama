
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import ReviewOrderScreen from './ReviewOrder';
import CheckoutScreen from './CheckoutPage';

import MenuItemScreen from './MenuItem';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Menu' component={MenuScreen} />
            <Stack.Screen name='MenuItem' component={MenuItemScreen} options={{ presentation: 'modal', }} />
            <Stack.Screen name='ReviewOrder' component={ReviewOrderScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
        </Stack.Navigator>
    )
}

