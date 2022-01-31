import React, { useRef } from "react";
import { ListItem, Card } from 'react-native-elements';
import { Button, View, Text, FlatList, TouchableHighlight, SectionList } from 'react-native';
import { useSelector } from 'react-redux'

export default function MenuScreen({ navigation }) {
    // use filter to get menu sections?
    const sandwiches = useSelector(state => state.menuReducer.menu).filter(item => item.type === 'banh mi')
    console.log(sandwiches)

    const menu = useSelector(state => state.menuReducer.menu);
    const orderCost = useSelector(state => state.cartReducer.totalOrderCost);

    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    // const myRef = useRef(null)
    // const executeScroll = () => scrollToRef(myRef)

    const sectionListRef = useRef(null);

    const renderSectionHeader = ({ section: { title } }) => (
        <Text>{title}</Text>
    )
    const renderMenuItem = ({ item }) => {

        return (

            <TouchableHighlight onPress={() =>
                navigation.navigate('MenuItem', { menuItemId: item.id })
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
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ padding: 0, }}>{item.description}</Text>
                    </View>
                    <View>
                        <Text>${item.price}</Text>
                    </View>
                </Card>
            </TouchableHighlight >
        )
    }

    return (

        <View style={{ flex: 1, alignItems: 'center', }}>
            <Text>Menu Screen</Text>
            <Button
                title="Banh Mi"
                onPress={() => {
                    sectionListRef.current.scrollToLocation({
                        sectionIndex: 0, itemIndex: 0
                    });
                }}
            />
            <Button
                title="Rice Dishes"
                onPress={() => {
                    sectionListRef.current.scrollToLocation({
                        sectionIndex: 1, itemIndex: 0
                    });
                }}
            />
            <Button
                title="Sides"
                onPress={() => {
                    sectionListRef.current.scrollToLocation({
                        sectionIndex: 2, itemIndex: 0
                    });
                }}
            />
            <Button
                title="Drinks"
                onPress={() => {
                    sectionListRef.current.scrollToLocation({
                        sectionIndex: 3, itemIndex: 0
                    });
                }}
            />
            <SectionList
                ref={sectionListRef}
                sections={menu}
                keyExtractor={(item, index) => item + index}
                renderItem={renderMenuItem}
                renderSectionHeader={renderSectionHeader}
            />
            <Text>${orderCost}</Text>
            <Button
                title="Review Order"
                onPress={() =>
                    navigation.navigate('ReviewOrder')
                }
            />
        </View >

    );
}
