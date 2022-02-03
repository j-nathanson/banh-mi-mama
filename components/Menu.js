import React, { useRef, useState } from "react";
import { Card, Icon, Button } from 'react-native-elements';
import { View, Text, TouchableHighlight, SectionList, StyleSheet } from 'react-native'; import { useSelector } from 'react-redux'

export default function MenuScreen({ navigation }) {

    const menu = useSelector(state => state.menuReducer.menu);
    const orderCost = useSelector(state => state.cartReducer.totalOrderCost);

    const [color1, setColor1] = useState('#4ee44e');
    const [color2, setColor2] = useState('#3e5d18');
    const [color3, setColor3] = useState('#3e5d18');
    const [color4, setColor4] = useState('#3e5d18');

    const sectionListRef = useRef(null);

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
                        color={color1}
                        raised
                        size={30}
                        onPress={(e) => {
                            {
                                sectionListRef.current.scrollToLocation({
                                    sectionIndex: 0, itemIndex: 0
                                });
                                setColor1('#4ee44e');
                                setColor2('#3e5d18');
                                setColor3('#3e5d18');
                                setColor4('#3e5d18');
                            }
                        }}
                    />
                </TouchableHighlight>
                <Icon
                    name='rice'
                    type='material-community'
                    color={color2}
                    raised
                    size={30}
                    onPress={() => {
                        sectionListRef.current.scrollToLocation({
                            sectionIndex: 1, itemIndex: 0
                        });
                        setColor1('#3e5d18');
                        setColor2('#4ee44e');
                        setColor3('#3e5d18');
                        setColor4('#3e5d18');
                    }}
                />
                <Icon
                    name='drumstick-bite'
                    type='font-awesome-5'
                    color={color3}
                    raised
                    size={30}
                    onPress={() => {
                        sectionListRef.current.scrollToLocation({
                            sectionIndex: 2, itemIndex: 0
                        });
                        setColor1('#3e5d18');
                        setColor2('#3e5d18');
                        setColor3('#4ee44e');
                        setColor4('#3e5d18');
                    }}
                />
                <Icon
                    name='local-drink'
                    type='material'
                    color={color4}
                    raised
                    size={30}
                    onPress={() => {
                        sectionListRef.current.scrollToLocation({
                            sectionIndex: 3, itemIndex: 0
                        });
                        setColor1('#3e5d18');
                        setColor2('#3e5d18');
                        setColor3('#3e5d18');
                        setColor4('#4ee44e');
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
            <View style={styles.orderContainer}>
                <Text style={styles.orderTotalCost}>${(Math.round(orderCost * 100) / 100).toFixed(2)}</Text>

                <Button
                    title="Review Order"
                    onPress={() =>
                        navigation.navigate('ReviewOrder')
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