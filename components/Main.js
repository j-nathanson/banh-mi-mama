import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import ReviewOrderScreen from './ReviewOrder';
import CheckoutScreen from './CheckoutPage';
import MenuItemScreen from './MenuItem';
import AddCard from './AddCard';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Menu' component={MenuScreen}
                options={{
                    headerTitleStyle: styles.headerTitle,
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name='MenuItem' component={MenuItemScreen} options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name='ReviewOrder' component={ReviewOrderScreen}
                options={{
                    title: 'Review',
                    headerTitleStyle: styles.headerTitle,
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name='Checkout' component={CheckoutScreen}
                options={{
                    title: 'Checkout',
                    headerTitleStyle: styles.headerTitle,
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name='AddCard' component={AddCard} />
        </Stack.Navigator>
    )
}

const styles = new StyleSheet.create({
    headerTitle: {
        color: '#3e5d18',
        fontFamily: 'DMSans_400Regular',
        fontSize: 30
    }
})




