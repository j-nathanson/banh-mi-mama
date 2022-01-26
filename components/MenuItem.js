import React from "react";
import { Button, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default function MenuItemScreen({ navigation }) {
    return (
        <Card>
            <Text>Menu item</Text>
            <Button
                title="add to cart"
                onPress={() => navigation.navigate('Menu')}
            />
        </Card>
    );
}