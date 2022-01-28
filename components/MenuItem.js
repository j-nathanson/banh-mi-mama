import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../redux/cartSlice";

export default function MenuItemScreen({ route, navigation }) {
    const { menuItemId } = route.params;
    const menu = useSelector((state) => state.menuReducer.menu);
    const menuItem = menu.filter(item => item.id === menuItemId)[0];
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(menuItem.price)
    const dispatch = useDispatch();

    const menuCartItem = {
        name: menuItem.name,
        pricePerItem: menuItem.price,
        quantity,
        totalCost
    }

    const decrementQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
            setTotalCost(totalCost - menuItem.price)
        }
    }
    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
            setTotalCost(totalCost + menuItem.price)
        }
    }

    const addToCart = (item) => {
        // let i = quantity;
        // while (i > 0) {
        //     dispatch(addItem(item));
        //     i--;
        // }
        dispatch(addItem(item))
        navigation.navigate('Menu');
    }

    return (
        <Card>
            <Text>Menu item {menuItemId}</Text>
            <Card.Image
                source={menuItem.image}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Quantity</Text>
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text>
                    ${totalCost}
                </Text>
                <Button
                    title="add to cart"
                    onPress={() => addToCart(menuCartItem)}
                />
            </View>

        </Card>
    );
}