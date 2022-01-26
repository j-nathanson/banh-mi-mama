import React from "react";
import { ListItem } from 'react-native-elements';
import { Button, View, Text, FlatList } from 'react-native';
import { MENU } from "../shared/menuData";

export default function MenuScreen({ navigation }) {

    const renderMenuItem = ({ item }) => {
        return (
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem eius at quod </ListItem.Subtitle>
            </ListItem.Content>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Menu Screen</Text>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={MENU}
                renderItem={renderMenuItem}
            />
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

