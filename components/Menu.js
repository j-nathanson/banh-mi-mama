import React, { useRef, useState } from "react";
import { Card, Icon, Button } from 'react-native-elements';
import { View, Text, TouchableHighlight, SectionList, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux'

export default function MenuScreen({ navigation }) {

    const menu = useSelector(state => state.menuReducer.menu);
    const cart = useSelector(state => state.cartReducer.cart);
    const orderCost = useSelector(state => state.cartReducer.totalOrderCost);

    const sectionListRef = useRef(null);

    const [colors, setColors] = useState(
        {
            sandwiches: '#4ee44e',
            rice: '#3e5d18',
            sides: '#3e5d18',
            drinks: '#3e5d18'
        }
    );

    const changeColor = (button, index) => {
        const newColors = { ...colors };
        for (const prop in newColors) {
            newColors[prop] = '#3e5d18'
        };
        newColors[button] = '#4ee44e';
        setColors(newColors);

        sectionListRef.current.scrollToLocation({
            sectionIndex: index, itemIndex: 0
        });
    }


    const renderSectionHeader = ({ section: { title } }) => (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
        </View>
    )

    const renderMenuItem = ({ item }) => {
        return (

            <TouchableHighlight onPress={() =>
                navigation.navigate('MenuItem', {
                    name: item.name,
                    description: item.description,
                    type: item.type,
                    price: item.price,
                    image: item.image
                })
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
        <View style={styles.container} >

            <View style={styles.buttonGroup}>
                <TouchableHighlight>
                    <Icon
                        name='hamburger'
                        type='font-awesome-5'
                        color={colors.sandwiches}
                        raised
                        size={30}
                        onPress={() => changeColor('sandwiches', 0)
                        }
                    />
                </TouchableHighlight>
                <Icon
                    name='rice'
                    type='material-community'
                    color={colors.rice}
                    raised
                    size={30}
                    onPress={() => changeColor('rice', 1)}
                />
                <Icon
                    name='drumstick-bite'
                    type='font-awesome-5'
                    color={colors.sides}
                    raised
                    size={30}
                    onPress={() => changeColor('sides', 2)}
                />
                <Icon
                    name='local-drink'
                    type='material'
                    color={colors.drinks}
                    raised
                    size={30}
                    onPress={() => changeColor('drinks', 3)}
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
            <View style={styles.orderContainer}>
                <Text style={styles.orderTotalCost}>${(Math.round(orderCost * 100) / 100).toFixed(2)}</Text>

                <Button
                    title="Review Order"
                    onPress={() => {
                        cart.length > 0
                            ? navigation.navigate('ReviewOrder')
                            : Alert.alert(
                                "Your bag is empty", " please add some items!",

                            )
                    }
                    }

                    icon={{
                        name: 'shopping-basket',
                        type: 'entypo',
                        size: 20,
                        color: '#3e5d18',
                    }}
                    buttonStyle={{
                        backgroundColor: 'rgba(244, 244, 244, 1)',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        height: 40,
                        width: 200,
                        marginBottom: 5,
                        marginTop: 5
                    }}
                    titleStyle={{ marginHorizontal: 10, color: 'black' }}
                />
            </View>
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
        justifyContent: 'space-around',
        width: '80%',

        margin: 5
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
        // maxWidth: Platform.OS === 'ios' ? 350 : 400
    },
    itemPrice: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 17,
        padding: 10
    },
    orderContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    orderTotalCost: {
        fontFamily: 'DMSans_700Bold',
    }
})