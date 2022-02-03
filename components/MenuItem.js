import React, { useState } from "react";
import SandwichCustomize from "./SandwichCustomize";
import { View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { resetCustomizations } from "../redux/sandwichSlice";
import { addItem, removeItem } from "../redux/cartSlice";


export default function MenuItemScreen({ route, navigation }) {
    const { name, description, type, price, image } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(price);
    const customizations = useSelector(state => state.sandwichReducer.customizations)
    const dispatch = useDispatch();

    const menuCartItem = {
        name: name,
        pricePerItem: price,
        quantity,
        totalCost
    }

    if (type === 'banh mi') {
        menuCartItem.customizations = customizations
    }

    const decrementQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
            setTotalCost(totalCost - price)
        }
    }
    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
            setTotalCost(totalCost + price)
        }
    }

    const addToCart = (item) => {
        dispatch(addItem(item))
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Icon
                    name='left'
                    type='antdesign'
                    color='grey'
                    size={20}
                    raised
                    containerStyle={{ marginTop: 20 }}
                    onPress={() => {
                        dispatch(resetCustomizations())
                        navigation.navigate('Menu')
                    }}
                />
            </ImageBackground>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <Text style={styles.label}>Quantity</Text>
                    <View style={styles.quantityButtonGroup}>
                        <Icon
                            name='minus'
                            type='antdesign'
                            color='grey'
                            size={15}
                            raised
                            onPress={() => decrementQuantity()}
                        />
                        <Text style={styles.quantityNum}>{quantity}</Text>
                        <Icon
                            name='plus'
                            type='antdesign'
                            color='grey'
                            size={15}
                            raised
                            onPress={() => incrementQuantity()}
                        />
                    </View>
                </View>
                <View style={{ width: '100%' }}>
                    {type === 'banh mi' ? <SandwichCustomize /> : <View />}
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontFamily: 'DMSans_700Bold' }}>
                    Total Price: ${totalCost}
                </Text>
                <Button
                    title="add to bag"
                    icon={{
                        name: 'shopping-bag',
                        type: 'entypo',
                        size: 10,
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginRight: 10 }}
                    titleStyle={{ fontWeight: '400' }}
                    buttonStyle={{
                        backgroundColor: '#e52d27',
                        borderColor: 'transparent',
                        borderRadius: 10,
                        padding: 5

                    }}
                    containerStyle={{
                        width: 200,

                    }}
                    onPress={() => {
                        addToCart(menuCartItem)
                        dispatch(resetCustomizations())
                    }}
                />
            </View>

        </View>
    );
}

const styles = new StyleSheet.create({
    container: { flex: 1 },
    image: { flex: 2 },
    body: { flex: 4 },
    footer: {
        marginTop: 25,
        marginBottom: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        padding: 7
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'DMSans_700Bold',
        marginBottom: 10
    },
    description: {
        color: '#44484a',
        fontFamily: 'DMSans_400Regular',
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityNum: {
        fontSize: 15,
        width: 25,
        textAlign: 'center',
        fontFamily: 'DMSans_700Bold',
        alignSelf: 'center'
    },
    quantityButtonGroup: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    label: {
        fontSize: 15,
        fontFamily: 'DMSans_700Bold',
        marginLeft: 10
    }
})