import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Overlay, Input } from "react-native-elements";
import * as Notifications from 'expo-notifications';
import { useSelector, useDispatch } from "react-redux";
import { updateUserProperty } from "../redux/userSlice";
import * as SecureStore from 'expo-secure-store';


export default function CheckoutScreen({ navigation }) {

    const dispatch = useDispatch();

    const totalOrderCost = useSelector(state => state.cartReducer.totalOrderCost)
    const user = useSelector(state => state.userReducer.info)
    const { address, aptNum, email, firstName, lastName, orderType, phone } = user;

    const creditIds = useSelector(state => state.userReducer.info.creditIds);
    const [username, setUsername] = useState('');
    const [endDigits, setEndDigits] = useState('');

    const [visible, setVisible] = useState(false);
    const [payVisible, setPayVisible] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const presentLocalNotification = async (firstName) => {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: `Thank You for Your Order ${firstName}`,
                    body: `We\'ll start working on your meal!`
                },
                trigger: null
            });
        }

        sendNotification();
        navigation.navigate('Home');
    }
    useEffect(() => {
        SecureStore.getItemAsync('creditCard')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);

                setUsername(userinfo.nameOnCard);
                setEndDigits(userinfo.creditNum.substr(-4));
            });

        if (creditIds.length > 0) {
            setPayVisible(false);
        }

    })

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.infoSection}>
                <Text style={styles.total}>Your total today: ${totalOrderCost}</Text>
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
                        onPress={() => toggleOverlay()}
                        containerStyle={styles.editInfo}
                    />
                </View>
            </View>
            <View style={styles.creditContainer}>
                <View>
                    <Text style={styles.creditHeader}>Payment</Text>

                    {creditIds.length > 0 ?
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 10 }}>
                            <Icon
                                name='credit-card-outline'
                                type='material-community'
                                color='#3e5d18'
                                size={30}
                                containerStyle={{ marginRight: 20 }}
                            />
                            <Text style={styles.creditCardInfo}>{username} </Text>
                            <Text style={styles.creditCardInfo}> •••• •••• •••• {endDigits}</Text>
                        </View>
                        : <View />}

                    <View style={styles.buttonSection}>
                        <Icon
                            name='credit-card-plus-outline'
                            type='material-community'
                            color='#517fa4'
                            size={30}
                            raised
                            onPress={() => navigation.navigate('AddCard')}
                        />
                        <Text style={styles.buttonSectionText}>Add a Card</Text>
                    </View>
                </View>

                <Button
                    title='pay'
                    disabled={payVisible}
                    containerStyle={{ marginTop: 'auto' }}
                    onPress={() => presentLocalNotification(firstName)}
                >
                </Button>
            </View>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <Text style={styles.overlayHeader}>
                    Enter Your Info!
                </Text>

                <Input
                    label='First Name'
                    value={firstName}
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'firstName', value: value }))}
                />
                <Input
                    label='Last Name'
                    value={lastName}
                    leftIcon={{ type: 'entypo', name: 'man' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'lastName', value: value }))}
                />

                <Input
                    label='Phone Number'
                    value={phone}
                    leftIcon={{ type: 'antdesign', name: 'phone' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'phone', value: value }))}
                />
                <Input
                    label='Email'
                    value={email}
                    leftIcon={{ type: 'feather', name: 'mail' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'email', value: value }))}
                />

                {orderType === 'delivery' ?
                    <>
                        <Input
                            label='Address'
                            value={address}
                            leftIcon={{ type: 'font-awesome-5', name: 'house-user' }}
                            onChangeText={(value) => dispatch(updateUserProperty({ name: 'address', value: value }))}

                        />
                        <Input
                            label='Apartment Number'
                            value={aptNum}
                            leftIcon={{ type: 'material-community', name: 'doorbell' }}
                            onChangeText={(value) => dispatch(updateUserProperty({ name: 'aptNum', value: value }))}
                        />
                    </>
                    : <View />
                }
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Finish editing"
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            borderColor: '#3e5d18',
                            borderWidth: 1,
                            backgroundColor: 'white',
                            borderRadius: 30,
                        }}
                        titleStyle={{
                            color: 'black',
                            fontFamily: 'DMSans_400Regular',
                        }}
                        containerStyle={{
                            width: 200,
                        }}
                        onPress={() => {
                            toggleOverlay()
                        }}
                    />
                </View>
            </Overlay>
        </View >
    );
}

const styles = new StyleSheet.create({
    infoSection: {
        flex: 2,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 15,
        margin: 15
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
        color: '#44484a',
        fontFamily: 'DMSans_400Regular',
        fontSize: 15
    },
    editInfo: {
        alignSelf: 'center',
        padding: 5
    },
    overlayHeader: {
        fontSize: 25,
        fontFamily: 'DMSans_400Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    creditContainer: {
        flex: 4,
        backgroundColor: 'white',
        padding: 15,
        marginTop: 0,
        marginHorizontal: 15
    },
    creditHeader: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonSection: {
        flexDirection: 'row',
        width: '100%'
    },
    buttonSectionText: {
        alignSelf: 'center',
        fontFamily: 'DMSans_400Regular',
        fontSize: 20,
        marginLeft: 10

    },
    creditCardInfo: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 15
    }
})