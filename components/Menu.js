import React from "react";
import { Button, View, Text } from 'react-native';

export default function MenuScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Menu Screen</Text>
            <Button
                title="Go to menu item"
                onPress={() =>
                    navigation.navigate('MenuItem')
                }
            />
        </View>
    );
}

