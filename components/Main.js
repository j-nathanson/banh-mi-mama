
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import MenuItemScreen from './MenuItem';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Menu' component={MenuScreen} />
            <Stack.Screen name='MenuItem' component={MenuItemScreen} options={{ presentation: 'modal', }} />
        </Stack.Navigator>
    )
}
