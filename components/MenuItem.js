import React from "react";
import { Button, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux'

export default function MenuItemScreen({ route, navigation }) {
    const { menuItemId } = route.params;
    const menu = useSelector((state) => state.menuReducer.menu);

    const menuItem = menu.filter(item => item.id === menuItemId)[0];
    console.log(menuItem);
    return (
        <Card>
            <Text>Menu item {menuItemId}</Text>
            <Card.Image
                source={menuItem.image}
            />
            <Button
                title="add to cart"
                onPress={() => navigation.navigate('Menu')}
            />
        </Card>
    );
}