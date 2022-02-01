import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../redux/cartSlice";

export default function MenuItemScreen({ route, navigation }) {
    const { name, price, image } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(price);
    const dispatch = useDispatch();

    const menuCartItem = {
        name: name,
        pricePerItem: price,
        quantity,
        totalCost
    }

    const decrementQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
            setTotalCost(totalCost - price)
        }
    }
    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
            setTotalCost(totalCost + price)
        }
    }

    const addToCart = (item) => {
        dispatch(addItem(item))
        navigation.navigate('Menu');
    }

    return (
        <Card>
            <Text>Menu item</Text>
            <Card.Image
                source={image}
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