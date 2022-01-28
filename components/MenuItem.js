import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../redux/cartSlice";

export default function MenuItemScreen({ route, navigation }) {
    const { menuItemId } = route.params;
    const menu = useSelector((state) => state.menuReducer.menu);
    const menuItem = menu.filter(item => item.id === menuItemId)[0];
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();

    const decrementQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
        }
    }
    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    const addToCart = (item) => {
        dispatch(addItem(item));
        navigation.navigate('Menu');
    }
    // const removeFromCart = (item) => {
    //     dispatch(removeItem(item));
    //     navigation.navigate('Menu');
    // }

    return (
        <Card>
            <Text>Menu item {menuItemId}</Text>
            <Card.Image
                source={menuItem.image}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Quanity</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => decrementQuantity()}>
                        <Icon
                            name='minus-circle'
                            type='feather'
                            color='grey'
                        />
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity onPress={() => incrementQuantity()}>
                        <Icon
                            name='plus-circle'
                            type='feather'
                            color='grey'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Button
                title="add to cart"
                onPress={() => addToCart(menuItem)}
            />
        </Card>
    );
}