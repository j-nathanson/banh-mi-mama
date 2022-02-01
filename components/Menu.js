import React, { useRef } from "react";
import { ListItem, Card } from 'react-native-elements';
import { Button, View, Text, FlatList, TouchableHighlight, SectionList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

export default function MenuScreen({ navigation }) {
    // use filter to get menu sections?
    const sandwiches = useSelector(state => state.menuReducer.menu).filter(item => item.type === 'banh mi')
    console.log(sandwiches)

    const menu = useSelector(state => state.menuReducer.menu);
    const orderCost = useSelector(state => state.cartReducer.totalOrderCost);


    const sectionListRef = useRef(null);

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={styles.headerContainer}><Text style={styles.header}>{title}</Text></View>
    )
    const renderMenuItem = ({ item }) => {

        return (

            <TouchableHighlight onPress={() =>
                navigation.navigate('MenuItem', { name: item.name, price: item.price, image: item.image })
            } underlayColor="white">
                <Card containerStyle={styles.cardContainer}
                >
                    <Card.Image style={styles.cardImage}
                        resizeMode="cover"
                        source={item.image}>
                    </Card.Image>

                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTextHeader}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemPrice}>${(Math.round(item.price * 100) / 100).toFixed(2)}</Text>
                    </View>
                </Card>
            </TouchableHighlight >
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.buttonGroup}>
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
            </View>
            <SectionList
                ref={sectionListRef}
                sections={menu}
                keyExtractor={(item, index) => item + index}
                renderItem={renderMenuItem}
                renderSectionHeader={renderSectionHeader}
                stickySectionHeadersEnabled={true}
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',

    },
    buttonGroup: {
        flexDirection: 'row',
        marginBottom: 30
    },
    headerContainer: {
        backgroundColor: 'white',
        padding: 5,

    },
    header: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 40,
        marginLeft: 10
    },
    cardContainer: {
        borderRadius: 20,
        padding: 0,
        flex: 2
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 5
    },
    cardTextContainer: {
        padding: 10,
        marginBottom: 15,

    },
    cardTextHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'DMSans_700Bold',
        marginBottom: 10
    },
    itemDescription: {
        color: '#44484a',
        fontFamily: 'DMSans_400Regular',
        maxWidth: Platform.OS === 'ios' ? 350 : 400
    },
    itemPrice: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 17,
        padding: 10
    }
})