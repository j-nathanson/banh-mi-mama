import React from "react";
import { ListItem, Card } from 'react-native-elements';
import { Button, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { MENU } from "../shared/menuData";

// 
// <ListItem.Content>
//     <ListItem.Title>{item.name}</ListItem.Title>
//     <ListItem.Subtitle>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem eius at quod </ListItem.Subtitle>
// </ListItem.Content>
export default function MenuScreen({ navigation }) {

    const renderMenuItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() =>
                navigation.navigate('MenuItem')
            } underlayColor="white">
                <Card containerStyle={{
                    borderRadius: 20,
                    padding: 0,
                    flex: 2
                }}
                >
                    <Card.Image style={{
                        width: '100%',
                        height: 200,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        marginBottom: 15
                    }}
                        resizeMode="cover"
                        source={item.image}>
                    </Card.Image>

                    <View style={{
                        padding: 5,
                        marginBottom: 15
                    }}>
                        <Text>{item.name}</Text>
                        <Text style={{ padding: 0, }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, pariatur?</Text>
                    </View>
                    <View>
                        <Text>$8.00</Text>
                    </View>
                </Card>
            </TouchableHighlight >
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
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

