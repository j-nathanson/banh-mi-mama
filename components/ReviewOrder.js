import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from "../redux/cartSlice";



export default function ReviewOrderScreen({ navigation }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart)
    let totalOrderCost = useSelector(state => state.cartReducer.totalOrderCost)
    totalOrderCost = (Math.round(totalOrderCost * 100) / 100).toFixed(2)

    if (cart.length === 0) {
        navigation.navigate('Menu')
    }

    const renderDirectoryItem = ({ item }) => {

        return (
            <ListItem>
                <Avatar
                    rounded
                    source={item.image}
                    size="medium"
                />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>Quantity: {item.quantity}</ListItem.Subtitle>

                    <Icon
                        name="trash-o"
                        type="font-awesome"
                        size={20}
                        color="red"
                        onPress={() =>
                            dispatch(removeItem({ id: item.id, totalCost: item.totalCost }))
                        }
                    />
                </ListItem.Content>
                <Text>${item.totalCost}</Text>
            </ListItem>

        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.deliveryContainer}>
                <Text style={styles.delivery}>Delivery in: 15-20 mins</Text>
            </View>
            <View style={{ flex: 5 }}>
                <FlatList
                    data={cart}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <Button
                title={` $${totalOrderCost} Checkout Here`}
                icon={{
                    name: "food-fork-drink",
                    type: 'material-community',
                    size: 20,
                    color: "white"
                }}
                onPress={() =>
                    navigation.navigate('Checkout')
                }
                buttonStyle={{
                    backgroundColor: '#3e5d18'
                }}
                titleStyle={{
                    fontFamily: 'DMSans_400Regular',
                }}
            />
        </View>
    );
}

const styles = new StyleSheet.create({
    container: { flex: 1 },
    deliveryContainer: {
        flex: .3,
        justifyContent: 'center',
        margin: 10
    },
    delivery: { fontFamily: 'DMSans_700Bold' },
})



