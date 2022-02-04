import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from "../redux/cartSlice";



export default function ReviewOrderScreen({ navigation }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart)
    const totalOrderCost = useSelector(state => state.cartReducer.totalOrderCost)

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
                />
            </View>
            <View style={{ flex: .5, marginTop: 'auto' }}>
                <Text>{totalOrderCost}</Text>
            </View>

            <Button
                title="Checkout"
                onPress={() =>
                    navigation.navigate('Checkout')
                }
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