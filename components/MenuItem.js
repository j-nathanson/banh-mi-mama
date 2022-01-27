import React from "react";
import { Button, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../redux/cartSlice";

export default function MenuItemScreen({ route, navigation }) {
    const { menuItemId } = route.params;
    const menu = useSelector((state) => state.menuReducer.menu);
    const menuItem = menu.filter(item => item.id === menuItemId)[0];
    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(addItem(item));
        navigation.navigate('Menu');
    }
    const removeFromCart = (item) => {
        dispatch(removeItem(item));
        navigation.navigate('Menu');
    }


    return (
        <Card>
            <Text>Menu item {menuItemId}</Text>
            <Card.Image
                source={menuItem.image}
            />
            <Button
                title="add to cart"
                onPress={() => addToCart(menuItem)}
            />
            <Button
                title="remove from cart"
                onPress={() => removeFromCart(menuItem)}
            />
        </Card>
    );
}