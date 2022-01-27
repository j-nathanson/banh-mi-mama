import React from "react";
import { Button, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default function MenuItemScreen({ route, navigation }) {
    const { menuItemId } = route.params;

    return (
        <Card>
            <Text>Menu item {menuItemId}</Text>
            <Button
                title="add to cart"
                onPress={() => navigation.navigate('Menu')}
            />
        </Card>
    );
}