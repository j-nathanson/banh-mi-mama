import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import ReviewOrderScreen from './ReviewOrder';
import CheckoutScreen from './CheckoutPage';
import MenuItemScreen from './MenuItem';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Menu' component={MenuScreen} options={{
                headerStyle: {
                    alignItems: 'center',

                },
                headerTitleStyle: {
                    color: '#3e5d18',
                    fontFamily: 'DMSans_400Regular',
                    fontSize: 30

                },
                headerTitleAlign: 'center'
            }} />
            <Stack.Screen name='MenuItem' component={MenuItemScreen} options={{ presentation: 'modal', }} />
            <Stack.Screen name='ReviewOrder' component={ReviewOrderScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
        </Stack.Navigator>
    )
}



