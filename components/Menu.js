import React from "react";
import { ListItem } from 'react-native-elements';
import { Button, View, Text, FlatList } from 'react-native';
import { MENU } from "../shared/menuData";

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
            <Button
                title="Review Order"
                onPress={() =>
                    navigation.navigate('ReviewOrder')
                }
            />
        </View>
    );
}

