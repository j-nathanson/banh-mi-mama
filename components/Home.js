import React from "react";
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'LobsterTwo_400Regular_Italic', fontSize: 50 }}>Banh Mi Mama</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button
                    title="Start your order!"
                    onPress={() => navigation.navigate('Menu')}
                />
            </View>
        </View >
    );
}

