import React, { useState } from "react";
import { Button, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={{ flex: 2, }}
            >
                <Icon
                    name='left'
                    type='antdesign'
                    color='grey'
                    size={20}
                    raised
                    containerStyle={{ marginTop: 20 }}
                    onPress={() => navigation.navigate('Menu')}
                />
            </ImageBackground>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 4 }}>
                <Text>Quantity</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => decrementQuantity()}>
                        <Icon
                            name='minus'
                            type='antdesign'
                            color='grey'
                            raised
                        />
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity onPress={() => incrementQuantity()}>
                        <Icon
                            name='plus'
                            type='antdesign'
                            color='grey'
                            raised
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

        </View>
    );
}