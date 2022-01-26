import React from "react";
import { Button, View, Text } from 'react-native';

export default function ReviewOrderScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Order Review Screen</Text>
            <Button
                title="Checkout"
                onPress={() =>
                    navigation.navigate('Checkout')
                }
            />
        </View>
    );
}
