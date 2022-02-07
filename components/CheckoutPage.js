import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";



export default function CheckoutScreen({ navigation }) {

    const user = useSelector(state => state.userReducer.info)
    const { firstName, lastName, phone } = user;
    console.log(lastName)
    // console.log(user)
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.infoSection}>
                <Text style={styles.total}>Your total today: $30</Text>
                <View style={styles.userInfo}>
                    <View style={styles.contact}>
                        <Text style={styles.contactHeader}>
                            Contact Information
                        </Text>
                        <Text style={styles.contactInfo}>
                            {firstName} {lastName} {phone}
                        </Text>
                    </View>
                    <Icon
                        name='right'
                        type='antdesign'
                        color='#517fa4'
                        onPress={() => console.log('hel')}
                        containerStyle={styles.editInfo}
                    />
                </View>
            </View>
            <View style={{ flex: 5 }}>
                <Text>name name number</Text>
            </View>
        </View >
    );
}

const styles = new StyleSheet.create({
    infoSection: {
        flex: 2, justifyContent: 'space-around', padding: 20
    },
    total: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 30
    },
    userInfo: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contactHeader: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 20
    },
    contactInfo: {
        color: '#3e5d18',
        fontFamily: 'DMSans_400Regular',
        fontSize: 15
    },
    editInfo: {
        alignSelf: 'center',
        padding: 5
    }
})